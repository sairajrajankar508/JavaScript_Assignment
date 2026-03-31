// 1. Employee Salary Processor

const employees = [
  { name: "Suresh", salary: 35000 },
  { name: "Naresh", salary: 50000 },
  { name: "Ramesh", salary: 75000 },
  { name: "Mahesh", salary: 65000 }
];

const processedEmployees = employees
  .filter(emp => emp.salary > 40000)
  .map(emp => {
    const newSalary = emp.salary * 1.10;

    return {
      ...emp,
      salary: newSalary,
      level: newSalary >= 70000 ? "Senior" : "Mid"
    };
  });

console.log(processedEmployees);


// 2. Order Management System

const orders = [
  {
    id: 1,
    items: [
      { name: "Shirt", price: 500, quantity: 2 },
      { name: "Pants", price: 1000, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { name: "Shoes", price: 2000, quantity: 1 },
      { name: "Socks", price: 200, quantity: 3 }
    ]
  }
];

const processedOrders = orders.map(order => {
  let totalAmount = 0;
  let totalQuantity = 0;

  order.items.forEach(item => {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  return {
    id: order.id,
    totalAmount,
    totalQuantity
  };
});

console.log(processedOrders);


// 3. Single Mini Web App(UI + JS)

<!DOCTYPE html>
<html>
<head>
  <title>Mini App</title>
  <style>
    body {
      font-family: Arial;
      padding: 20px;
    }
    button {
      margin: 10px 0;
      padding: 10px;
      cursor: pointer;
    }
    pre {
      background: #f4f4f4;
      padding: 10px;
    }
  </style>
</head>
<body>

<h1>Mini Web App</h1>

<button onclick="processEmployees()">Process Employees</button>
<pre id="employeeOutput"></pre>

<button onclick="processOrders()">Process Orders</button>
<pre id="orderOutput"></pre>

<script>
const employees = [
  { name: "Suresh", salary: 35000 },
  { name: "Naresh", salary: 50000 },
  { name: "Ramesh", salary: 75000 },
  { name: "Mahesh", salary: 65000 }
];

const orders = [
  {
    id: 1,
    items: [
      { name: "Shirt", price: 500, quantity: 2 },
      { name: "Jeans", price: 1000, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { name: "Shoes", price: 2000, quantity: 1 },
      { name: "Socks", price: 200, quantity: 3 }
    ]
  }
];

function processEmployees() {
  const result = employees
    .filter(emp => emp.salary > 40000)
    .map(emp => {
      const newSalary = emp.salary * 1.10;

      return {
        ...emp,
        salary: newSalary,
        level: newSalary >= 70000 ? "Senior" : "Mid"
      };
    });

  document.getElementById("employeeOutput").textContent =
    JSON.stringify(result, null, 2);
}

function processOrders() {
  const result = orders.map(order => {
    let totalAmount = 0;
    let totalQuantity = 0;

    order.items.forEach(item => {
      totalAmount += item.price * item.quantity;
      totalQuantity += item.quantity;
    });

    return {
      id: order.id,
      totalAmount,
      totalQuantity
    };
  });

  document.getElementById("orderOutput").textContent =
    JSON.stringify(result, null, 2);
}
</script>

</body>
</html>