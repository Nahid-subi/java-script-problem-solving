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
  
  const a = gemsToDiamond(20, 200, 50);
  console.log(a);
  