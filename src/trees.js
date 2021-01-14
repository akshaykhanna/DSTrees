class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  insertChild(value) {
    this.children.push(new Tree(value));
  }

  // Uses a Depth-First Traversal
  static traverse(tree, func = console.log) {
    var output = [];
    function helper(tree, func) {
      if (tree) {
        output.push(tree.value);
        func(tree);
        tree.children.forEach((childTree) => {
          helper(childTree, func);
        });
      }
    }
    helper(tree, func);
    // console.log('output: ', output);
  }

  // Uses a BFS
  static traverseBFS(tree, func = console.log) {
    const output = [];
    var queue = [tree];
    while (queue.length > 0) {
      const currentTree = queue.shift();
      if (currentTree) {
        func(currentTree.value);
        output.push(currentTree.value)
        queue.push(...currentTree.children);
      }
    }
    console.log('output: ',output)
  }

  contains(searchValue) {
    var c = 0;
    Tree.traverse(this, (tree) => (c = tree.value === searchValue ? c + 1 : c));
    return c > 0;
  }

  static size(tree) {
    var c = 0;
    Tree.traverse(tree, () => c++);
    return c;
  }

  // static find(tree, value) {
  //   var searchedTree = false;
  //   function helperDFS(tree, value) {
  //     if (tree && !searchedTree) {
  //       if (tree.value === value) {
  //         searchedTree = tree;
  //       }
  //       tree.children.forEach((childTree) => {
  //         helperDFS(childTree, value);
  //       });
  //     }
  //   }
  //   helperDFS(tree, value);
  //   return searchedTree;
  // }


  static find(tree, value) {
    let result = false;
    Tree.traverse(tree, (leaf) => {
      if (leaf.value === value) {
        result = leaf;
      }
    });
    return result;
  }

  static findStack(tree, value) {
    var stack = [tree];
    while (stack.length) {
      const currTree = stack.shift();
      if (currTree) {
        if (currTree.value === value) return currTree;
        else {
          stack.push(...currTree.children);
        }
      }
    }
    return false;
  }

  insert(parentTree, value) {
    parentTree.insertChild(value);
  }

  // remove(value) {
  //   if (this.value == value) {
  //     return;
  //   }
  //   function helper(myTree, value) {
  //     const index = myTree.children.findIndex((p) => p.value === value);
  //     if (index >= 0) {
  //       myTree.children.splice(index, 1);
  //       return;
  //     } else {
  //       myTree.children.forEach((childTree) => helper(childTree, value));
  //     }
  //   }
  //   helper(this, value);
  // }

  remove(value) {
    if (this.value === value) delete this;
    else {
      this.children.forEach((childTree, index) => {
        if (childTree.value === value) {
          this.children.splice(index, 1);
        } else {
          childTree.remove(value);
        }
      });
    }
  }

  removeStack(value) {
    var stack = [this];
    while (stack.length > 0) {
      const myTree = stack.shift();
      const index = myTree.children.findIndex((p) => p.value === value);
      if (index >= 0) {
        myTree.children.splice(index, 1);
        return;
      } else {
        stack.push(...myTree.children);
      }
    }
  }

  reorder(node1, node2) {
    const leaf1 = Tree.find(this, node1);
    const leaf2 = Tree.find(this, node2);

    leaf1.value = node2;
    leaf2.value = node1;
  }
}

export default Tree;
