class CustomList {
  constructor() {
    this.size = 0;
    this.capacity = 1;
    this.array = this.allocate(this.capacity);
  }

  allocate(size) {
    return new Array(size);
  }

  resize() {
    this.capacity *= 2;
    const newArray = this.allocate(this.capacity);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
  }

  add(value) {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.array[this.size] = value;
    this.size++;
  }

  pushToTail(data) {
    this.add(data);
  }

  removeLast() {
    if (this.size === 0) {
      throw new Error("List is empty");
    }
    this.array[this.size - 1] = undefined;
    this.size--;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.array[this.size - 1] = undefined;
    this.size--;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    return this.array[index];
  }
}

const myList = new CustomList();
myList.add(10);
myList.pushToTail(20);
myList.add(30);
console.log(myList.get(1));
myList.removeLast();
console.log(myList.get(1));
myList.remove(0);
console.log(myList.get(0));
