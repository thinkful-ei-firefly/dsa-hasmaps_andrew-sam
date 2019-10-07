class HashMap2 {
  constructor(initialCapacity=8) {
      this.length = 0;
      this._hashTable = [];
      this._capacity = initialCapacity;
      this._deleted = 0;
      this.MAX_LOAD_RATIO = 0.5;
      this.SIZE_RATIO = 3;
      for (let i=0; i< initialCapacity; i++) {
        this._hashTable[i] = new LinkedList
      }
  }

  //value: [key, data, deleted]
  //next:

  get(key) {
      const index = this._findSlot(key);
      let list = this._hashTable[index]
      let tempNode = list.head
      while (tempNode !== null) {
        if (tempNode.value.key === key) {
          return tempNode.value.data
        }
        tempNode = tempNode.next
      }
      return null
      // if (this._hashTable[index] === undefined) {
      //     throw new Error('Key error');
      // }
      // return this._hashTable[index].value;
  }

  set(key, value){
    const index = this._findSlot(key);
    let list = this._hashTable[index]
    let tempNode = list.head
      while (tempNode !== null) {
        if (tempNode.value.key === key) {
          tempNode.value.data = value
          tempNode.value.deleted = false
        }
        tempNode = tempNode.next
      }
      list.insertLast({key: key, data: value, deleted: false})
      // const loadRatio = (this.length + this._deleted + 1) / this._capacity;
      // if (loadRatio > this.MAX_LOAD_RATIO) {
      //     this._resize(this._capacity * this.SIZE_RATIO);
      // }
      // const index = this._findSlot(key);

      // if(!this._hashTable[index]){
      //     this.length++;
      // }
      // this._hashTable[index] = {
      //     key,
      //     value,
      //     DELETED: false
      // }; 
  }

  delete(key) {
      const index = this._findSlot(key);
      let list = this._hashTable[index]
      let tempNode = list.head
      while (tempNode !== null) {
        if (tempNode.value[0] === key) {
          tempNode.value.deleted = true
        }
        tempNode = tempNode.next
      }
      // const slot = this._hashTable[index];
      // if (slot === undefined) {
      //     throw new Error('Key error');
      // }
      // slot.DELETED = true;
      // this.length--;
      // this._deleted++;
  }

  _findSlot(key) {
      const hash = HashMap2._hashString(key);
      const start = hash % this._capacity;
      return start
      // if (slot === undefined || slot.key === key && (!slot.DELETED)) {
      //   return index;
      // } else if (typeof slot === 'object') {
      //   let listIndex = this.linkedLists[index]
      //   return index[listIndex]
      // }
      // for (let i=start; i<start + this._capacity; i++) {
      //     const index = i % this._capacity;
      //     const slot = this._hashTable[index];
      //     if (slot === undefined || (slot.key === key && !slot.DELETED)) {
      //         return index;
      //     }
      // }
  // }

  // _resize(size) {
  //     const oldSlots = this._hashTable;
  //     this._capacity = size;
  //     this.length = 0;
  //     this._deleted = 0;
  //     this._hashTable = [];

  //     for (const slot of oldSlots) {
  //         if (slot !== undefined && !slot.DELETED) {
  //             this.set(slot.key, slot.value);
  //         }
  //     }
  }

  static _hashString(string) {
      let hash = 5381;
      for (let i = 0; i < string.length; i++) {
          hash = (hash << 5) + hash + string.charCodeAt(i);
          hash = hash & hash;
      }
      return hash >>> 0;
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(item) {
    this.head=new _Node(item, this.head);
  }
  insertLast(item) {
      if (this.head === null) {
          this.insertFirst(item);
          return;
      }
      let tempNode = this.head;
      while (tempNode.next !== null) {
          tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
  }
  insertBefore(item, before) {
      //Special Case if inserting before the head
      if(before === this.head.value) {
          const beforeNode = new _Node(item, this.head);
          this.head = beforeNode;
          return;
      }
      //start at the head of LL
      let currNode = this.head;

      //If the LL is empty, return null
      if(!this.head) {
          return null;
      }

      //loop through nodes in LL
      while(currNode.value !== before) {
          //check if at the end of the list, if so return null
          if(currNode.next === null) {
              return null;
          }
          else if(currNode.next.value === before) {
              //insert new item
              const beforeNode = new _Node(item, currNode.next);
              currNode.next = beforeNode;
              return;
          }
          else {
              //otherwise update to next node
              currNode = currNode.next;
          }
      }
      return null;
  }
  insertAfter(item, after) {
      const currNode = this.find(after);
      const afterNode = new _Node(item, currNode.next);
      currNode.next = afterNode;
      return;

  }
  insertAt(item, index, counter = 0, currNode = this.head) {
      // if at head
      if(index === 0) {
          const newNode = new _Node(item, this.head);
          this.head = newNode;
          return;
      }
      if(counter === index - 1) {
          currNode.next = new _Node(item, currNode.next);
          return;
      }
      else {
          this.insertAt(item, index, counter + 1, currNode.next);
      }
  }
  remove(item) {
      if (!this.head) {
          return null;
      }
      if (this.head.value === item) {
          this.head = this.head.next;
          return;
      }
      let tempNode = this.head;
      while ((tempNode.next !== null) && (tempNode.next.value !== item)) {
          tempNode = tempNode.next;
      }
      if (tempNode.next === null) {
          console.log(`${item} not found`);
          return;
      }
    
      tempNode.next = tempNode.next.next;
      return;
  }
  find(item) {
      //start at the head of LL
      let currNode = this.head;

      //If the LL is empty, return null
      if(!this.head) {
          return null;
      }

      //loop through nodes in LL
      while(currNode.value !== item) {
          //check if at the end of the list, if so return null
          if(currNode.next === null) {
              return null;
          }
          else {
              //otherwise update to next node
              currNode = currNode.next;
          }
      }

      return currNode;
  }
  log() {
      let tempNode=this.head;
      while (tempNode !== null) {
          console.log(tempNode.value);
          tempNode=tempNode.next;
      }
  }
}

class _Node {
  constructor(value, next=null) {
    this.next = next;
    this.value = value;
  }
}

module.exports = {HashMap2}