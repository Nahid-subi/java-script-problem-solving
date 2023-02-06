function isLGSeven(num){
    if(typeof num != "number"){
        return "Please provide a valid number";
    }
    else{
        let deduction = num - 7;
        if(deduction < 7){
            return deduction;
        }
        else if(deduction => 7){
            return num * 2;
        }  
    }
}

const a = isLGSeven("dd");
console.log(a);