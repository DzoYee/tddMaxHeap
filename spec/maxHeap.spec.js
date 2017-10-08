var MaxHeap = require('../src/maxHeap.js');

describe("maxHeap", function() {
  it("is a function", function() {
    expect(typeof MaxHeap).toBe('function');
  });  
});

describe("maxHeap Methods", function() {
  var maxHeap;

  beforeEach(function() {
    maxHeap = new MaxHeap();
  });

  afterEach(function() {
    maxHeap = new MaxHeap();
  });

  describe("#insert", function() {
    it("whenSuccessfull_returnsTrue", function() {
      var returnedValue = maxHeap.insert(3);
      expect(returnedValue).toBe(3);
    });
  });

  describe("#delete", function() {
    it("whenSuccessfull_returnsTrue", function() {
      var returnedValue = maxHeap.delete();
      expect(returnedValue).toBe(true);
    });
    it("maintainsMaxValueAfterDelete", function() {
      maxHeap.insert(1);
      maxHeap.insert(4);
      maxHeap.insert(2);
      maxHeap.insert(5);
      maxHeap.insert(7);
      maxHeap.insert(8);
      maxHeap.delete();
      var returnedValue = maxHeap.findMax();
      expect(returnedValue).toBe(7);
    });
  });

  describe("replace", function() {

  });

  describe("#findMax", function() {
    it("givesValueIfOnlyOneHasBeenAdd", function() {
      maxHeap.insert(1);
      var returnedValue = maxHeap.findMax();
      expect(returnedValue).toBe(1);
    });
    it("shouldReturnLargestInsertedValue", function() {
      maxHeap.insert(1);
      maxHeap.insert(4);
      maxHeap.insert(2);
      maxHeap.insert(5);
      maxHeap.insert(7);
      maxHeap.insert(8);
      var returnedValue = maxHeap.findMax();
      expect(returnedValue).toBe(8);
    });
  });
});