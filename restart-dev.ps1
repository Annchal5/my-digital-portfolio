# Dev Server Restart Script
# Run this to cleanly restart the Next.js dev server

Write-Host "🧹 Stopping all Node processes..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

Write-Host "🗑️ Removing .next cache folder..." -ForegroundColor Yellow
Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1

Write-Host "🚀 Starting dev server..." -ForegroundColor Green
pnpm dev
