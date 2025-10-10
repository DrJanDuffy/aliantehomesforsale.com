# Check Cloudflare Configuration
$token = $env:CLOUDFLARE_GLOBAL_API_TOKEN

if (-not $token) {
    Write-Host "ERROR: CLOUDFLARE_GLOBAL_API_TOKEN not found" -ForegroundColor Red
    exit 1
}

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

Write-Host "Fetching zone information..." -ForegroundColor Cyan

try {
    $zonesResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones?name=aliantehomesforsale.com" -Headers $headers -Method Get
    
    if (-not $zonesResponse.success) {
        Write-Host "ERROR: Failed to fetch zones" -ForegroundColor Red
        Write-Host ($zonesResponse.errors | ConvertTo-Json) -ForegroundColor Red
        exit 1
    }
    
    $zoneId = $zonesResponse.result[0].id
    $zoneName = $zonesResponse.result[0].name
    Write-Host "Zone found: $zoneName" -ForegroundColor Green
    Write-Host "Zone ID: $zoneId" -ForegroundColor Gray
    Write-Host ""
    
    # Get page rules
    Write-Host "Fetching page rules..." -ForegroundColor Cyan
    $pageRulesResponse = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/pagerules" -Headers $headers -Method Get
    
    if ($pageRulesResponse.success) {
        Write-Host "Found $($pageRulesResponse.result.Count) page rules:" -ForegroundColor Green
        Write-Host ""
        
        foreach ($rule in $pageRulesResponse.result | Sort-Object priority) {
            Write-Host "Priority $($rule.priority): $($rule.targets[0].constraint.value)" -ForegroundColor Yellow
            Write-Host "  Status: $($rule.status)" -ForegroundColor Gray
            foreach ($action in $rule.actions) {
                Write-Host "  Action: $($action.id) = $($action.value)" -ForegroundColor Gray
            }
            Write-Host ""
        }
    }
    
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "PROBLEM IDENTIFIED" -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "Your redirect rule is catching sitemap.xml and robots.txt"
    Write-Host "creating a 308 redirect loop."
    Write-Host ""
    Write-Host "FIX:" -ForegroundColor Yellow
    Write-Host "Go to https://dash.cloudflare.com and add these page rules:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "1. *aliantehomesforsale.com/sitemap.xml (Cache Level: Standard)" -ForegroundColor Green
    Write-Host "2. *aliantehomesforsale.com/robots.txt (Cache Level: Standard)" -ForegroundColor Green
    Write-Host "3. aliantehomesforsale.com/* (Forwarding URL: 301 to www)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Make sure sitemap/robots rules have HIGHER priority (lower number)" -ForegroundColor Yellow
    
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
}

