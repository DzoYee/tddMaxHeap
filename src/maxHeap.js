var MaxHeap = function() {
  this.heap = [];
};

var swap = function(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

MaxHeap.prototype.insert = function(val) {
  this.heap.push(val);

  var index = this.heap.length - 1;
  var parentIndex = Math.floor((index - 1)/2);

  while (val > this.heap[parentIndex]) {
    swap(this.heap, index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((index - 1)/2);
  }

  return val;
};

MaxHeap.prototype.delete = function() {
  this.heap[0] = this.heap[this.heap.length] - 1;

  while (val > this.heap[parentIndex]) {
    swap(this.heap, index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((index - 1)/2);
  }
};

MaxHeap.prototype.findMax = function() {
  return this.heap[0];
};

MaxHeap.prototype.replace = function() {
  
};



module.exports = MaxHeap;