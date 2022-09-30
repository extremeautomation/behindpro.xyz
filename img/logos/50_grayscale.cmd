@ECHO OFF
@IF NOT EXIST png-grayscale (
  @MKDIR png-grayscale
)
@FOR %%G in ("png\*.png") Do echo %%~nxG & magick %%G -set colorspace Gray png-grayscale/%%~nxG 