@echo off
setlocal

set "SITE_DIR=%~dp0"
set "HOME_PAGE=http://localhost:3000/"

cd /d "%SITE_DIR%"

if not exist "%SITE_DIR%package.json" (
  echo Fichier introuvable : "%SITE_DIR%package.json"
  pause
  exit /b 1
)

if not exist "%SITE_DIR%node_modules" (
  echo Installation des dependances...
  call npm install --legacy-peer-deps --no-audit --no-fund --strict-ssl=false
  if errorlevel 1 (
    echo Erreur pendant npm install.
    pause
    exit /b 1
  )
)

start "Serveur Malaisie 2026" cmd /k "cd /d ""%SITE_DIR%"" && npm run dev"
timeout /t 3 /nobreak >nul
start "" "%HOME_PAGE%"
exit /b 0
