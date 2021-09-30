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


//원시형과 객체형의 차이점 여러 타입의 데이터를 담을수 있는가 없는가
//원시형은 오직 한가지의 타입, 객체형은 여러타임 가능 
// 객체 = {key : value} 프로퍼티 key = 문자형만, value는 모든 타입이 가능


// let a = {b:1, c:2};

// a.b 
// 1

// a['b']
// 1

// 0,1,2

//객체 생성자로 만들기 
// let cat = new Object();

//객체 리터럴로 만들기 
//중괄호로 객체를 선언하는 걸 리터럴이라고 하는데, 객체 선언할 때 주로 쓴다
// let cat = {};

// const 상수는 재할당이 안된다고 했지만

// const로 선언된 객체는 수정될 수 있다.Object
// const로 선언된 객체는 객체에 대한 참조를 변경하지 못한다는 것을 의미한다.Object
// 즉 객체의 프로퍼티는 보호되지 않는다.

// 함수에 대한 정리

//어떠한 코드를 묶어 놓은 것 
// 자바스크립트는 함수를 특별한 값 취급을 한다.

//소 괄호가 있으면 함수 실행, 없으면 문자로 출력 

//함수 선언문 
function cat () {
  console.log('perl');
  
}

//함수 표현식

// let cat = function() {
//   console.log('perl');
// }

// // 화살표 함수 

// let cat2 = () => {
//   console.log('perl2')
// }

//함수라는 친구는 자기가 태어난 환경을 프로퍼티에 저장한다.
// 이걸 이론 상으로 렉시컬 환경을 참조한다 라로 한다.
//[[Enviroment]]

//내부 외부 변수 중 
// 내부 변수가 순위가 더 놓아서 덮어진다.

//콜백 함수란?
function useBall(){

  console.log(cat, "공으로 노는 중");
}

function playWithCat(cat, action){
  action(cat);
}
playWithCat("perl", useBall);

// 프로토 타입 이란?
//자바스크립트는 프로토타입 기반 동적 언어 
// 클래스 기반 java, c++
// 객체 생성 전에 클래스를 정의하고 이를 통해 객체를 생성

//자바스트립트
//클래스 없이 객체를 생성(리터럴과 생성자)

//자바스크립트의 모든 객체는 자신의 부모 객체와 연결되어 있다.
//원본 개체에서 복사해서 새로운 객체를 만듬
// 객체는 함수를 사용해서 만들어 진다, 자바스크립트의 모든 객체는 프로토타입을 다 가지고 있다.
// 함수의 프로토 타입의 객체를 복사해서 객체를 만듬

//객체는 어디서 복제 되고 생성되었는지 기억 하고 있다.

// function Animal(){}

// Animal.prototype

// let cat = new Animial();
