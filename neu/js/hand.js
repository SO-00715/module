// 手札

// 山札
const deck = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,10,10,10,50,50,-10,-10,-10,-10,-1,-1,101,101,101,101,101, 'shot'];
console.log(deck.length);
const people = 4;// 人数によって変化

const players = {}
// players2.push = 1;
//要素を追加していく＝変数を生成する
for(let i = 0; i < people; i++){
    players['player' + (i + 1)] = [];
    console.log(typeof players['player' + (i + 1)]);
}
// while(!(players['player' + (i + 1)].length === 3)) {
// }

    // 山札のプロパティをランダムで取得しランダムな要素(配列)を変数に格納
    // 
    const random = Math.floor(Math.random() * deck.length);
    console.log(random);
    let drow = deck.splice(random, 1);
    console.log(drow);
    console.log(players.player1);
    // players[`player${i}`].push(drow);
    console.log(players[`player1`].push(drow));

console.log(players.player1);
players.player1.concat(drow);
console.log(players.player1);
const obj = {
    arry: [],
    arry2: []
};
obj.arry.push(1);
obj.arry = [4];
obj.arry.push([7]);


console.log(obj.arry);

// for(let i = 0; i < people; i++) {
//     if(players['player' + (i + 1)].length = 3);
//     // if(players['player' + i])
//     // players['player' + i] +=[i]; 
//     // console.log(players['player' + i]);

// }

// console.log(deck[Math.floor(Math.random() * deck.length)]);
// let num = deck[Math.floor(Math.random() * deck.length)];

// 
// const random = Math.floor(Math.random() * deck.length);
// console.log(random);
// let drow = deck.splice(random, 1)
// console.log(num);
// console.log(drow);
// console.log(deck.length);
// console.log();
// hand.push(num);
