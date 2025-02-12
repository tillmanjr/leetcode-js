/*
    Name: Counting Bits
    Difficulty: Easy
    Topics: 
        Dynamic Programming
        Bit Manipulation

    Challenge: 
        Given an integer n,
        return an array ans of length n + 1
        such that
            for each i (0 <= i <= n),
            ans[i] is the number of 1's in the binary representation of i.

        Example 1:
            Input: n = 2
            Output: [0,1,1]
            Explanation:
                0 --> 0
                1 --> 1
                2 --> 10
        Example 2:
            Input: n = 5
            Output: [0,1,1,2,1,2]
            Explanation:
                0 --> 0
                1 --> 1
                2 --> 10
                3 --> 11
                4 --> 100
                5 --> 101
            
    Constraints:
        0 <= n <= 105
 
    Follow up:
        It is very easy to come up with a solution with a runtime of O(n log n).
        Can you do it in linear time O(n) and possibly in a single pass?
        Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

    Date Completed: 2025.02.11

    Comments: solution works, but feels a bit clunky
*/

function countingBits(n) {
    let result = new Array(n+1)
    for (let i=0; i<= n; i++) {
        let accum = 0
        let shiftN = i
        while (shiftN>0) {
            accum += shiftN & 1
            shiftN >>= 1  // right shift assignment
        }
        result[i] = accum
    }
    return result
}

let test = 2
console.log(`${test}: `, countingBits(test))

test=5
console.log(`${test}: `, countingBits(test))

/*
2:  [ 0, 1, 1 ]
5:  [ 0, 1, 1, 2, 1, 2 ]

[Done] exited with code=0 in 0.077 seconds
*/


/*
0   0000    0
1   0001    1
1   0010    2
2   0011    3
1   0100    4
2   0101    5
2   0110    6
3   0111    7
1   1000    8
2   1001    9
2   1010    10
3   1011    11
2   1100    12
3   1101    13
3   1110    14
4   1111    15
*/