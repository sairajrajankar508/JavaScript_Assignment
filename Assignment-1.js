let sureshMass = 40;     
let sureshHeight = 1.55; 
let rameshMass = 60;   
let rameshHeight = 1.30; 

let sureshBMI = sureshMass / (sureshHeight ** 2);
let rameshBMI = rameshMass / (rameshHeight ** 2);

let markHigherBMI = sureshBMI > rameshBMI;

console.log("Suresh BMI", sureshBMI);
console.log("Ramesh BMI", rameshBMI);
console.log(markHigherBMI);

