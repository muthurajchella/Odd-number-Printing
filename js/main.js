let num = parseInt(prompt("Enter Your Number"));
let sum = 0;
while(num != 0){
    let rem = num % 10;
    num = (num - rem)/10;
    if(rem % 2){
        sum += rem;
    }
}
console.log(sum);
alert(sum);
