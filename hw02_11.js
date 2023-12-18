class DynamicArray {
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

  search(value) {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === value) {
        return i;
      }
    }
    return -1;
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
}

const dynamicArr = new DynamicArray();
dynamicArr.add(10);
dynamicArr.add(20);
dynamicArr.add(30);
console.log("Индекс элемента 20:", dynamicArr.search(20));
dynamicArr.remove(1);
console.log("Индекс элемента 20 после удаления:", dynamicArr.search(20));

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const letterFreq = new Map();

for (const char of text) {
  const lowercaseChar = char.toLowerCase();
  if (/[a-zа-я]/i.test(lowercaseChar)) {
    if (letterFreq.has(lowercaseChar)) {
      letterFreq.set(lowercaseChar, letterFreq.get(lowercaseChar) + 1);
    } else {
      letterFreq.set(lowercaseChar, 1);
    }
  }
}

console.log("Частотный словарь букв:", letterFreq);
