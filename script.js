"use strict"


// Task 1

/*
{

  function sum (a ,b, c) {
   
  return (a-b)/c ;
  }
  console.log(sum(15,5,2));
}



// Task 2


{

  function num (n){
    let sq= Math.pow(n,2);
    let cube = Math.pow(n,3);
    console.log(`'Число: ' ${n} 'Квадрат числа: '${sq} 'Куб числа: '${cube}`);

  }
  num (4);
}



// Task 3



{

  function min(a, b) {
    if (a < b) {
      return a;

    }
    else {
      return b;
    }
  }

  function max(a, b) {
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
  }

  console.log('Меньшее число ' + min(3, 6));

  console.log('Большее число ' + max(8, 12));
}



// Task 4


{

  function getArray(length) {
    let arr = [];
    for (let i = 1; i <= length; i++) {
      arr.push(i);
    }
    return arr;
  }

  function returnArray() {
    let resultArr = getArray(prompt('Веедите число'));
    console.log(resultArr);
  }
  returnArray();
}


//Task 5


{
  function isEven(num) {
    if (num % 2 == 0) {
      return true;
    }
    else {
      return false;
    }

  }
  let result = isEven(prompt('Веедите число'));
  if (result == true) {
    console.log(true);
  } else {
    console.log(false);
  }





// Task 6




  let array = [];  
  for(let i=0; i<6; i++){
    let num = prompt('Введите элеиент массива');
    array[i] = num;
  } 
  console.log(array);

  let newArr=[];

  const displayArr = function(ar){
     newArr = ar.filter(item => isEven(item));

     return newArr;
     
  }
  console.log(displayArr(array));
    


}
*/

// Task 7

/*
{
  function piramid(height) {
    let str = '';
    if (Number.isInteger(height)) {
      for (let i = 1; i <= height; i++) {
        str = '';
        for (let j = 0; j < i; j++) {
          str += i;
        }
        console.log(str + '\n');
      }
    } else {
      for (let i = 1; i <= 9; i++) {
        str = '';
        for (let j = 0; j < i; j++) {
          str += '*';
        }
        console.log(str + '\n');
      }

    }
  }
  piramid(Number(prompt('Введите высоту пирамиды')));
}
*/


// Task 8

/*
{
  function stars(height) {
    let i = 0;
    let j = 0;
    let space = "";
    let star = "";
    while (i < height) {
      space = " ";
      star = "";
      for (j = 0; j < height - i; j++) space += " ";

      for (j = 0; j < 2 * i + 1; j++) star += "*";
      console.log(space + star);
      i++;
    }
  }
  stars(prompt('Введите высоту'));

  function reversedStars(height) {
    let i = height;
    let j = 0;
    let space = " ";
    let star = " ";
    while (i > 0) {
      space = " ";
      star = " ";
      for (j = 0; j < height - i; j++) space += " ";
      for (j = 0; j < 2 * i - 1; j++) star += "*";
      console.log(space + star);
      i--;
    }

  }
  reversedStars(prompt('Введите высоту пирамиды'));
}
*/
/*
//Решение из интернета. Синтаксис в целом понятен, кроме использования комбинации методов в  array (fill & map)
function writeTriangle(rows, isReverse) {
  const indexes = new Array(rows).fill(0).map((_, i) => i);//Поясните, пожалуйста, синтаксис
  if (isReverse) indexes.reverse();
  for (let i of indexes) {
      const spaces = ' '.repeat(rows - 1 - i);
      console.log(spaces + '*'.repeat(1 + i*2) + spaces);
  }
}

const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);

*/


// Task 9

/*
{

  function FibArray(n){
    const arr = [];
    for (let i = 0; i< n; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i-1] + arr[i-2];
    }
    console.log(arr);
    }
    FibArray (16);
}
*/


// Task 10


/*{

  function showArray (a){
    let str = String(a);
    let sum =0;

    for(let i=0; i<str.length; i++){
    sum += Number(str[i]);
    }
    if ( sum > 9) showArray(sum);

    else{

      console.log(sum);
    }

  }
  showArray( prompt ('Введите число'));
}*/



// Task 11


/*
{

  function recursionArray (arr){
    console.log(arr[i]);
    i ++;

    if ( i < arr.length) recursionArray(arr);
  }

  let i = 0;

  recursionArray ([2,10,35,48,7]);
}
*/




// Task 12




{

function studentInfo(firstName, middleName, lastName, groupNum){

let header ='Домашняя работа: «Функции»';
let name = firstName + ' ' + middleName + ' ' + lastName;
let group = 'Выполнил: студент гр. ' + groupNum;

let maxLength = Math.max(header.length, name.length, group.length);
let star='*'.repeat(maxLength);


console.log(`* ${star} *\n* ${header} *\n* ${group} *\n* ${name} *\n* ${star} *`);
}

  studentInfo(prompt('Имя'), prompt('Отчество'), prompt('Фамилия'), prompt('Номер группы'));
}


