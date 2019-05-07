var say = Number(prompt("1-ci ededi daxil edin:"));    //gonderilecek eded sayi
var soz= prompt("sozu daxil edin"); //sozun daxil olunmasis




function sozsayi(text,num){
for(var i=0;i<num;i++){
document.write(text+"<br>");
}
}

sozsayi(soz,say);