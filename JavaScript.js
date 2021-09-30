// var와 let 과 const에 관해 

// var a = 1;
// a = 2;
// 2 

// let b = 1;
// b = 2;
// 2 
// // var와 let은 변수로써 숫자를 변경 가능


// const c = 1;
// c = 2;
// error
// // const 는 상수로써 숫자를 변경 하지 못 한다.

// //var와 let의 차이점
// "var 는 es5까지 쓰던 변수 생성, 여러개 및 생략 가능, 함수 레벨 스코프를 가진다(이 변수가 어디까지 살아 있는지)"

// //let과 const
// "블록 레벨 스코프를 가진다. {}중갈호는 블록, if문 사용시"

// if(){ } // if 문 블록 안에 사용하면 되지만 그 용도 이상으로 사용 불가 


// var a = 1;

// console.log(a);

// var a = 2;

// console.log(a);

// var는 재 선언 가능

// let a = 1;

// console.log(a)

// let a = 2;

// console.log(a);

//let은 재 선언이 불가능 하다.

// const c = 1;

// const c = 2;

// const는 재 선언이 불가능 하다.

// hoisting?


// var는 맨 밑에 있어도 맨 위로 불러 와서 읽는다
// function cat() {
//   name = 'perl';

//   console.log(name);

//   var name;

// }

// cat();

//let은 변수 생성 단계가 var와 다르다, var는 선언과 초기화를 동시에 하는데 
// let과 const는 호이스팅으로 위로 끌어 올려 졌어도 메모리 안에는 공간이 없는 것이다.
// 변수는 설정 되어 있지만 공간은 설정이 안되어 있다.
// var let cosnt 모두 호이스팅이 된다 let const는 선언문 전 변수를 설정하면 오류가 난다.
// TDZ 때문이다. 호이스팅 = 선언 끌어 올리기는 됩니다. 다만, 선언한 후, 초기화 단계에서 메모리에 공간을 확보하는데,
// 선언을 호이스팅해도 초기화 전까지 메모리에 공간이 없음  그래서 변수를 참조할 수 없기 때문
// function cat() {
//   name = 'perl';

//   console.log(name);

//   let name;

// }

// cat();

//var는 가급적 쓰지 말자 .

// 자료형 !

// typeof를 사용하면 자료형을 알아 낼수 있는 연산자 이다.

//심볼형!

// let cat = Symbol("cat");

// let cat2 = Symbol("cat");

// console.log(cat1 == cat2);

//ID 처럼 딱 하나만 설정 , 같은 것 2개는 만들 수 없다.
