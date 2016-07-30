function search() {
    var vad = document.getElementById('here').value;
    var lowVad = vad.toLowerCase();

    //var funkaDet = false;
    for (var i = 0; i < data.length; i++) {
        var a = data[i].indexOf(lowVad);

        /* Om den hittar ska den säga var den hitta. */
        if (a > -1) {
            //funkarDet = true;
            /* Gör till object som ska användas */
            function File(firstArrPlace, secondArrPlace, thirdArrPlace) {
                this.firstArrPlace = firstArrPlace;
                this.secondArrPlace = secondArrPlace;
                this.thirdArrPlace = thirdArrPlace;
            }
            var arraY = new File(data[i][0], data[i][1], data[i][2]);

            /* Skriva ut infon på sidan */
            var printAll = function(p) {
                var stronk = document.getElementById("platsen");
                if (a === 0) {
                    stronk.innerHTML = stronk.innerHTML +
                        "Matens namn: <strong>" + p.firstArrPlace.cap1Letter() +
                        "</strong> Receptet: <strong>" + p.secondArrPlace.cap1Letter() + "</strong><br>" ; //+ p.thirdArrPlace + "<br>";
                } else {
                    stronk.innerHTML = stronk.innerHTML +
                        "Receptet: <strong>" + p.secondArrPlace.cap1Letter() +
                        "</strong> Matens namn: <strong>" + p.firstArrPlace.cap1Letter() + "</strong><br>" ; //+ p.thirdArrPlace + "<br>";
                }
            };
            printAll(arraY);
            /* Hittar den inte skriv: */
        } else {
            //console.log("Damn this");
        }
    }
}

/* Ta bort text ur input */
function textClear(element) {
    if (element.value != '') {
        element.value = '';
    }
}

/* Convertera svarsorden till första bokstaven uppercase */
String.prototype.cap1Letter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/* Enter klickar på knappen */
function runScript(e) {
    if (e.keyCode == 13) {
        document.getElementById('Den').click();
    }
}

function saveRecepieToFile() {
  var textToSave;
  var hiddenElement;

  textToSave = document.getElementById("saveToFile").value;
  hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'recepie.js';
  hiddenElement.click();
}
