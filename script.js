let input = document.getElementById("input")
let button = document.getElementById("button")
let reset = document.getElementById("reset")
let text = document.getElementById("text")
let sayi = Math.floor(Math.random() * 100) + 1;



button.addEventListener("click", () => {
    if (input.value == "") {
        text.textContent = "Bir Sayı Girin"
    } else if (input.value == sayi) {
        text.textContent = "Tebrikler Sayıyı Bildin"
        document.body.style.background = "seagreen"
        text.style.color = "#fff"
        input.disabled = "true"
        button.textContent = "Reset"
        button.style.display = "none"
        reset.style.display = "inline-block"
    } else if (input.value < sayi) {
        text.innerHTML = "Sayı Daha <b>Büyük</b>"
        document.body.style.background = "crimson"
    } else if (input.value > sayi) {
        text.innerHTML = "Sayı Daha <b>Küçük</b>"
        document.body.style.background = "cadetblue"
    }
    input.value = ""
});

reset.addEventListener("click", () => {
    window.location.href = window.location.href
});