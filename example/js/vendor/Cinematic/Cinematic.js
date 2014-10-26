(function main($window, $document) {

    "use strict";

    /**
     * @module Cinematic
     * @author Adam Timberlake
     * @link
     * @constructor
     */
    var app = $window.Cinematic = function Cinematic(videoElement) {

        if (!(videoElement instanceof $window.HTMLVideoElement)) {

            // Passed element is not an instance of `HTMLVideoElement``.
            this.throwException('Element passed into constructor must be an instance of HTMLVideoElement');

        }

        /**
         * Invoked once the meta data has been loaded for the video.
         *
         * @property onloadedmetadata
         * @type {Function}
         */
        videoElement.onloadedmetadata = function onLoadedMetaData() {
            
            var renderFrame = function renderFrame() {

                var scrollOffset   = window.scrollY + window.innerHeight,
                    documentHeight = this.computeDocumentHeight(),
                    duration       = videoElement.duration;

                videoElement.currentTime = +((scrollOffset / documentHeight) * duration).toFixed(2);

            }.bind(this);

            setInterval(function setInterval() {

                // Use the new request animation API to request the next frame.
                requestAnimationFrame(renderFrame);

            }, 60);

        }.bind(this);
    };

    /**
     * @property prototype
     * @type {Object}
     */
    app.prototype = {

        /**
         * @method throwException
         * @param message {String}
         * @return {void}
         */
        throwException: function throwException(message) {
            throw 'Cinematic: ' + message + '.';
        },

        /**
         * Responsible for computing the document's entire height.
         *
         * @method computeDocumentHeight
         * @return {Number}
         */
        computeDocumentHeight: function computeDocumentHeight() {

            var body = $document.body,
                html = $document.documentElement;

            return $window.Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        }

    };

    $document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {

        // Find all of the elements with the `data-cinematic` attribute!
        var cinematicElements = $document.querySelectorAll('*[data-cinematic]');

        for (var index = 0, numElements = cinematicElements.length; index < numElements; index++) {

            // Instantiate the new Cinematic object for the discovered `video` node.
            new Cinematic(cinematicElements[index]);

        }

    });

})(window, window.document);