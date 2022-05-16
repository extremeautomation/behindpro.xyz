@ECHO OFF
@FOR %%G in ("png\*.png") Do echo %%~nxG & magick %%G -scale 5%% -scale 4000%% png-pixelated/%%~nxG 