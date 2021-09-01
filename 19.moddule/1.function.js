function evenCheck(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
    
        if (num%2 == 0) {
            console.log(num, ': is even number' );
        }else{
            console.log(num, ': is odd number');
        }
    } 
}

let nums = [5, 12, 89, 45, 18, 8, 13, 93];
evenCheck(nums);

let friends_age = [32, 24, 55, 27, 34, 28, 35, 20];
evenCheck(friends_age);