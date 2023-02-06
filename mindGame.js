function mindGame(number){
    if(typeof number != "number" || number <= 0){
        return "Please provide a valid number";
    }
    else{
        let multiplication = number * 3;
        let addition = multiplication + 10;
        let deviation = addition / 2;
        let deduction = deviation - 5;
        return deduction;
    }
}

const hh = mindGame(50);
console.log(hh);