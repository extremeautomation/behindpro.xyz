@ECHO OFF
@FOR %%G in ("svg\*.svg") Do echo %%~nxG & magick -density 1200 -background none %%G -resize 900x900 png/%%~nG.png