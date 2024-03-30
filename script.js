let string = prompt("S harfi qatnashgan so'z yoki gap yozing")
let soni = 0
for (let i = 0; i < string.length; i++) {
    if (string[i] == "s" || string[i] == "S") {
        soni++
        console.log("Siz " + soni + " marta s harfini kritdingiz");
    }
}
