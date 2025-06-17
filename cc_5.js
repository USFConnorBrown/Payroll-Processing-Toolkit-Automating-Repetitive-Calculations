//Step 2: Create an array of 3-5 employee objects
const employees = [
  { name: "John", hourlyRate: 20, hoursWorked: 40 },
  { name: "Jane", hourlyRate: 25, hoursWorked: 35 },
  { name: "Alice", hourlyRate: 30, hoursWorked: 45 },
  { name: "Bob", hourlyRate: 22, hoursWorked: 30 },
  { name: "Charlie", hourlyRate: 28, hoursWorked: 50 }
];
// Step 3: Write a function 
function calculateBasePay(rate, hours) {
const regularHours = Math.min(hours, 40); // Regular hours are capped at 40
return rate * regularHours
}
//Step 4: Write the fucntion to calculate overtime pay
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5; // Overtime is paid at 1.5 times the hourly rate 
}