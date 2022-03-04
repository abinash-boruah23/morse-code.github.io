async function play(){
    morseArr = text.value.toLowerCase();
    for(let i = 0; i<morseArr.length; i++){
        await new Promise(resolve => setTimeout(resolve, 800));
        if(morseArr[i]=="a"){
            new Audio("./assets/sound/a.wav").play();
        }
        else if(morseArr[i]=="b"){
            new Audio("./assets/sound/b.wav").play();
        }
        else if(morseArr[i]=="c"){
            new Audio("./assets/sound/c.wav").play();
        }
        else if(morseArr[i]=="d"){
            new Audio("./assets/sound/d.wav").play();
        }
        else if(morseArr[i]=="e"){
            new Audio("./assets/sound/e.wav").play();
        }
        else if(morseArr[i]=="f"){
            new Audio("./assets/sound/f.wav").play();
        }
        else if(morseArr[i]=="g"){
            new Audio("./assets/sound/g.wav").play();
        }
        else if(morseArr[i]=="h"){
            new Audio("./assets/sound/h.wav").play();
        }
        else if(morseArr[i]=="i"){
            new Audio("./assets/sound/i.wav").play();
        }
        else if(morseArr[i]=="j"){
            new Audio("./assets/sound/j.wav").play();
        }
        else if(morseArr[i]=="k"){
            new Audio("./assets/sound/k.wav").play();
        }
        else if(morseArr[i]=="l"){
            new Audio("./assets/sound/l.wav").play();
        }
        else if(morseArr[i]=="m"){
            new Audio("./assets/sound/m.wav").play();
        }
        else if(morseArr[i]=="n"){
            new Audio("./assets/sound/n.wav").play();
        }
        else if(morseArr[i]=="o"){
            new Audio("./assets/sound/o.wav").play();
        }
        else if(morseArr[i]=="p"){
            new Audio("./assets/sound/p.wav").play();
        }
        else if(morseArr[i]=="q"){
            new Audio("./assets/sound/q.wav").play();
        }
        else if(morseArr[i]=="r"){
            new Audio("./assets/sound/r.wav").play();
        }
        else if(morseArr[i]=="s"){
            new Audio("./assets/sound/s.wav").play();
        }
        else if(morseArr[i]=="t"){
            new Audio("./assets/sound/t.wav").play();
        }
        else if(morseArr[i]=="u"){
            new Audio("./assets/sound/u.wav").play();
        }
        else if(morseArr[i]=="v"){
            new Audio("./assets/sound/v.wav").play();
        }
        else if(morseArr[i]=="w"){
            new Audio("./assets/sound/w.wav").play();
        }
        else if(morseArr[i]=="x"){
            new Audio("./assets/sound/x.wav").play();
        }
        else if(morseArr[i]=="y"){
            new Audio("./assets/sound/y.wav").play();
        }
        else if(morseArr[i]=="z"){
            new Audio("./assets/sound/z.wav").play();
        }
        else if(morseArr[i]=="1"){
            new Audio("./assets/sound/1.wav").play();
        }
        else if(morseArr[i]=="2"){
            new Audio("./assets/sound/2.wav").play();
        }
        else if(morseArr[i]=="3"){
            new Audio("./assets/sound/3.wav").play();
        }
        else if(morseArr[i]=="4"){
            new Audio("./assets/sound/4.wav").play();
        }
        else if(morseArr[i]=="5"){
            new Audio("./assets/sound/5.wav").play();
        }
        else if(morseArr[i]=="6"){
            new Audio("./assets/sound/6.wav").play();
        }
        else if(morseArr[i]=="7"){
            new Audio("./assets/sound/7.wav").play();
        }
        else if(morseArr[i]=="8"){
            new Audio("./assets/sound/8.wav").play();
        }
        else if(morseArr[i]=="9"){
            new Audio("./assets/sound/9.wav").play();
        }
        else if(morseArr[i]=="0"){
            new Audio("./assets/sound/0.wav").play();
        }
        else if(morseArr[i]==" "){}
    }
}
