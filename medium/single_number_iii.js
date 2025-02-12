/*
    Name: 
    Difficulty: 
    Topics: 
        Array
        Bit Manipulation
    Challenge:
        Given an integer array nums, in which exactly two elements appear only once 
            and all the other elements appear exactly twice. 
        Find the two elements that appear only once.
        You can return the answer in any order.

        You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.
    Example 1:
        Input: nums = [1,2,1,3,2,5]
        Output: [3,5]
        Explanation:  [5, 3] is also a valid answer.
    
    Example 2:
        Input: nums = [-1,0]
        Output: [-1,0]
        Example 3:

        Input: nums = [0,1]
        Output: [1,0]
 

    Constraints:
        2 <= nums.length <= 3 * 104
        -231 <= nums[i] <= 231 - 1
        Each integer in nums will appear twice, only two integers will appear once.

    Follow-up: 

    Date Completed: 



    const isEven = (int) => (unsignedInt & 1) === 0;
    const isOdd = (int) =>  (unsignedInt & 1) !== 0;
*/

// try it brute force to start
function singleNumberIII(nums) {
    let tracking = new Array(462)
    for (let i = 0; i < nums.length; i++) {
        const index = 231 + nums[i];
        const curr = tracking[index]
        if (curr === undefined) {
            tracking[index] = 1
        } else {
            tracking[index] = curr + 1
        }
    }
    
    let initialValue = []
    return tracking.reduce( (accumulator, currentValue, currentIndex) => {
                if (currentValue === 1) {
                    accumulator.push(currentIndex-231)
                }
                return accumulator
            },
            initialValue 
        )
}

test = [1,2,1,3,2,5]    // [3, 5] or [5, 3]
console.log(singleNumberIII(test));

test = [-1,0]           // [-1, 0] or [0, -1]
console.log(singleNumberIII(test));

test = [0, 1]           // [1, 0] or [1, 0]
console.log(singleNumberIII(test));

/*
[ 3, 5 ]
[ -1, 0 ]
[ 0, 1 ]

[Done] exited with code=0 in 0.08 seconds
*/



