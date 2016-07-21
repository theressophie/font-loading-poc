module.exports = () => {
    var FontFaceObserver = require('fontfaceobserver');

    var fontASubset = new FontFaceObserver('open_sansregular_subset');

    Promise.all([fontASubset.load()]).then(function () {
        document.documentElement.className += " fonts-stage-1";

        var fontA = new FontFaceObserver('open_sansregular');
        var fontB = new FontFaceObserver('open_sansbold');
        var fontC = new FontFaceObserver('open_sans_italic');

        Promise.all([fontA.load(), fontB.load(), fontC.load()]).then(function () {
            document.documentElement.className += " fonts-stage-2";

        });
    });
}
