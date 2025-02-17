for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

const product = {
  title: "iPhone 13",
  ram: "4GB",
  memory: "128GB",
};

for (let key in product) {
  console.log(product[key]);
}

const nums = [5, 3, 1, 4, 2];

for (let num of nums) {
  console.log(num);
}

for (let [index, value] of nums.entries()) {
  console.log(index, value);
}

const name = "Arjun";

for (let c of name) {
  console.log(c);
}
