function evenCheck(num) {
    let result;

    if (num%2 == 0) {
        result = num;
    }else{
        result = num;
    }
    return result;
}

// const result = evenCheck(5);
// const square = result * result;
// console.log(square);


function returnArray(nums) {
    let event_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = evenCheck(num);
        event_array.push(result);
    }
    return event_array;
}
let data = [12,23,14,34,56,36,73,76];
let num_event = returnArray(data);
console.log(num_event);