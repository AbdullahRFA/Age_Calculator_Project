/**
 * The function calculates a person's age based on the inputted date and displays it in years, months, and days.
 */
const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Limit input to today's date
const result=document.getElementById("Result");
function calculateAge() {
  let birthday = new Date(userInput.value);

  // Extract birthday year, month, and day
  let y1 = birthday.getFullYear();
  let m1 = birthday.getMonth() + 1;
  let d1 = birthday.getDate();

  // Get current year, month, and day
  let today = new Date();
  let y2 = today.getFullYear();
  let m2 = today.getMonth() + 1;
  let d2 = today.getDate();

  // Calculate age
  let ageYears = y2 - y1;
  let ageMonths = m2 - m1;
  let ageDays = d2 - d1;

  // Adjust if birthday month hasn't occurred this year yet or if day hasn’t occurred this month
  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(y2, m2 - 1, 0).getDate(); // Get days in previous month
  }

  console.log(`Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`);
  result.innerHTML=`Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`;
}