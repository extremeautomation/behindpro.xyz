@ECHO OFF
@IF NOT EXIST png-edgified (
  @MKDIR png-edgified
)
@FOR %%G in ("png\*.png") Do echo %%~nxG & magick %%G -edge 6 -channel RGB -threshold 100%% png-edgified/%%~nxG 