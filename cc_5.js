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
//Step 4: Write the function to calculate overtime pay
function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5; // Overtime is paid at 1.5 times the hourly rate 
}
//Step 5: Write the function to calculate gross pay that deducts 15% for taxes
function calculateTaxes(grossPay) {
  return grossPay * 0.15; // 15% tax deduction
}
//Step 6: Write the function to have the processPayroll function
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}
//Step 7: Loop through the array of employees and process payroll for each
for (const employee of employees) {
    const payroll = processPayroll(employee);
    console.log(payroll); //Will log the payroll details for each employee
}
// Want to have console.log for each of the functions to ensure that they are all correct so each one is tested
console.log("Base Pay:", calculateBasePay(20, 40)); // Should return 800
console.log("Overtime Pay:", calculateOvertimePay(20, 45)); // Should return 150
console.log("Taxes:", calculateTaxes(875)); // Should return 131.25 