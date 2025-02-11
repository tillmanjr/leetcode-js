/*
    Name: Majority Element
    Difficulty: Easy
    Category: Array
    Topics: 
        Array
        Hash Table
        Divide and Conquer
        Sorting
        Counting
    Challenge:
        Given an array nums of size n, return the majority element.

        The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

        

        Example 1:

        Input: nums = [3,2,3]
        Output: 3
        Example 2:

        Input: nums = [2,2,1,1,1,2,2]
        Output: 2
    Constraints:
        n == nums.length
        1 <= n <= 5 * 104
        -109 <= nums[i] <= 109


    Follow-up:
        Could you solve the problem in linear time and in O(1) space?

    Date Completed: 2025.02.10
---------------------------------------------------------
    */
function majorityElement(arr) {
    let n = arr.length;
    let candidate = null;
    for (let i = 0; i < n; i++) {
        let count = 1;
       
        for(let j = i; j < n-i; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if (count >= n/2) {
            candidate = arr[i];
            break;
        }
    }
    return candidate
}

let test = [3,2,3]
console.log(majorityElement(test));

test = [2,2,1,1,1,2,2]
console.log(majorityElement(test));

test =  [1, 8, 8, 1, 8, 3, 8, 2,7,8,5,8];
console.log(majorityElement(test));
/*
3
2
8

[Done] exited with code=0 in 0.106 seconds
*/
