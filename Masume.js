"use strict"
let Bannmenn1 = document.getElementById("P1");
let Bannmenn2 = document.getElementById("P2");
let Bannmenn3 = document.getElementById("P3");
let Bannmenn4 = document.getElementById("P4");
let Bannmenn5 = document.getElementById("P5");
let Bannmenn6 = document.getElementById("P6");
let Bannmenn7 = document.getElementById("P7");
let Bannmenn8 = document.getElementById("P8");
let Bannmenn9 = document.getElementById("P9");

let Hairetu = [
    [Bannmenn1,Bannmenn2,Bannmenn3],
    [Bannmenn4,Bannmenn5,Bannmenn6],
    [Bannmenn7,Bannmenn8,Bannmenn9]
];

Hairetu[1][1].src = "△.png";

let UN = 1;
let DN = 1;

window.addEventListener("keyup",function(e){
    let NowKey = e.keyCode;
    if(NowKey == 40)//下キーのこと
    {
        if(UN < 2)
        {
            Hairetu[UN][DN].src = "Haikei.png";
            UN++;
            Hairetu[UN][DN].src = "△.png";
        }
    }
    else if (NowKey == 38)//上キーのこと
    {
        if(UN > 0)
        {
            Hairetu[UN][DN].src = "Haikei.png";
            UN--;
            Hairetu[UN][DN].src = "△.png";
        }
    }
    else if (NowKey == 37)//左キーのこと
    {
        if(DN > 0)
        {
            Hairetu[UN][DN].src = "Haikei.png";
            DN--;
            Hairetu[UN][DN].src = "△.png";
        }
    }
    else if (NowKey == 39)//右キーのこと
    {
        if(DN < 2)
        {
            Hairetu[UN][DN].src = "Haikei.png";
            DN++;
            Hairetu[UN][DN].src = "△.png";
        }
    }
})