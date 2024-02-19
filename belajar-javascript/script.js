// Hello World
// alert('Hello World')

// variable

// let keyword
let firstname = "John";
firstname = "Doe";
console.log(firstname);

const PI = 3.14;
// PI = 3.15
console.log(PI);

const a=10;
const b=5;
const c=a%b;
console.log(c);

let namadepan = "John";
let namabelakang = "Doe";
let fullname = namadepan + " " + namabelakang;
console.log(fullname);


// operator logika
let x = 10;
let y = 20;
console.log(y > x);

let umur = 18;

if(umur >= 30 && umur <= 20) {
    console.log("Kamu Dewasa")
}else{
    console.log("Kamu belum dewasa")
}

for(let kue = 3; kue >= 0; kue--){
    console.log('Kue sudah dimakan, kue sisa' + kue);
}

let kue = 3
while(kue >= 0) {
    console.log('Kue ke-' + kue);
    kue--;
}

// function myFunction(){
//     console.log('Ini adalah fungsi')
// }

// myFunction();

function tambah(angka1, angka2) {
    return angka1 + angka2;
}

console.log(tambah(10, 5));

let angka = [];
angka[0] = 20;
angka[1] = 10;
angka[2] = 50;
angka[3] = 30;
console.log(angka.sort());

// angka[1] = 50;
// console.log(angka[1]);

let buah = {
    nama : "apel",
    warna : "Hitam",
    rasa : "Pahit",
    makan: function (){
        console.log("Makan Apel");
    }
};