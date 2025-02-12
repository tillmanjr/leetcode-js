/*
    Name: Longest Consecutive Sequence
    Difficulty: Medium
    Topics: 

    Challenge: 
        Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
        You must write an algorithm that runs in O(n) time.

        Example 1:
            Input: nums = [100,4,200,1,3,2]
            Output: 4
            Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
        Example 2:
            Input: nums = [0,3,7,2,5,8,4,6,0,1]
            Output: 9
 

    Constraints:
        0 <= nums.length <= 105
        -109 <= nums[i] <= 109

    Follow-up: 

    Date Completed: 2025.02.11
*/

// overly verbose
function longestConsecutive(nums) {
    // using associative array as hash table
    let result = {}
    let currMaxValue = []
    let currMaxLength = 0

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        // convention 'hash'+value.toString
        const hash = `hash_${value}`
        const hashPre = `hash_${value-1}`
        const hashPost = `hash_${value+1}`
        const pre = (hashPre in result) ? result[hashPre] : []
        const post = (hashPost in result) ? result[hashPost] : []

        const newValue = [...pre, value, ...post]
        result[hash] = newValue
        if (pre.length > 0) {
            result[hashPre] =  newValue
        }
        if (post.length > 0) {
            result[hashPost] =  newValue
        }
 
        if (newValue.length > currMaxLength) {
            currMaxLength = newValue.length
            currMaxValue = newValue
        }
        
    }
    
    const currMin = currMaxValue[0]
    const currMax = currMaxValue[currMaxValue.length - 1]

    const hashPre = `hash_${currMin - 1}`
    const hashPost = `hash_${currMax + 1}`

    let pre = (hashPre in result) ? result[hashPre] : []
    let post = (hashPost in result) ? result[hashPost] : []
    
    if (pre.length > 0) {
        const idx = pre.indexOf(currMin)
        pre = pre.slice(0, idx)
    }
    if (post.length > 0) {
        const idx = post.indexOf(currMax)
        pre = pre.slice(0, idx)
    }

    currMaxValue = [...pre, ...currMaxValue, ...post]
    currMaxLength = currMaxValue.length
    console.debug(currMaxValue)
    return currMaxLength
}

let  nums = [100,4,200,1,3,2]
console.log(longestConsecutive(nums))

nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums))

/* NOTE Debug output included

[ 1, 2, 3, 4 ]
4
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8
]
9

[Done] exited with code=0 in 0.078 seconds
*/


/* 
thinking about it
for each item
    if has index of item -1
        get value of index of item -1 as pre
    else if has index of item +1
        get value of index of item +1 as post
    else 
        add new index of value 
            index = item.value
            value = pre.append([value]).append(post)

100: [100]

100: [100], 4: [4]
100: [100], 4: [4], 200: [200]
100: [100], 4: [4], 200: [200], 1: [1]

100: [100], 4: [4], 200: [200], 1: [1], 2: [1,2]
100: [100], 4: [4], 200: [200], 1: [1], 2: [1]+[2] = [1,2], 3: [1,2]+[3]+[4] = [1,2,3,4]


then take longest and pre/post pend using lookup on it min and max values
*/