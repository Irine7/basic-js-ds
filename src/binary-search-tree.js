const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}
class BinarySearchTree {

	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(data) {
		const node = new Node(data);

		if (this.rootNode === null) {
			this.rootNode = node;
			return;
		}

		let currNode = this.rootNode;

		while (currNode !== null) {

			if (data > currNode.data) {
				if (currNode.right === null) {
					currNode.right = node;
					return;
				}
				currNode = currNode.right;

			} else if (data < currNode.data) {
				if (currNode.left === null) {
					currNode.left = node;
					return;
				}
				currNode = currNode.left;

			} else {
				return;
			}
		}
	}

	has(data) {

		let currNode = this.rootNode;

		while (currNode !== null) {
			if (data === currNode.data) {
				return true;
			} else if (data > currNode.data) {
				currNode = currNode.right;
			} else {
				currNode = currNode.left;
			}
		}
		return false;
	}

	find(data) {
		let currNode = this.rootNode;

		while (currNode !== null) {

			if (data === currNode.data) {
				return currNode;

			} else if (data > currNode.data) {
				currNode = currNode.right;

			} else {
				currNode = currNode.left;
			}
		}
		return null;
	}

	remove(data) {

		let currNode = this.rootNode;
		let parentNode = null;

		while (currNode !== null) {

			if (data === currNode.data) {

				if (currNode.left === null && currNode.right === null) {

					if (parentNode === null) {
						this.rootNode = null;

					} else if (currNode === parentNode.right) {
						parentNode.right = null;

					} else {
						parentNode.left = null;
					}

				} else if (currNode.left === null) {

					if (parentNode === null) {
						this.rootNode = currNode.right;

					} else if (currNode === parentNode.left) {
						parentNode.left = currNode.right;

					} else {
						parentNode.right = currNode.right;
					}
					
				} else if (currNode.right === null) {

					if (parentNode === null) {
						this.rootNode = currNode.left;

					} else if (currNode === parentNode.left) {
						parentNode.left = currNode.left;

					} else {
						parentNode.right = currNode.left;
					}

				} else {
					let minNode = currNode.right;
					let minParentNode = currNode;

					while (minNode.left !== null) {
						minParentNode = minNode;
						minNode = minNode.left;
					}

					currNode.data = minNode.data;

					if (minNode === currNode.right) {
						currNode.right = minNode.right;

					} else {
						minParentNode.left = minNode.right;
					}
				}
				return;

			} else if (data > currNode.data) {

				parentNode = currNode;
				currNode = currNode.right;

			} else {
				parentNode = currNode;
				currNode = currNode.left;
			}
		}
	}


	min() {

		if (!this.rootNode) {
			return null;
		}

		let node = this.rootNode;

		while (node.left) {
			node = node.left;
		}

		return node.data;
	}

	max() {

		if (!this.rootNode) {
			return null;
		}

		let node = this.rootNode;

		while (node.right) {
			node = node.right;
		}
		return node.data;
	}

}

module.exports = {
	BinarySearchTree
};