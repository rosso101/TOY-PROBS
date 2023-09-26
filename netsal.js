
const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
const benefits = parseFloat(prompt("Enter Benefits:"));

const result = calculateNetSalary(basicSalary, benefits);


for (const key in result) {
  console.log(`${key}: ${result[key]}`);
}
//KRA tax rates
function TaxRates() {
  const taxRates = {
    "0 to 288,000": 10.0,
    "288,001 - 388,000": 25.0,
    "388,001 - 6,000,000": 30.0,
    "	6,000,001 - 9,600,000": 32.5,
    "9,600,000+": 35.0,
  }};
  return taxRates


// funtion to return net salary
function calculateNetSalary(basicSalary, benefits) {
  //getting tax rates
  const taxRates = getTaxRates();

  const nhifRate = 0.09; // Example NHIF rate (9%)
  const nssfRate = 0.6;  //Example NHIF rate (60%)

  //calculating gross salary
  const grossSalary = basicSalary + benefits;

  //calculating PAYE 
  let paye = 0;
  for (const range in taxRates) {
    const [minIncome, maxIncome] = range.split("-").map(Number);
    if (grossSalary <= maxIncome) {
      paye = (grossSalary - minIncome) * taxRates[range];
      break;
    } else {
      paye = (maxIncome - minIncome) * taxRates[range];
    }
  }

    // calculate NHIF Deductions
    const nhifDeduction = grossSalary * nhifRate;

    // calculate NSSF Deductions
    const nssfDeduction = grossSalary * nssfRate;
  
    // calculate Net Salary
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);
      
  return {
      "Gross Salary": grossSalary.toFixed(2),
      "PAYE (Tax)": paye.toFixed(2),
      "NHIF Deductions": nhifDeduction.toFixed(2),
      "NSSF Deductions": nssfDeduction.toFixed(2),
      "Net Salary": netSalary.toFixed(2),
    };
  }

  // inputing the Basic Salary and Benefits
const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
const benefits = parseFloat(prompt("Enter Benefits:"));

const result = calculateNetSalary(basicSalary, benefits);

// showing the result
for (const key in result) {
  console.log(`${key}: ${result[key]}`);
}
