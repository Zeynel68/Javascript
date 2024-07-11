// let vize1 = Number(prompt("Vize 1 notunu giriniz"));
// let vize2 = Number(prompt("Vize 2 notunu giriniz"));
// let final = Number(prompt("Final notunu giriniz"));

// let ortalama = vize1*0.3 + vize2*0.3 + final*0.4;

// if(ortalama>=60){
// alert("Dersten geçtiniz tebrikler notunuz: " + ortalama)

// }else{
//  alert("Dersten kaldınız notunuz: " + ortalama)
// }

// let ad = prompt("İsminizi giriniz : ");
// let tckn = prompt("Tc'nizi giriniz.")

// kontrolEt(ad , tckn)
// function kontrolEt(ad, tckn){
//     if(ad!==""){
//         if(tckn.length == 11){
//             alert("İşleminiz başarıyla tamamlanmıştır.")
//         } else{
//             alert("Lütfen TC'nizi tam bir şekilde giriniz")
//         }
//     } else{
//         alert("Lütfen isim alanını doldurunuz.");
//     }
// }                                                        


//vücut indeksi: kg/m kare

let kg = Number(prompt("Lütfen ağırlığınızı kilogram cinsinden giriniz."))
let m = Number(prompt("Lütfen boyunuzu metere cinsinden giriniz."))

let indeks = kg/(m**2);

if(indeks<18.5){
    alert("Durumunuz: İdeal kilonun altında endeks değeri:" + indeks)
}  else if(indeks>=18.5 && indeks<= 24.9){
    alert("Durumunuz: İdeal kiloda endeks değeri: " + indeks)
}  else if(indeks>=25 && indeks<=30){
    alert("Durumunuz: İdeal kilonun üstünde endeks değeri: " + indeks)
}  else if(indeks>=30 && indeks<= 39.9){
    alert("Durumunuz: İdeal kilonun çok üstünde(obez) endeks değeri: " + indeks)
}  else(40>indeks);{
    alert("Durumunuz: İdeal kilonun çok üstünde(morbid obez) endeks değeri :" + indeks)
}

