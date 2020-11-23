// 一定数の文字数を超過した際、省略されて「...」と表示される。
// 一覧表を間延びさせない時に使う。
const textArry = ['texttexttexttext', 'textCheck', '文字数で分岐', '分岐分岐分岐分岐分岐分岐分岐分岐'];
const max_lentgh = 10;


function textLengthCheck(arry) {
    let str = [];
    for(let i = 0;i < arry.length; i++) {
        if(arry[i].length >= max_lentgh) {
            str[i] = arry[i].substr(0, (max_lentgh - 3)) + '...';
        } else {
            str[i] = arry[i];
        }
    }
    return str;
}


console.log(textLengthCheck(textArry));


