@ECHO OFF
@IF NOT EXIST png (
  @MKDIR png
)
@FOR %%G in ("svg\*.svg") Do echo %%~nxG & magick -density 1200 -background none %%G -resize 400x400 png/%%~nG.png