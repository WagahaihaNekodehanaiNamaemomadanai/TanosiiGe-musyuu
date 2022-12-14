"use strict"
let Zahyou = document.getElementById("CharaP");
let x = 15; //ｘ座標の設定(CSS側で枠内の左に位置する値に設定)
let y = 460; //ｙ座標の設定(CSS側で枠内の下に位置する値に設定)
//つまり、上の二つの設定によって左下に位置する点を原点として設定している
let MV = 10; //スピードの設定(一回の入力で座標から足したり引いたりする値の設定)

window.addEventListener("keydown",function(e){
    let NowKey = e.keyCode;
    if (NowKey == 65)//Aキーのこと　矢印でいうと「←」
    {
        x -= MV;//原点からMVを引く。つまり、x軸方向にマイナスに進むということ
        if(x >= 15)//画面外に出ることを防ぐための処理
        {
            let xV = x + "px";//これによって、〇pxという文字列に数値を変換している
            Zahyou.style.left = xV;//座標の更新
        }
        else
        {
            x = 15;//例外の場合に値をリセットする処理
            //テストなのでとりあえず原点の値を入力しているが、ここはもっと別の処理を使ったほうがいい
        }
    }
    else if (NowKey == 68)//Dキーのこと　矢印でいうと「→」
    {
        x += MV;//原点にMVを足す。つまり、x軸方向にプラスに進むということ
        if(x <= 250)
        {
            let xV = x + "px";
            Zahyou.style.left = xV;
        }
        else
        {
            x = 250;
        }
    }
    else if (NowKey == 87)//Wキーのこと　矢印でいうと「↑」
    {
        y -= MV;//原点からMVを引く。topから値を引くと位置が上に移動するため、ここではｙ軸方向にプラスに進む処理になっている
        if(y >= 220)
        {
            let yV = y + "px";
            Zahyou.style.top = yV;
        }
        else
        {
            y = 220;
        }
    }
    else if (NowKey == 83)//Sキーのこと　矢印でいうと「↓」
    {
        y += MV;//原点にMVを足す。topから値を引くと位置が上に移動するため、ここではｙ軸方向にマイナスに進む処理になっている
        if(y <= 460)
        {
            let yV = y + "px";
            Zahyou.style.top = yV;
        }
        else
        {
            y = 460;
        }
    }
},false)