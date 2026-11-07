$env:GH_PAGES = "1"
Write-Host ("GH_PAGES inside ps1: [" + $env:GH_PAGES + "]")
node -p "'node sees: [' + process.env.GH_PAGES + ']'"
npx next build
