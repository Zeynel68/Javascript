let vize1 = Number(prompt("Vize 1 notunu giriniz"));
let vize2 = Number(prompt("Vize 2 notunu giriniz"));
let final = Number(prompt("Final notunu giriniz"));

let ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

if(ortalama>=60){
alert("Dersten geçtiniz tebrikler notunuz: " + ortalama)

}else{
 alert("Dersten kaldınız notunuz: " + ortalama)
}
