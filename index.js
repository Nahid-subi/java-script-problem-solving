// ---------------- Problem - 1 -------------------

/* in problem-1 i am declaring a parameter named number function inside the 
multiplication, addition, division and subtraction at the end and the result is returned at the end.
 if you input something other than a number, it will ask for a valid number.
  you must enter a number above 0 .  
*/
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

// ------------------Problem - 2 ---------------------
/*
In problem-2 I am declaring 1 parameter named stringInput .
If the word of the string is even then even will return or odd will return.
If you input something other than string, you must give a valid string.
*/ 

function evenOdd(stingInput){
    if(typeof stingInput !== "string"){
        return "Please provide a valid string";
    }
    else{
        const lengthOfString = stingInput.length;
        if(lengthOfString%2 === 0){
            return "even";
        }
        else{
            return "odd";
        }
    }
}




// ------------------Problem - 3 ---------------------
/*
In problem-3 I am declaring a parameter named num inside the function 1 subtracted by 7.
If it is less than 7 then the subtraction will not return the result or it will multiply by 2 and return.
If you input something other than a number, it will ask for a valid number and you must enter the number.
*/ 
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


// ------------------Problem - 4 ---------------------
/*
In problem-4 I am declaring a parameter named numbers inside the function 
that will check if the number is less than 0. If yes then calculate and return result.
If you input something other than Array, it will ask for valid Array, you must give Array.
*/ 
function findingBadData(numbers){
    if(numbers instanceof Array === false){
        return 'Please provide a valid Array';
    }
    else{
        let result = 0;
        for(i = 0;i <= numbers.length;i++){
            element = numbers[i];
            if(element < 0){
                result++;
            }
        }
        return result;
    }
}

// ------------------Problem - 5 ---------------------
/*
In problem-5 I am declaring 3 parameters named firstFriendGems,secondFriendGems,
thirdFriendGems inside the function multiply the 3 parameters by 21,32,43 respectively.
And if the sum of all products is greater than 2000 then subtract 2000 and return the result or return the product. 
If you input something other than a number, it will ask for a valid number and you must enter the number.
*/

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    if (typeof firstFriendGems !== "number" || typeof secondFriendGems !== "number" || typeof thirdFriendGems !== "number") {
      return "Please provide a valid number";
    } 
    else {
      let firstFriendPower = firstFriendGems * 21;
      let secondFriendPower = secondFriendGems * 32;
      let thirdFriendPower = thirdFriendGems * 43;
      let totalDiamond = firstFriendPower + secondFriendPower + thirdFriendPower;
      if(totalDiamond > 2000){
        let deductionResult = totalDiamond - 2000; 
        return deductionResult;
      }
      else{
        return totalDiamond;
      }
    }
  }