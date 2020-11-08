// 場
// calc()からのみアクセスできるよう記述。

const calc1 = (function () {
    let field = 0;
    function calc(val) {
        if(!(val === 101)) {// valが101か否か。英語のカードどうしよう
        field += val;
        console.log(!val === 101);
    } else {
            field = val;
            console.log(val === 101);
        }
        if(field > 101) {
            console.log(`game over: ${field}`);
        }
        console.log(field);
        // return field;
    }
    return calc;
})()
const num = 2;
const num1 = -10;
const num2 = 6;
const num3 = 50;
const num4 = 101;
const num5 = 10;

calc1(num);
calc1(num1);
calc1(num2);
calc1(num3);
calc1(num4);
calc1(num5);



