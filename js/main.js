// Import phone settings:
import { phoneFormat, phoneMask } from "./PhoneSettings.js";

const select = document.querySelector('select');
const output = document.querySelector('div#output');
const button = document.querySelector('button');

button.disabled = true;

select.addEventListener('change', () => {
    // Phone masks:
    const maskOptions = {
        br: phoneMask.br,
        usa: phoneMask.usa
    }
    // Select options:
    if (select.value == 'blank')
    {
        output.innerHTML = "";
        button.disabled = true;
    }
    else if (select.value == 'br')
    {
        output.innerHTML = phoneFormat.br;
        const phone = document.querySelector('input#phone');
        const mask = IMask(phone, maskOptions.br);
        button.disabled = false;
    }
    else if(select.value == 'usa')
    {
        output.innerHTML = phoneFormat.usa;
        const phone = document.querySelector('input#phone');
        const mask = IMask(phone, maskOptions.usa);
        button.disabled = false;
    }
})
// Detect if is mobile device:
function detectDevice() {
    // Device list:
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];
    // Function return:
    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
}
// Clean the phone number, to the whatsapp url: 
function clean(num) {
    return num.replace(/\D+/g, "")
}
// Button fuction:
button.addEventListener('click', function() {
    const phoneNumber = clean(document.querySelector('input#phone').value);
    if (phoneNumber.length === 0)
    {
        alert("Informe um número")
    }
    else
    {
        if(detectDevice())
        {
            window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}`);
        }
        else
        {
            window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}`);
        }
    }
})
// About anchor:
document.querySelector('footer')
.children[1]
.onclick = () => alert("Em construção... 🏗️");