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
      this.root = new Node(value);
      return this.root;
    }
    function helper(value) {
      if (value <= this.value) {
        if (this.left === null) {
          this.left = new Node(value);
          return this.left;
        } else {
          return helper.call(this.left, value);
        }
      } else {
        if (this.right === null) {
          this.right = new Node(value);
          return this.right;
        } else {
          // return this.insert(this.right);
          return helper.call(this.right, value);
        }
      }
    }
    helper.call(this.root, value);
  }

  contains(value) {
    function helper(node, value) {
      if (node) {
        if (node.value === value) {
          return true;
        }
        if (value <= node.value) {
          return helper(node.left, value);
        } else {
          return helper(node.right, value);
        }
      }
      return false;
    }
    return helper(this.root, value);
  }

  static min(node = null) {
    var prev = null;
    var curr = node;
    while (curr !== null) {
      prev = curr;
      curr = curr.left;
    }
    return prev;
  }

  static max(node) {
    var prev = null;
    var curr = node;
    while (curr !== null) {
      prev = curr;
      curr = curr.right;
    }
    return prev;
  }

  remove(value) {
    function helper(node, value) {
      if (node.value === value) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left == null) {
          node = node.right;
          return node;
        } else if (node.right == null) {
          node = node.left;
          return node;
        } else {
          let succ = BinarySearchTree.min(node.right);
          const temp = succ.value;
          succ.value = node.value;
          node.value = temp;
          node.right = helper(node.right, value);
          return node;
        }
      } else if (value <= node.value && node.left) {
        node.left = helper(node.left, value);
      } else if (value > node.value && node.right) {
        node.right = helper(node.right, value);
      }
    }
    helper(this.root, value);
  }

  // left, root, right
  inOrderTraversal(node, func = console.log) {
    node.left && this.inOrderTraversal(node.left, func);
    func(node);
    node.right && this.inOrderTraversal(node.right, func);
  }

  // root, left, right
  preOrderTraversal(node, func = console.log) {
    func(node);
    node.left && this.preOrderTraversal(node.left, func);
    node.right && this.preOrderTraversal(node.right, func);
  }

  // left, right, root
  postOrderTraversal(node, func = console.log) {
    node.left && this.postOrderTraversal(node.left, func);
    node.right && this.postOrderTraversal(node.right, func);
    func(node);
  }
}

export { BinarySearchTree, Node };
