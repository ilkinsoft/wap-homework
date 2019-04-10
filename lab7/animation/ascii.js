window.onload = function () {

    let intervalSpeed = 250;

    document.getElementById("start").onclick = startButton;
    document.getElementById("stop").onclick = stopButton;
    document.getElementById("animation").onchange = returnAnimation;
    document.getElementById("turbo").addEventListener('change', (event) => {

        if (event.target.checked) {
            intervalSpeed = 50;
        } else {
            intervalSpeed = 250;
        }

        stopButton();
        startButton();
    });

    document.getElementById("fontsize").addEventListener('change', function () {

        switch (document.getElementById("fontsize").value) {
            case "Tiny":
                document.getElementById("text-area").style.fontSize = "7pt";
                break;

            case "Small":
                document.getElementById("text-area").style.fontSize = "10pt";
                break;

            case "Medium":
                document.getElementById("text-area").style.fontSize = "12pt";
                break;

            case "Large":
                document.getElementById("text-area").style.fontSize = "16pt";
                break;

            case "Extra Large":
                document.getElementById("text-area").style.fontSize = "24pt";
                break;

            case "XXL":
                document.getElementById("text-area").style.fontSize = "32pt";
                break;
        }
    });


    function returnAnimation() {
        let whichOne = document.getElementById("animation").value;
        let res = ANIMATIONS[whichOne].split("=====");
        document.getElementById("text-area").value = res[0];
    }

    function startButton() {
        let whichOne = document.getElementById("animation").value;
        let res = ANIMATIONS[whichOne].split("=====");

        let z = -1;
        setInterval(function () {
            z++;
            if (z === res.length) z = 0;
            document.getElementById("text-area").value = res[z];
        }, intervalSpeed);

        document.getElementById("stop").disabled = false;


    }

    function stopButton() {
        let highestTimeoutId = setTimeout(";");
        for (let i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
        document.getElementById("text-area").value = res[0];
        document.getElementById("stop").disabled = true;

    }
};
