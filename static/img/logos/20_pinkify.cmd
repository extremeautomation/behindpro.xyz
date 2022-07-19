@ECHO OFF
@IF NOT EXIST png-pinkified (
  @MKDIR png-pinkified
)
@FOR %%G in ("png\*.png") Do echo %%~nxG & magick %%G -channel RGB -auto-level +level-colors pink,white png-pinkified/%%~nxG 