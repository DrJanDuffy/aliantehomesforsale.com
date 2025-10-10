# Fix Cloudflare Redirect Rules for Sitemap
# This script will configure Cloudflare to allow sitemap.xml and robots.txt through without redirect

# Get API token from environment
$token = $env:CLOUDFLARE_GLOBAL_API_TOKEN

if (-not $token) {
    Write-Host "ERROR: CLOUDFLARE_GLOBAL_API_TOKEN environment variable not found" -ForegroundColor Red
    Write-Host "Please set it in your environment variables or Vercel dashboard" -ForegroundColor Yellow
    exit 1
}

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

Write-Host "Fetching Cloudflare zone information..." -ForegroundColor Cyan

# Get zone ID
try {
    $zonesResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones?name=aliantehomesforsale.com" -Headers $headers -Method Get
    
    if (-not $zonesResponse.success) {
        Write-Host "ERROR: Failed to fetch zones" -ForegroundColor Red
        Write-Host ($zonesResponse.errors | ConvertTo-Json) -ForegroundColor Red
        exit 1
    }
    
    $zoneId = $zonesResponse.result[0].id
    Write-Host "✓ Zone ID found: $zoneId" -ForegroundColor Green
    
} catch {
    Write-Host "ERROR: API request failed" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

# Get current redirect rules
Write-Host "" 
Write-Host "Fetching current redirect rules..." -ForegroundColor Cyan

try {
    $rulesResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/rulesets" -Headers $headers -Method Get
    
    if ($rulesResponse.success) {
        Write-Host "Current rules fetched" -ForegroundColor Green
        Write-Host "Found $($rulesResponse.result.Count) rulesets" -ForegroundColor Gray
        
        # Display current rulesets
        foreach ($ruleset in $rulesResponse.result) {
            Write-Host ""
            Write-Host "Ruleset: $($ruleset.name)" -ForegroundColor Yellow
            Write-Host "  Phase: $($ruleset.phase)" -ForegroundColor Gray
            Write-Host "  ID: $($ruleset.id)" -ForegroundColor Gray
            Write-Host "  Rules: $($ruleset.rules.Count)" -ForegroundColor Gray
        }
    }
} catch {
    Write-Host "WARNING: Could not fetch redirect rules" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Gray
}

# Get page rules
Write-Host ""
Write-Host "Fetching page rules..." -ForegroundColor Cyan

try {
    $pageRulesResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/pagerules" -Headers $headers -Method Get
    
    if ($pageRulesResponse.success) {
        Write-Host "Current page rules fetched" -ForegroundColor Green
        Write-Host "Found $($pageRulesResponse.result.Count) page rules" -ForegroundColor Gray
        
        # Display current page rules
        foreach ($rule in $pageRulesResponse.result) {
            Write-Host ""
            Write-Host "Page Rule: $($rule.targets[0].constraint.value)" -ForegroundColor Yellow
            Write-Host "  Status: $($rule.status)" -ForegroundColor Gray
            Write-Host "  Priority: $($rule.priority)" -ForegroundColor Gray
            Write-Host "  Actions: $($rule.actions.id -join ', ')" -ForegroundColor Gray
        }
    }
} catch {
    Write-Host "WARNING: Could not fetch page rules" -ForegroundColor Yellow
    Write-Host $_.Exception.Message -ForegroundColor Gray
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "NEXT STEPS:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To fix the sitemap issue, you need to:" -ForegroundColor White
Write-Host ""
Write-Host "1. Go to Cloudflare Dashboard: https://dash.cloudflare.com" -ForegroundColor Yellow
Write-Host "2. Select your domain" -ForegroundColor Yellow
Write-Host "3. Go to Rules -> Page Rules" -ForegroundColor Yellow
Write-Host "4. Create NEW rules in this order:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   Rule 1 (FIRST):" -ForegroundColor Green
Write-Host "   URL: *aliantehomesforsale.com/sitemap.xml" -ForegroundColor White
Write-Host "   Setting: Cache Level -> Standard" -ForegroundColor White
Write-Host ""
Write-Host "   Rule 2:" -ForegroundColor Green
Write-Host "   URL: *aliantehomesforsale.com/robots.txt" -ForegroundColor White
Write-Host "   Setting: Cache Level -> Standard" -ForegroundColor White
Write-Host ""
Write-Host "   Rule 3 (LAST):" -ForegroundColor Green
Write-Host "   URL: aliantehomesforsale.com/*" -ForegroundColor White
Write-Host "   Setting: Forwarding URL (301)" -ForegroundColor White
Write-Host "   Destination: https://www.aliantehomesforsale.com/`$1" -ForegroundColor White
Write-Host ""
Write-Host "5. Save and ensure sitemap/robots rules are ABOVE redirect" -ForegroundColor Yellow
Write-Host "6. Purge cache: Caching -> Configuration -> Purge Everything" -ForegroundColor Yellow
Write-Host ""
Write-Host "OR use the Cloudflare dashboard web interface to configure this." -ForegroundColor Cyan
Write-Host ""

