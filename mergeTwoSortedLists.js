
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


function mergeTwoLists(l1, l2) {
    let t1 = l1
    let t2 = l2
    while(t1 || t2){
        let n1 = t1?t1.val:0
        let n2 = t2?t2.val:0

    }
};

function printList(l){
    let t = l
    let str = ''
    while(t){
        str+=t.val+' '
        t = t.next
    }
    console.log(str);
}

let l1 = new ListNode(1, new ListNode(2, new ListNode(3)))
let l2 = new ListNode(1, new ListNode(2, new ListNode(3)))

mergeTwoLists(l1 ,l2)
printList(l1)