function display() {
  console.log("hello from first function");
}

const displayOne = function () {
  console.log("hello from second function");
};

const displayTwo = () => {
  console.log("hello from third function");
};

display();
displayOne();
displayTwo();
