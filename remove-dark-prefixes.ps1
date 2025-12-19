# PowerShell script to remove all dark: prefixes from className attributes
# This keeps only the dark mode values

$files = Get-ChildItem -Path "src" -Include "*.jsx" -Recurse

foreach ($file in $files) {
    Write-Host "Processing: $($file.FullName)" -ForegroundColor Cyan
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Pattern to match dark: classes and remove them while keeping dark mode value
    # Matches patterns like: "text-light dark:text-dark" -> "text-dark"
    # And: "bg-light/50 dark:bg-dark/30" -> "bg-dark/30"
    
    # First, handle the simple case: "lightClass dark:darkClass" -> "darkClass"
    $content = $content -replace '(\w+-[\w-]+(?:/\d+)?)\s+dark:(\w+-[\w-]+(?:/\d+)?)', '$2'
    
    # Handle cases where there are multiple dark: in the same class string
    # Keep replacing until no more matches
    $previousContent = ""
    while ($content -ne $previousContent) {
        $previousContent = $content
        $content = $content -replace '(\w+-[\w-]+(?:/\d+)?)\s+dark:(\w+-[\w-]+(?:/\d+)?)', '$2'
    }
    
    # Now remove any remaining "dark:" prefixes
    $content = $content -replace '\bdark:', ''
    
    # Handle special cases like "hidden dark:block" -> "block", "hidden dark:flex" -> "flex", etc.
    $content = $content -replace '\bhidden\s+(?:block|flex|grid|inline|inline-block|inline-flex)', { param($match)
        $match.Value -replace 'hidden\s+', ''
    }
    
    # Handle "dark:hidden" -> just remove it entirely
    $content = $content -replace '\s+hidden(?=\s|")', ''
    
    # Save the file
    Set-Content -Path $file.FullName -Value $content -NoNewline
    
    Write-Host "✓ Updated: $($file.Name)" -ForegroundColor Green
}

Write-Host "`nDone! All dark: prefixes have been removed." -ForegroundColor Green
Write-Host "Please review the changes and test the application." -ForegroundColor Yellow
