function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumber(l1, l2) {
    let newNode = new ListNode()
    let tNode = newNode

    let carry = 0
    while (l1 || l2 || carry) {

        let v1 = l1 ? l1.val : 0
        let v2 = l2 ? l2.val : 0

        let temp = v1 + v2 + carry
        carry = (temp - 10 >= 0) ? 1 : 0
        temp = temp % 10

        tNode.next = new ListNode(temp)
        tNode = tNode.next

        if (l1)
            l1 = l1.next
        if (l2)
            l2 = l2.next
    
    }
    return newNode.next
}

function printList(node) {
    let str = ''
    while (node) {
        str += String(node.val) + (node.next ? '->' : '')
        node = node.next
    }
    console.log(str);
}


let l1 = new ListNode(1, new ListNode(8, new ListNode(3)))
let l2 = new ListNode(1, new ListNode(2))

const node = addTwoNumber(l1, l2)

printList(node)