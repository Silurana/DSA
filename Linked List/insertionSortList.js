// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var insertionSortList = function(head) {
    if (!head || !head.next) return head;

    const dummy = new ListNode(0);
    let prev = dummy; 
    let curr = head;

    while (curr !== null) {
        const nextNode = curr.next;

        if (prev.val >= curr.val) {
            prev = dummy;
        }

        while (prev.next !== null && prev.next.val < curr.val) {
            prev = prev.next;
        }

        curr.next = prev.next;
        prev.next = curr;

        curr = nextNode;
    }

    return dummy.next;
};

// --- LOCAL TESTING UTILITIES ---

// Helper function to build a linked list from a JavaScript array
function buildList(arr) {
    if (arr.length === 0) return null;
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper function to print the linked list cleanly
function printList(head) {
    let curr = head;
    let result = [];
    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
}

// Execution Block
const inputArr = [4, 2, 1, 3];
const head = buildList(inputArr);

console.log("Original List:");
printList(head);

const sortedHead = insertionSortList(head);

console.log("Sorted List:");
printList(sortedHead);
