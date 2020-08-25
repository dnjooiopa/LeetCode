function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumber(l1, l2) {
    let newNode = new ListNode()
    let t1 = l1
    let t2 = l2
    let tNode = newNode

    let n = 1
    let commute = 0
    while (true) {

        let v1 = t1 ? t1.val : 0
        let v2 = t2 ? t2.val : 0

        let temp = v1 + v2 + commute
        commute = (temp - 10 >= 0) ? 1 : 0
        temp = temp % 10

        tNode.next = new ListNode(temp)
        tNode = tNode.next

        if (t1)
            t1 = t1.next
        if (t2)
            t2 = t2.next

        if (!(t1 || t2)) {
            if (commute)
                tNode.next = new ListNode(commute)
            break
        }
    
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