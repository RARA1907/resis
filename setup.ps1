$ErrorActionPreference = "Stop"
$projectDir = "C:\Users\User\Desktop\RARA\resis-projesi"

# Set Node path
$env:Path = "C:\Program Files\nodejs;$env:Path"

Write-Host "Creating Next.js project..." -ForegroundColor Cyan

# Run create-next-app
& npx.cmd create-next-app@latest $projectDir --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host "Project created successfully!" -ForegroundColor Green
} else {
    Write-Host "Error creating project" -ForegroundColor Red
}