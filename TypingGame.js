"use strict"
let Tango = ["いちご","バナナ","ぶどう","隣の柿は良く客食う柿だ","最強と最高","LaLaLa","ダイヤモンド","タイヤとアーモンド"];//お題を登録
let Odai = document.getElementById("Odai");//お題を表示するp要素を代入
let PushPush = 0;//一回しか押せない仕組みを作るための変数
let OldTango = "";//ひとつ前の単語の保持を行う

function OdaiwoHyouzi()
{
    if(PushPush == 0)
    {
        let OdaiNumber = Math.floor( Math.random()*Tango.length);//乱数を生成
        //Math.floorは整数化するための関数（切り捨てを行う）
        Odai.textContent = Tango[OdaiNumber];//p要素の書き換え
        OldTango = Tango[OdaiNumber];//現在の単語を保持
    }
    PushPush++;
}

function Seikai()
{
    let InputTango = document.getElementById("Boxid");//テキストボックス内の値を保持
    if(Odai.textContent == InputTango.value)//お題とテキストボックスの値が一致したとき
    {
        InputTango.value = "";//まず、ボックスを空にする
        let OdaiNumber = Math.floor( Math.random()*Tango.length);//乱数を生成し、次の単語を決める
        if(Tango[OdaiNumber] == OldTango)//もし、ひとつ前の単語と同じ単語が出た場合、
        {
            while(Tango[OdaiNumber] == OldTango)//ひとつ前の単語と、乱数によって決まった単語が同じ限り、ループを続ける
            {
                OdaiNumber = Math.floor( Math.random()*Tango.length);
            }
        }
        Odai.textContent = Tango[OdaiNumber];//新しく決まった単語を代入
        OldTango = Tango[OdaiNumber];//現在の単語を保持
    }
}
