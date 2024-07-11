// let vize1 = Number(prompt("Vize 1 notunu giriniz"));
// let vize2 = Number(prompt("Vize 2 notunu giriniz"));
// let final = Number(prompt("Final notunu giriniz"));

// let ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

// if(ortalama>=60){
// alert("Dersten geçtiniz tebrikler notunuz: " + ortalama)

// }else{
//  alert("Dersten kaldınız notunuz: " + ortalama)
// }

let ad = prompt("İsminizi giriniz : ");
let tckn = prompt("Tc'nizi giriniz.")

kontrolEt(ad , tckn)
function kontrolEt(ad, tckn){
    if(ad!==""){
        if(tckn.length == 11){
            alert("İşleminiz başarıyla tamamlanmıştır.")
        } else{
            alert("Lütfen TC'nizi tam bir şekilde giriniz")
        }
    } else{
        alert("Lütfen isim alanını doldurunuz.");
    }
}