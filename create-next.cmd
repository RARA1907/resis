@echo off
set PATH=C:\Program Files\nodejs;%PATH%
cd "C:\Users\User\Desktop\RARA\resis-projesi"
call npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --use-npm --yes