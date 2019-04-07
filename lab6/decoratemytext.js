

function makeBiggerAuto() {
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(images/hundred-dollar-bill.jpg)';

    setInterval(makeBigger, 500);
}

function makeBigger() {
    var el = document.getElementById('txtArea');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseInt(style);

    document.getElementById("txtArea").style.fontSize = fontSize + 2 + "pt";
}

function makePigLatin() {
    let vowelArray = ['A', 'E', 'I', 'O', 'U'];
    let wordArray = document.getElementById('txtArea').value.trim().split(' ');
    let newArray = [];

    wordArray.forEach(word => {
        var firstPart, secondPart;

        if (word === '')
            return;

        if (word === '\n' || !isNaN(word)) {
            newArray.push(word);
            return;
        }

        for (let index = 0; index < word.length; index++) {
            const element = word[index];
            if (vowelArray.includes(element.toUpperCase())) {
                firstPart = word.substring(0, index);
                secondPart = word.substring(index, word.length);
                break;
            }
        }

        if (firstPart != undefined && firstPart.length === 0) // starts with vowel
            newArray.push(word + 'ay');
        else
            newArray.push(secondPart + firstPart + 'ay');
    });
    document.getElementById('txtArea').innerText = newArray.join(' ');
}

function makeMalkovitch() {
    let wordArray = document.getElementById('txtArea').value.trim().split(' ');

    const b = wordArray.map(function (word, i, array) {
        if (word.length >= 5)
            return 'Malkovitch' ;
        else
            return word;
    })
    document.getElementById('txtArea').innerText = b.join(' ');
}

function makeStyle() {
    if (document.getElementById("chkBling").checked) {
        document.getElementById("txtArea").style.fontWeight = "bold";
        document.getElementById("txtArea").style.color = "green";
        document.getElementById("txtArea").style.textDecoration = "underline";
    }
    else {
        document.getElementById("txtArea").style.fontWeight = "normal";
        document.getElementById("txtArea").style.color = "black";
        document.getElementById("txtArea").style.textDecoration = "none";
    }
}
