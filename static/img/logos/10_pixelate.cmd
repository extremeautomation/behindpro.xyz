@ECHO OFF
@IF NOT EXIST png-pixelated (
  @MKDIR png-pixelated
)
@FOR %%G in ("png\*.png") Do echo %%~nxG & magick %%G -scale 5%% -scale 4000%% png-pixelated/%%~nxG 