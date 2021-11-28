//alert('hello zhenka')
document.write('<h1>hello zhenka</h1>')
console.log('privet zhenka')
console.log(5>3);
console.log('07' == 7);
console.log(undefined <= undefined);

// 2

let a1 = 5 % 3;
console.log(a1, typeof(a1));

let a2 = 3 % 5;
console.log(a2, typeof(a2));

let a3 = 5 + '3';
console.log(a3, typeof(a3));

let a4 = '5' - 3;
console.log(a4, typeof(a4));

let a5 = 75 + 'кг';
console.log(a5, typeof(a5));

let a6 = 785 * 653;
console.log(a6, typeof(a6));

let a7 = 100/25;
console.log(a7, typeof(a7));

let a8 = 0*0;
console.log(a8, typeof(a8));

let a9 = 0/2;
console.log(a9, typeof(a9));

let a10 = 89/0;
console.log(a10, typeof(a10));

let a11 = 98+2;
console.log(a11, typeof(a11));

let a12 = 5-98;
console.log(a12, typeof(a12));

let a13 = (8+56*4)/5;
console.log(a13, typeof(a13));

let a14 = (9-12)*7/(5+2);
console.log(a14, typeof(a14));

let a15 = +"123";
console.log(a15, typeof(a15));

let a16 = 1||0;
console.log(a16, typeof(a16));

let a17 = false||true;
console.log(a17, typeof(a17));

let a18 = true>0;
console.log(a18, typeof(a18));

//3

let width= 10;
let height= 23;
console.log(width, typeof(width));

let SPryam;

console.log(SPryam=width*height);
console.log(SPryam, typeof(SPryam));    

//4

let CilindrHeight = 10;
let CilindrDiametr = a7;
let VCilindra;
console.log(VCilindra=Math.PI*CilindrHeight*(Math.pow(CilindrDiametr/2,2)));
console.log(VCilindra, typeof(VCilindra));  

//5

let RKruga = 5;
let SKruga;
console.log(SKruga=Math.PI*Math.pow(RKruga,2))
console.log(SKruga, typeof(SKruga));

//6

let ATrap = 5;
let BTrap = 7;
let HTrap = 10;
let STrap;
console.log(STrap=(ATrap+BTrap)/2*HTrap);
console.log(STrap, typeof(STrap));

//7

let S=2000000;
let p=10;
let years=5;
let pereplata;
console.log(pereplata=S*(Math.pow((1+p/100),years))-S);
console.log(pereplata, typeof(pereplata));

/*console.log(pereplata=2000000*1.1*1.1*1.1*1.1*1.1-2000000);
console.log(pereplata, typeof(pereplata));*/


//8

let a = 8;
let b = 3;
let x;
console.log(x=(16-a)/2+b);
console.log(x, typeof(x));