import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Worls</h1>
<div>
  テスト01
</div>
`;

//スプレッド構文
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

///まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
//これだと参照が引き継がれてしまう。
// arr8[0] = 100;
// console.log(arr4); //arr8を操作すると参照元のarr4も変更される

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);//元の配列は影響を受けない

//map, filterでの配列の処理
// const nameArr = ["tanaka", "yamada", "hayakawa"];
// //従来
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

//map1:returnされた結果に基づいて新らしい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//map2:配列をループして処理する
// nameArr.map((name, index) => {
//   console.log(`${index + 1}はnameです`);
// });
//練習
// const result = nameArr.map((name) => {
//   if (name !== "hayakawa") {
//     return `${name}さん`;
//   } else {
//     return name;
//   }
// });
// console.log(result);

//filter:配列にたいしてある条件に一致するものを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const result = numArr.filter((num) => num % 2 === 0);
// console.log(result);

/**
 * 三項演算子
 */
//s流条件 ? trueなら　:　falseなら
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString()); //カンマ表示にする
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値にして";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100超えた" : "OK";
// };
// console.log(checkSum(50, 40));

//論理演算子 && ||
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1or2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1and2はtrue");
// }

//||：左側がfalseなら右側を返す = Trueのものを返す
// const num = null;
// const fee = num || "未設定";
// console.log(fee);

//&&：左側がtrueなら右側を返す = falseのものを返す
const num2 = 100;
const fee2 = num2 && "設定されてるよ";
console.log(fee2);
