// 1. Student Report System

const students = [
  { name: "A", marks: [80, 70, 90] },
  { name: "B", marks: [50, 60, 40] },
  { name: "C", marks: [30, 20, 25] }
];

const result = students.map(student => {
  const total = student.marks.reduce((sum, m) => sum + m, 0);
  const avg = total / student.marks.length;

  let status;
  if (avg >= 75) status = "Distinction";
  else if (avg >= 50) status = "Pass";
  else status = "Fail";

  return {
    ...student,
    average: avg,
    result: status
  };
});

console.log(result);


// 2. Shopping Cart Analyzer

function cartAnalyzer(...items) {
  let totalAmount = 0;
  let totalQuantity = 0;

  items.forEach(item => {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  return {
    totalAmount,
    totalQuantity
  };
}

const output = cartAnalyzer(
  { name: "Shirt", price: 500, quantity: 2 },
  { name: "Shoes", price: 1000, quantity: 1 }
);

console.log(output);


// 3. User Profile Updater

function updateUser(user) {
  const updatedUser = {
    ...user,
    city: "Mumbai",
    profession: "Developer"
  };

  return updatedUser;
}

const user = {
  name: "Suresh",
  age: 20,
  city: "Vadodara"
};

const newUser = updateUser(user);

console.log("Original:", user);
console.log("Updated:", newUser);


// 4. Product Filter & Transform

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Phone", price: 20000 }
];

const resultProducts = products
  .filter(p => p.price > 1000)
  .map(p => ({
    ...p,
    discountedPrice: p.price * 0.9
  }));

console.log(resultProducts);


// 5. Dynamic Number Processor

function processNumbers(numbers) {
  let even = [];
  let odd = [];
  let evenSum = 0;
  let oddSum = 0;

  numbers.forEach(num => {
    if (num % 2 === 0) {
      even.push(num);
      evenSum += num;
    } else {
      odd.push(num);
      oddSum += num;
    }
  });

  return {
    even,
    odd,
    evenSum,
    oddSum
  };
}

const resultNums = processNumbers([1, 2, 3, 4, 5, 6]);

console.log(resultNums);


