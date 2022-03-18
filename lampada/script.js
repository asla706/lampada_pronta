let c = 0
let imginter=document.createElement("img");
imginter.src="./imagens/off.png"
document.body.appendChild(imginter);
let imglampada=document.createElement("img");
imglampada.src="./imagens/desligado.png";
document.body.appendChild(imglampada);

//estilização
imglampada.style.margin = "0 0 0 35%";
imglampada.style.opacity = "0.2";
imginter.style.margin = "0 0 0 5%"
document.body.style.backgroundColor = "black";
imginter.onclick = function (){ 
    
    if (imginter.src.match("on")) {
      imginter.src = "./imagens/off.png";
      imglampada.src = "./imagens/desligado.png";
      document.querySelector("body").style.backgroundColor= "black";
      imglampada.style.opacity = "0.2";
      c = 1
    }else{
      imginter.src = "./imagens/on.png";
      imglampada.src = "./imagens/ligado.png";
      document.querySelector("body").style.backgroundColor= "white";
      imglampada.style.opacity = "1";
      c = 0
    }
}
//não consegui resolver esse movimento do interruptor ;\