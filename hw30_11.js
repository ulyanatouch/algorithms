class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  preorder(node = this.root) {
    if (!node) return [];
    return [
      node.value,
      ...this.preorder(node.left),
      ...this.preorder(node.right),
    ];
  }

  postorder(node = this.root) {
    if (!node) return [];
    return [
      ...this.postorder(node.left),
      ...this.postorder(node.right),
      node.value,
    ];
  }

  inorder(node = this.root) {
    if (!node) return [];
    return [
      ...this.inorder(node.left),
      node.value,
      ...this.inorder(node.right),
    ];
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Preorder traversal:", tree.preorder());
console.log("Postorder traversal:", tree.postorder());
console.log("Inorder traversal:", tree.inorder());
