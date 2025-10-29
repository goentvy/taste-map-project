@echo off
setlocal enabledelayedexpansion

for /f "usebackq tokens=1,2 delims==" %%a in (`findstr /v "^#" .env`) do (
    if not "%%a"=="" (
        set "%%a=%%b"
    )
)

echo 환경변수 로딩 완료
call gradlew bootRun
pause
endlocal