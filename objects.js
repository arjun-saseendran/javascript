const person = {
  name: "Javascrit",
  age: 29,
  father: "Brenden Eich",
};

console.log(person.name);
console.log(person["age"]);

person["first appeared"] = "4 December 1995";

console.log(person["first appeared"]);

let person1 = person; // Not copy extactly as you think it points to the reference
person1.status = true;
console.log(person);
console.log(person1);
person1 = Object.assign({}, person); // Exact copy
person1["main domain"] = "web";
console.log(person);
console.log(person1);
person1 = { ...person };
person1.stack = "mern";
console.log(person);
console.log(person1);
person1 = JSON.parse(JSON.stringify(person));
person1.stack1 = "mean";
console.log(person);
console.log(person1);

delete person1.stack1; // Delete data
console.log(person1);

// Declare object
const person2 = {
  name: "Arjun",
  age: 34,
  place: "Cherthala",
};

console.log(person2.name);
console.log(person2["name"]);

const product = {
  title: "iPhone 13",
  ram: "4GB",
  colors: ["green", "blue", "midnight"],
  price: {
    green: "₹40000",
    blue: "₹35000",
    midnight: "₹38000",
  },
};

console.log(product.colors[0]);
console.log(product.price.green);
