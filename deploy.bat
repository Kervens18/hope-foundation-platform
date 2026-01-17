@echo off
REM Script de déploiement GitHub Pages pour FIRST AID INTERNATIONAL

setlocal enabledelayedexpansion

echo.
echo ============================================
echo DEPLOIEMENT GITHUB PAGES
echo ============================================
echo.

REM Configuration
set GITHUB_USERNAME=kervens18
set REPO_NAME=hope-foundation-platform

echo Étape 1 : Initialisation Git...
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"

echo Étape 2 : Ajout des fichiers...
git add .
git commit -m "Initial commit: FIRST AID INTERNATIONAL website"

echo Étape 3 : Création de la branche main...
git branch -M main

echo Étape 4 : Ajout du remote...
echo.
echo Remplacez VOTRE_USERNAME par votre nom GitHub :
echo https://github.com/VOTRE_USERNAME/hope-foundation-platform.git
echo.
set /p GITHUB_URL="Collez l'URL complète du repo GitHub: "

git remote add origin %GITHUB_URL%

echo Étape 5 : Push vers GitHub...
echo.
echo Entrez vos identifiants GitHub si demandé...
git push -u origin main

echo.
echo ============================================
echo PROCHAINES ETAPES:
echo ============================================
echo 1. Allez sur https://github.com
echo 2. Ouvrez votre repo %REPO_NAME%
echo 3. Allez dans Settings > Pages
echo 4. Sélectionnez Source: Branch main, Folder /
echo 5. Dans "Custom domain" entrez: firstaidintconnect.org
echo 6. Cochez "Enforce HTTPS"
echo.
echo ATTENTION: Vous devez aussi configurer les DNS chez votre registrar!
echo.
pause
