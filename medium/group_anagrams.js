/*
    Name: Group Anagrams
    Difficulty: Medium
    Topics: 

    Challenge: 
    Given an array of strings strs, group the anagrams
    together. You can return the answer in any order.

 

    Example 1:
        Input: strs = ["eat","tea","tan","ate","nat","bat"]
        Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Explanation:
        There is no string in strs that can be rearranged to form "bat".
        The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
        The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

    Example 2:
        Input: strs = [""]
        Output: [[""]]

    Example 3:
        Input: strs = ["a"]
        Output: [["a"]]

    Constraints:
        1 <= strs.length <= 104
        0 <= strs[i].length <= 100
        strs[i] consists of lowercase English letters.


     Date Completed: 2025.02.11
*/

// using associative array as hash table
function groupAnagrams(strs) {
    let result = {}
    for (let i = 0; i < strs.length; i++) {
        const value = strs[i]
        const sorted = value.split('').sort().join('')
        if (sorted in result) {
            result[sorted].push(value)
        } else {
            result[sorted] = [value]
        }
    }
    return Object.values(result)
}

strs = ["eat","tea","tan","ate","nat","bat"]    // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs))

strs = [""]                                     // [['']]
console.log(groupAnagrams(strs))

strs = ["a"]                                    // [['a']]
console.log(groupAnagrams(strs))

/*
[Running] node "c:\Users\tillm\Autosync\code\javascript\leetcode-js\medium\tempCodeRunnerFile.js"
[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
[ [ '' ] ]
[ [ 'a' ] ]

[Done] exited with code=0 in 0.097 seconds
*/