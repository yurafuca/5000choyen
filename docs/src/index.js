/* globals Drawer */
let drawer = null;

window.onload = function() {
    drawer = new Drawer(document.getElementById("canvas"));

    Array.prototype.forEach.call(document.querySelectorAll('input[type=radio][name="text-type"]'), function(radio) {
        radio.addEventListener('change', onChangeState);
    });

    Array.prototype.forEach.call(document.querySelectorAll('input[type=radio][name="background-color"]'), function(radio) {
        radio.addEventListener('change', onChangeState);
    });
};

function onChangeState() {
    const textboxTop = document.getElementById("textboxTop");
    const textboxBottom = document.getElementById('textboxBottom');
    const backgroundOrder = document.querySelector('input[name="background-color"]:checked');
    const textOrder = document.querySelector('input[name="text-type"]:checked');

    drawer.useTransparent = backgroundOrder.value === `transparent`;
    drawer.bottomText.useImg = textOrder.value === `image`;
    drawer.topText.value = textboxTop.value;
    drawer.bottomText.value = textboxBottom.value.replaceAll("！", "!");
    drawer.useTransparent = document.querySelector('input[name="background-color"]:checked').value === `transparent`;

    drawer.refresh();

    document.fonts.ready.then(function() {
        drawer.refresh();
    });

    if (textOrder.value === 'image') {
        textboxBottom.style.display = "none";
    } else {
        textboxBottom.style.display = "inline";
    }
}
