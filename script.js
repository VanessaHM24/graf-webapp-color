document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const redValue = document.getElementById("red-value");
    const greenValue = document.getElementById("green-value");
    const blueValue = document.getElementById("blue-value");
    const decimalInput = document.getElementById("decimal-input");
    const colorPicker = document.getElementById("color-picker");
    const colorBox = document.getElementById("color-box");
    const colorCode = document.getElementById("color-code");

    function updateColor() {
        const r = parseInt(red.value);
        const g = parseInt(green.value);
        const b = parseInt(blue.value);
        const hex = `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;

        colorBox.style.backgroundColor = hex;
        colorCode.textContent = hex;
        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;
        decimalInput.value = (r << 16) | (g << 8) | b;
        colorPicker.value = hex;
    }

    function updateFromDecimal() {
        const decimal = parseInt(decimalInput.value, 10);
        if (!isNaN(decimal) && decimal >= 0 && decimal <= 16777215) {
            const r = (decimal >> 16) & 255;
            const g = (decimal >> 8) & 255;
            const b = decimal & 255;
            red.value = r;
            green.value = g;
            blue.value = b;
            redValue.value = r;
            greenValue.value = g;
            blueValue.value = b;
            updateColor();
        }
    }

    function updateFromColorPicker() {
        const hex = colorPicker.value;
        const decimal = parseInt(hex.slice(1), 16);
        decimalInput.value = decimal;
        updateFromDecimal();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);
    redValue.addEventListener("input", updateColor);
    greenValue.addEventListener("input", updateColor);
    blueValue.addEventListener("input", updateColor);
    decimalInput.addEventListener("input", updateFromDecimal);
    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
