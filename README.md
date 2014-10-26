# Cinematic.js

![Travis](http://img.shields.io/travis/Wildhoney/Cinematic.js.svg?style=flat)
&nbsp;
![npm](http://img.shields.io/npm/v/cinematic.svg?style=flat)
&nbsp;
![License MIT](http://img.shields.io/badge/License-MIT-lightgrey.svg?style=flat)
&nbsp;
![Experimental](http://img.shields.io/badge/%20!%20%20-experimental-blue.svg?style=flat)

* **Heroku**: [http://cinematic-js.herokuapp.com/](http://cinematic-js.herokuapp.com/)
* **Bower:** `bower install cinematic`

![Screencap](http://i.imgur.com/XrMDCcY.gif)

---

## Getting Started

Simply define your `video` element by adding it to the DOM as usual, and then add the `data-cinematic` flag:

```html
<video data-cinematic>
    <source src="video/output.mp4" type="video/mp4">
</video>
```

Cinematic.js will then pick up the video and determine how to seek in the video based on the ratio to the `scrollTop` property and the document's height.

**Note:** It's entirely up to you to render the video &ndash; see <a href="#using-ffmpeg">using `ffmpeg`</a>; any stalling in the seeking of the video is &mdash; most likely &mdash; a video encoding problem, and not a problem of the Cinematic.js module.

In the example, Cinematic.js comes with `LeicesterSquareHigh.mp4` and `LeicesterSquareLow.mp4` where the difference between the two in terms of file-size is significant, whereas the quality isn't *too* noticeable.

Happy experimenting!

## Using [ffmpeg](https://www.ffmpeg.org/)

The most important aspect of the library is the video itself &ndash; it must have a generous number of keyframes, which can be defined by experimenting with the `-g` flag:

`ffmpeg -i input.mp4 -g 10 output.mp4`

Try experimenting with the `-g` flag to achieve a compromise between file-size and the quality. Another flag that you can experiment with is the `-crf` flag which relates to the video's *constant rate factor* &ndash; [this ranges from 0 to 51](http://superuser.com/questions/677576/what-is-crf-used-for-in-ffmpeg/677580#677580). You can try changing the value to achieve a satisfying compromise:

`ffmpeg -i input/mp4 -g 10 -crf 40 output.mp4`