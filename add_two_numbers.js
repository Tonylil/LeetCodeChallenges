/**
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     console.log(l1)
    console.log(l2)
    
    var test = new ListNode(); 
    test.val(4);
    console.log("test", test)
    
    
    let i = 0;
    let result = l1;
    let carryOver = 0;
    console.log("len", l2.val, l2.next, l2.next)
    l2.data
    while (i < l2.length)
    {
        let num = result[i] + l2[i];
        if (num >= 10)
        {
            num -= 10;
            carryOver = 1;
        }
        console.log("num:", num, "carryOver:", carryOver);
        result[i] = num + carryOver;
        carryOver = 0;
    }
    
    return result;
};