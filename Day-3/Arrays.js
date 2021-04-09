function getSecondLargest(nums) {
    let firstLargestnum= 0;
    let secondLargestnum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > firstLargestnum){
            secondLargestnum = firstLargestnum;
            firstLargestnum = nums[i];
        }
        if(nums[i]> secondLargestnum && nums[i] < firstLargestnum){
            secondLargestnum = nums[i];
        }
    }
    return secondLargestnum;
}