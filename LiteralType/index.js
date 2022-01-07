// =========================================================================
let me;
// 밑에 함수는 파라미터에 리터럴 타입과 123 number 를 타입으로 지정한것.
// 리턴값에도 타입을 지정할수있다.
function 함수(a, b) {
    return 1;
}
console.log(함수('hello', 123));
// 배열이 타입이 된 경우 배열에 들어가는것을 지정할수있다.
function act(a) {
    return ['가위'];
}
console.log(act('가위'));
console.log(act('바위'));
console.log(act('보'));
// =========================================================================
//정리를 해보면 리터럴 타입은 토씨하나 안빠지고 일치해야 된다 ! number 처럼 포괄적인 개념이 아닌 123 하면 123타입인거임 ㅇㅋ ? ㅇㅋ 
//그러다보니깐 장점은 값을 정확하게 받을수있고 정확한 값을 리턴할수있는데 단점은 토씨하나 틀리면 안된다는거지
var 자료 = {
    name: 'kim'
};
//as const 의 효과
// 타입을 object의 value 로 바꿔줍니다. (타입을 'kim'으로 바꿔줍니다.)
//object안에 있는 모든 속성을 readonly 로 바꿔줍니다. (변경하면 에러나게)
function 내함수(a) {
    return 1;
}
console.log(자료.name);
//작동 x as const 써서 작동시켜야함  //함수에 넣을때 파라미터가 리터럴 'kim'을 받는데 as const를 사용 안하면 자료.name으로 그대로 받기때문 토씨하나라도 틀리게됨 ! 
console.log(내함수(자료.name));
console.log(내함수(자료.name));
//# sourceMappingURL=index.js.map