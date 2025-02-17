const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

	constructor() {
		this.digit = [];
	}

	// Добавляем элемент на верхушку:
	push(element) {
		this.digit.push(element);
	}

	// Удаляем элемент с верхушки:
	pop() {
		return this.digit.pop()
	}

	// Просмотр последнего элемента без его удаления:
	peek() {
		return this.digit[this.digit.length - 1 ];
	}
}

module.exports = {
	Stack
};
