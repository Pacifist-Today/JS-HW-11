let birthday = +prompt ("В каком году вы родились?")
let city = prompt("В каком городе вы живете?")
let sport = prompt("Какой ваш любимый вид спорта?")

let age

if (1900 <= birthday || birthday > 2022) {
    age = 2022 - birthday
}   else {
    alert ("Жаль, что Вы не захотели ввести свой год Рождения")
}

let capital

if (city === "Киев") {
    capital = "Вы живете в столице Украины"
    console.log(capital)
}   else if (city === "Москва") {
    capital = "Вы живете в столице России"
    console.log(capital)
}   else if (city === "Минск") {
    capital = "Вы живете в столице Беларусии"
    console.log(capital)
}   else if (typeof city === "null" || city === "null" || city == null || city === "") {
    alert("Жаль, что Вы не захотели ввести свой город")
}   else if (typeof city === "string") {
    capital = "Вы живете в городе " + city
    console.log(capital)
}   else {
    alert("Жаль, что Вы не захотели ввести свой город")
}

let favoriteSport

if (sport === "Футбол") {
    favoriteSport = "Круто! Хочешь стать как Месси?"
    console.log(favoriteSport)
}   else if (sport === "Баскетбол") {
    favoriteSport = "Круто! Хочешь стать как Майкл Джордан?"
    console.log(favoriteSport)
}   else if (sport === "Реслинг") {
    favoriteSport = "Круто! Хочешь стать как Джон Сина?"
    console.log(favoriteSport)
}   else if (typeof sport === "null" || sport === "null" || sport == null || sport === "") {
    alert("Жаль, что Вы не захотели ввести свой любимый спорт")
}   else {
    favoriteSport = "Круто! Хочешь стать известным спортсменом?"
    console.log(favoriteSport)
}

if (typeof age === "undefined" || typeof capital === "undefined" || typeof sport === "undefined" || typeof favoriteSport === "undefined") {
    alert ("Вы ввели неккоретные данные")
} else {
    alert("Вам " + age + "\n" + capital + "\n" + "Ваш любимый спорт " + sport + "\n" + favoriteSport)
}