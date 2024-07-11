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

// let kg = Number(prompt("Lütfen ağırlığınızı kilogram cinsinden giriniz."))
// let m = Number(prompt("Lütfen boyunuzu metere cinsinden giriniz."))

// let indeks = kg/(m**2);

// if(indeks<18.5){
//     alert("Durumunuz: İdeal kilonun altında endeks değeri:" + indeks)
// }  else if(indeks>=18.5 && indeks<= 24.9){
//     alert("Durumunuz: İdeal kiloda endeks değeri: " + indeks)
// }  else if(indeks>=25 && indeks<=30){
//     alert("Durumunuz: İdeal kilonun üstünde endeks değeri: " + indeks)
// }  else if(indeks>=30 && indeks<= 39.9){
//     alert("Durumunuz: İdeal kilonun çok üstünde(obez) endeks değeri: " + indeks)
// }  else(40>indeks);{
//     alert("Durumunuz: İdeal kilonun çok üstünde(morbid obez) endeks değeri :" + indeks)
// }

// let yakıt = prompt("Yakıt tipinin numarasını giriniz: Dizel:1, Benzin:2, LPG:3")
// let litre = Number(prompt ("İstediğiniz litre miktarını giriniz"))
// let para = Number(prompt("Paranızın miktarını giriniz."))
// let dizel = 24.53
// let benzin = 22.25
// let LPG = 11.1
// let dizelFiyati = dizel*litre
// let benzinFiyati = benzin*litre
// let LPGFiyati = LPG*litre


// if( yakıt==1){
//     if(para>dizelFiyati){
//         alert("Para üstünüz:" + (para-dizelFiyati))
//     }
//     else if(para<dizelFiyati){
//         alert("Paranız yeterli değil.")
//     }
//     else if(para=dizelFiyati){
//         alert("Para üstünüz yoktur.")
//     }
// }  
 

//  else if(yakıt==2){
//     if(para>benzinFiyati){
//         alert("Para üstünüz:" + (para-benzinFiyati))
//     }
//     if(para<benzinFiyati){
//         alert("Paranız yeterli değil.")
//     }
//      if(para=benziFiyati){
//         alert("Para üstünüz yoktur.")
//     }  
//  } 
 
 
//  else if(yakıt==3){
//     if(para>LPGFiyati){
//         alert("Para üstünüz:" + (para-LPGFiyati))
//     }
//     if(para<LPGFiyati){
//         alert("Paranız yeterli değil.")
//     }
//      if(para=LPGFiyati){
//         alert("Para üstünüz yoktur.")
//     } 
//  }

// else(
//     alert("Yakıt türü olarak geçerli bir rakam giriniz.")
// )



// let yenisatır = "\r\n";
// let bakiye = 1000;

//  let metin = "Banka hesabına hoşgeldin! Lütfen uygulamak istediğiniz işlemin numarasını giriniz" + yenisatır
//  +"1 Bakiye Görüntüleme" +yenisatır
//  +"2-Para Çekme" + yenisatır
//  +"3-Para Yatırma" + yenisatır
//  +"4-Çıkış";

// let secim = prompt(metin)

//  switch(secim){
//     case "1":
//         alert("Bakiyeniz:" + bakiye)
//     break;
    
//     case "2":
//      let cekme = Number(prompt("Çekmek istediğiniz para miktarını giriniz:"))
//      if(cekme>bakiye){
//         alert("Hata oluştu, bu kadar miktarda paranız yok.")
//      }
//      else (cekme<=bakiye);{
//         alert("Para çekme işleminiz tamamlandı.") 
//         bakiye = bakiye-cekme
//      }
//     break;

//     case "3":
//       let yatirma = Number(prompt("Yatırmak istediğiniz para miktarını giriniz:")) && (bakiye+yatirma)
//     break;

//     case "4":
//         alert("Çıkış yapıldı, yine bekleriz.")
//     break;

//   default:
//     alert("Lütfen 1 ile 4 arasında rakam giriniz!")
//  }
 

let turkceDogru, turkceYanlıs = 0;
let matdogru, matYalnıs = 0;
let sosyalDogru, sosyalYanlıs = 0;
let fendogru, fenYalnıs = 0;
let puan = 0;

let yeniSatir = "\r\n"
let mesaj = "TYT puan hesaplama uygulamasına hoşgeldiniz! İşlemini yapmak istediğiniz rakamı giriniz:" +yeniSatir
+ "1-Puan Hesaplama"+ yeniSatir
+"2- Çıkış Yap"


let secim = prompt(mesaj)

switch(secim){
    case "1":
      turkceDogru =     Number(prompt("Türkçe doğru sayısı:"))
      turkceYanlıs =     Number(prompt("Türkçe yanlış sayısı:"))  

      matdogru =     Number(prompt("Matematik doğru sayısı:"))
      matYalnıs =     Number(prompt("Matematik yanlış sayısı:"))
    
      sosyalDogru =     Number(prompt("Sosyal doğru sayısı:"))
      sosyalYanlıs =     Number(prompt("Sosyal yanlış sayısı:"))
   
      fendogru =     Number(prompt("Fen doğru sayısı:"))
      fenYalnıs =     Number(prompt("Fen yanlış sayısı:"))
  
      let dogruNet = (turkceDogru+matdogru+sosyalDogru+fendogru)
      let yalnısNet = (turkceDogru+matdogru+sosyalDogru+fendogru)
      let asılDogru = dogruNet - (yalnısNet/4)
      puan= (asılDogru*4) + 100
     alert("Puanınız: " + puan )
     break;
  
  case "2":
    alert("Uygulamadan çıkış yapıldı")
    break;

    default:
        alert("Lütfen geçerli bir rakam seçiniz.")
    break;
    }