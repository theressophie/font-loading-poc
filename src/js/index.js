(function() {
    var FontFaceObserver = require('fontfaceobserver');

        var fontASubset = new FontFaceObserver('OpenSansSubset');

        Promise.all([fontASubset.load()]).then(function () {
            document.documentElement.className += " fonts-stage-1";

            var fontA = new FontFaceObserver('OpenSans');
            var fontB = new FontFaceObserver('OpenSansBold');
            var fontC = new FontFaceObserver('OpenSansItalic');

            Promise.all([fontA.load(), fontB.load(), fontC.load()]).then(function () {
                document.documentElement.className += " fonts-stage-2";

            });
        });
    })();
