const sub1 = 90;
const sub2 = 99;
const sub3 = 90;
const sub4 = 92;
const sub5 = 95;

const sum = sub1 + sub2 + sub3 + sub4 + sub5;
console.log("gujrati=", sub1);
console.log("hindi=", sub2);
console.log("sanskrut=", sub3);
console.log("eng=", sub4);
console.log("sci=", sub5);

//.....sum.....//
console.log("sum=", sum);

//.....pre.....//
const pre = sum / 5;
console.log("pre=", pre);

//.....min.....//
var min = 0;

if (sub1 < sub2) {
    if (sub1 < sub3) {
        if (sub1 < sub4) {
            if (sub1 < sub5) {
                min = sub1;

            } else {
                min = sub5;
            }
        }
        else {
            if (sub4 < sub5) {
                min = sub4
            } else {
                min = sub5;
            }
        }
    }
    else {
        if (sub3 < sub4) {
            if (sub3 < sub5) {
                min = sub3
            } else {
                min = sub5
            }

        } else {
            if (sub4 < sub5) {
                min = sub4;
            } else {
                min = sub5;
            }
        }
    }
} else {
    if (sub2 < sub3) {
        if (sub2 < sub4) {
            if (sub2 < sub5) {
                min = sub2;

            } else {
                min = sub5;
            }
        }
        else {
            if (sub4 < sub5) {
                min = sub4
            } else {
                min = sub5;
            }
        }
    }
    else {
        if (sub3 < sub4) {
            if (sub3 < sub5) {
                min = sub3
            } else {
                min = sub5
            }

        } else {
            if (sub4 < sub5) {
                min = sub4;
            } else {
                min = sub5;
            }
        }
    }
}

console.log("min:", min);

//.....max.....//
const max =(sub1 > sub2 && sub1 > sub3 && sub1>sub4 && sub1>sub5 )? sub1:(sub2>sub3 &&  sub2> sub4 && sub2>sub5 )? sub2:( sub3> sub4 && sub3>sub5)?sub3:(sub4>sub5)?sub4:sub5


console.log("max:",max);
var cnt=0;
var result="f";
if(min<=33){
    console.log("fail");
}else{
    
    console.log("pass");
    if(pre<=99 && pre>=90){
        console.log("A+");
        
    }else if(pre<90 && pre>80){
        console.log("A");
        
    }else if(pre<80 && pre>70){
        console.log("B");
    }else if(pre<70 && pre>60){
        console.log("C");
    }
    else if(pre<60 && pre>50){
        console.log("D");
    }
    else{
        console.log("E");
        
    }
    
}










