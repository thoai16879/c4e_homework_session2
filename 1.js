// câu 1:

// let n =  Number(prompt("nhập vào số N"));
// let tongle = 0;
// let tongchan = 0;
// for  (let i = 1 ;i <= n; i++){
//     if (i% 2 === 0  ){
//         tongchan = tongchan +1;     
//     }
//     else {
//         tongle = tongle +1
//     }
// }
// console.log("tổng các số lẻ = "+tongle);
// console.log("tổng các số chẵn = "+tongchan);


//câu 8:
// let userinput = Number(prompt("nhập vào tổng số gà, chó"));
// let userinput2 = Number(prompt("nhập vào tổng số chân"));
// let gà,chó;
// chó = (userinput*4 - userinput2)/2;
// gà = userinput + chó;
// console.log("tổng số gà = "+gà);
// console.log("tổng số chó = "+chó);


// câu 9:
// let a1 = Number(prompt("nhập vào số a1"));
// let b1 = Number(prompt("nhập vào số b1"));
// let c1 = Number(prompt("nhập vào só c1"));
// let a2 = Number(prompt("nhập vào số a2"));
// let b2 = Number(prompt("nhập vào số b2"));
// let c2 = Number(prompt("nhập vào số c2"));
// let x,y;
// y = (c2*a1-a2*c1)/(b2*a1-b1*a2);
// x = (c1-b1*y)/a1;
// console.log("x= "+x);
// console.log("y=" +y);


// bài 2:
//  let inputNumber1 = Number(prompt("Nhap so N:"));
//  let a = 0;
// for(let i=1;i<=inputNumber1;i++){
//      if(inputNumber1%i ===0){
//          a++;
//      }
//  }
//  if(a === 2){
//      console.log(true);
// }else{
//      console.log(false);
//  }

// Câu 3:
// function songuyento(n) {  
//    let loop =true;
//    if(n<2){
//        loop=false;
//    }else{
//         for(let i=2;i<n;i++){
//            if(n%i==0){
//               loop=false;
//               break;
//             }
        
//         }
//    }
    
//     return loop;
// }
// let input=Number(prompt("Nhập số N"));

// for(let i=0;i<=input;i++){
//     if (songuyento(i)){
//         console.log(i);
//     }           
// }
    

// Câu 4:
// let n=Number(prompt("Nhập số N"));
// let x1,x2,x3;
// x1=x2=x3=1;
// if(n<=0){
//   console.log("Không hợp lệ");
  
// }else if(n===1||n===2){
//   console.log(x1);
  
// }else {
//   for(i=3;i<=n;i++){
//     x3=x1+x2;
//     x1=x2;
//     x2=x3;
//   }
//   console.log(x3);
  
// }


// Câu 5:
// let loop = true;
// let sum =0
// while(loop){
//   let input=Number(prompt("Nhập số bất kỳ"));
//   if(input>=0){
//     sum+=input;
//   }else{
//     console.log(sum);
//     break;
    
//   }
// }


// Câu 6:
// let input=prompt("Nhập chuỗi bất kỳ ");
// let loop=true;
//     for(let i=0;i<=input.length/2;i++)
//     if(input[i]!=input[input.length-1-i]){
//         console.log("false");
//         loop=false;
//     break;

//    }
//    if(loop){
//         console.log("true");
    
//    }


// Câu 7:
let a="*";
let x="";
let m=Number(prompt("Nhập số hàng"));
let n=Number(prompt("Nhập số cột"));
for(let i=1;i<=m;i++){
  x=`${x}${a}`;
 }
 for(i=1;i<=n;i++){
   console.log(x);
   
 }
