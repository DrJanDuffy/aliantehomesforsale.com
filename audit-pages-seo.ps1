# SEO Content Audit Script
# Checks each page for: 1 H1, 3+ H2, 750+ words

$pages = Get-ChildItem -Path "app" -Recurse -Filter "page.tsx"

Write-Host "=== SEO CONTENT AUDIT ===" -ForegroundColor Cyan
Write-Host ""

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw
    $pagePath = $page.FullName.Replace((Get-Location).Path, "").Replace("\app\", "/").Replace("\page.tsx", "").Replace("\", "/")
    
    # Count H1 tags
    $h1Count = ([regex]::Matches($content, '<h1[^>]*>|<h1>')).Count
    
    # Count H2 tags
    $h2Count = ([regex]::Matches($content, '<h2[^>]*>|<h2>')).Count
    
    # Estimate word count (rough - counts all text between >< tags)
    $textContent = $content -replace '<[^>]+>', ' '
    $textContent = $textContent -replace '\s+', ' '
    $words = ($textContent.Trim().Split(' ')).Count
    
    Write-Host "Page: $pagePath" -ForegroundColor Yellow
    Write-Host "  H1 tags: $h1Count $(if($h1Count -eq 1){'✓'}else{'❌'})" -ForegroundColor $(if($h1Count -eq 1){'Green'}else{'Red'})
    Write-Host "  H2 tags: $h2Count $(if($h2Count -ge 3){'✓'}else{'❌'})" -ForegroundColor $(if($h2Count -ge 3){'Green'}else{'Red'})
    Write-Host "  Words: ~$words $(if($words -ge 750){'✓'}else{'❌'})" -ForegroundColor $(if($words -ge 750){'Green'}else{'Red'})
    Write-Host ""
}

