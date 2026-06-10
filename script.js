//your JS code here. If required.

const code = document.queryselectorAll('.code');

code.foreach((code, idx)=>{
	code.addEventListener("input", () => { 
    if (code.value.length === 1 && idx < codes.length - 1) {
      codes[idx + 1].focus(); 
    }
})
