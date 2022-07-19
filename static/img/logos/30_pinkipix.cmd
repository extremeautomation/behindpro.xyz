@ECHO OFF
@IF NOT EXIST png-pinkipix (
  @MKDIR png-pinkipix
)
@FOR %%G in ("png-pinkified\*.png") Do echo %%~nxG & magick %%G -scale 5%% -scale 4000%% png-pinkipix/%%~nxG 