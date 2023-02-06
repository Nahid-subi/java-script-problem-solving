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
