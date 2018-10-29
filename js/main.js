//---------------------------------------------------------------//
//-変数宣言-------------------------------------------------------//
//---------------------------------------------------------------//
var xmlHttp;
var lines;
var outArray = new Array();
//---------------------------------------------------------------//
//-インプットファイルREAD------------------------------------------//
//---------------------------------------------------------------//
function loadText(){
  xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = checkStatus;
  xmlHttp.open("GET", "./data/txt10000.txt", true);
  xmlHttp.send(null);
}
//---------------------------------------------------------------//
//-1行づつ配列に格納 & ステータスチェック（読み終わり検知） ----------//
//---------------------------------------------------------------//
function checkStatus(){
//  if (xmlHttp.readyState == 4 && xmlHttp.status == 200){           //github up 用
  if (xmlHttp.readyState == 4 && xmlHttp.status == 0){               //ローカル環境用
    lines = xmlHttp.responseText.split( '\n' );
    

/*
    for ( var i = 0; i < lines.length; i++ ) {
        lines[i] == lines[i].replace(/\r?\n/g,"")
    }
*/
/*
    for ( var i = 0; i < lines.length; i++ ) {
        // 空行は無視する
        if ( lines[i] == '' ) {
            continue;
        }
        outArray.push( lines[i].replace(/\r?\n/g,"") );              //改行コードを削除して配列格納
    }
*/

  //-歌詞出力処理へ------    
    write_the_words();
    //alert(lines[0].replace(/\r?\n/g, '')+lines[0].replace(/\r?\n/g, ''));
  }
 }
//---------------------------------------------------------------//
//-歌詞出力処理 --------------------------------------------------//
//---------------------------------------------------------------//
function write_the_words(){
    var outlines = new Array();    //行
    var outblocks = new Array();   //ブロック

    //alert(texx)
    //alert(texx.replace(/\r?\n/g, ''))

    const textarea1 = document.form1.textarea1;
    for ( var j = 0; j < 3; j++ ) {

        for ( var i = 0; i < 3; i++ ) {
            //3ワードを1行で出力する
            outlines[i] =lines[Math.floor( Math.random() * lines.length  )] + 
                         lines[Math.floor( Math.random() * lines.length  )] +
                         lines[Math.floor( Math.random() * lines.length  )] ;

            //改行コードを削除し最終行に改行を付与             
            outlines[i] = outlines[i].replace(/\r\n/g, "").replace(/(\n|\r)/g, "")+'\n';

    }

        outblocks[j] = outlines[0]+outlines[1]+outlines[2] + '\n'

    }
        textarea1.value = outblocks[0] + outblocks[1] + outblocks[2];

}
//---------------------------------------------------------------//
//-ボタン２を押したら歌詞をクリア ----------//
//---------------------------------------------------------------//
function clickBtn2(){
	document.form1.textarea1.value = ""; //クリア
	document.getElementById("span1").textContent = "";
}
//loadText();

/*
var xmlHttp;

xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "./data/MixSentence.txt", false);
xmlHttp.send(null);

console.log()
*/
/*
//本来html上のボタンを押したときにgetdata が動くようにする

function getData() {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {                              //読み込み完
        if (xmlhttp.status == 200) {                              //通信成功
          var elem = document.getElementById("output");           //div id="output"を 変数elemに
          elem.innerText = xmlhttp.responseText;                  //elem("output")のinnerTextにセット
        } else {
          alert("status = " + xmlhttp.status);
        } 
        console.log(xmlhttp.responseText);
      }
    }

    xmlhttp.open("GET", "./data/MixSentence.txt");
    xmlhttp.send();

}
   
  getData();
*/

  /*
//CSVファイルを読み込む関数getCSV()の定義
function getCSV(){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "./data/sample.csv", true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
        console.log(req.responseText);
        alert(req.responseText);
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var result = []; // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }

    alert(result[1][2]); // 300yen
}

getCSV(); //最初に実行される
*/