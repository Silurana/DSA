class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
function inorderTrav(root) {
    let res = []
    inOrder(root, res)
    return res
}

function inOrder(root, res) {
    if(root === null) return 

    inOrder(root.left, res)
    res.push(root.val)
    inOrder(root.right, res)
}

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.right = new TreeNode(3)

root.left.left = new TreeNode(2)
root.right.right = new TreeNode(3)

root.right.right = new TreeNode(6)

const res = inorderTrav(root)
console.log("Inorder Traversal:", res);
