@echo off
title Wild Queens - Sobrevivência Pós-Apocalíptica
cd /d "%~dp0"
echo ============================================================
echo           WILD QUEENS — SOBREVIVÊNCIA PÓS-APOCALÍPTICA
echo ============================================================
echo Abrindo o jogo em seu navegador padrão...
start "" "http://localhost:5173/"
echo Servidor ativo. Mantenha esta janela aberta enquanto joga.
call npm run dev -- --host
pause
