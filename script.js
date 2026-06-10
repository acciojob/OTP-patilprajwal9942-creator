const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {

    code.addEventListener("input", () => {
        if (code.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && code.value === "" && idx > 0) {
            codes[idx - 1].value = "";
            codes[idx - 1].focus();
        }
    });

});