class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root == null) {
      return (this.root = new Node(value));
    }
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new Node(value);
        return this.left;
      } else {
        return this.insert(this.left);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(value);
        return this.right;
      } else {
        return this.insert(this.right);
      }
    }
  }

  contains(value) {}

  min(node = null) {}

  max(node) {}

  remove(value) {}

  // left, root, right
  inOrderTraversal(node, func = console.log) {}

  // root, left, right
  preOrderTraversal(node, func = console.log) {}

  // left, right, root
  postOrderTraversal(node, func = console.log) {}
}

export { BinarySearchTree, Node };
