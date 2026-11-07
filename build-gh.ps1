$env:GH_PAGES = "1"
$env:NEXT_PUBLIC_BASE_PATH = "/HN"
Write-Host ("GH_PAGES inside ps1: [" + $env:GH_PAGES + "]")
node -p "'node sees: [' + process.env.GH_PAGES + ']'"
npx next build
