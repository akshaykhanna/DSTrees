class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertChild(value) {
    var binaryTreeNode = new BinaryTree(value);
    var queue = [this];

    while (queue.length > 0) {
      const currentTree = queue.shift();
      if (currentTree.left === null) {
        return (currentTree.left = binaryTreeNode);
      } else if (currentTree.right === null) {
        return (currentTree.right = binaryTreeNode);
      } else {
        queue.push(currentTree.left);
        queue.push(currentTree.right);
      }
    }
  }

  // left, root, right
  inOrderTraversal(func = console.log) {
    this.left && this.left.inOrderTraversal(func);
    func(this)
    this.right && this.right.inOrderTraversal(func);
  }

  // root, left, right
  preOrderTraversal(func = console.log) {
    func(this);
    this.left && this.left.preOrderTraversal(func);
    this.right && this.right.preOrderTraversal(func);
  }

  // left, right, root
  postOrderTraversal(func = console.log) {
    this.left && this.left.postOrderTraversal(func);
    this.right && this.right.postOrderTraversal(func);
    func(this);
  }
}

export default BinaryTree;
