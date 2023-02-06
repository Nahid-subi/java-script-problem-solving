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

const a =  [ -4, -9, -5, -33, -55 ];
const b = findingBadData(a);
console.log(b);