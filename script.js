document.getElementById("loanForm").addEventListener("submit", function(e){

e.preventDefault();

let age = parseInt(document.getElementById("age").value);
let salary = parseInt(document.getElementById("salary").value);
let credit = parseInt(document.getElementById("credit").value);
let loanType = document.getElementById("loanType").value;
let amount = parseFloat(document.getElementById("amount").value);
let tenure = parseInt(document.getElementById("tenure").value);

let eligible = true;
let reason = "";
let interest = 0;

/* Loan Rules */

if(loanType === "Personal Loan"){
interest = 11;
if(age < 21 || age > 60){
eligible = false;
reason = "Age must be between 21 and 60";
}
if(salary < 25000){
eligible = false;
reason = "Minimum salary for Personal Loan is ₹25,000";
}
}

if(loanType === "Home Loan"){
interest = 8;
if(salary < 40000){
eligible = false;
reason = "Minimum salary for Home Loan is ₹40,000";
}
}

if(loanType === "Car Loan"){
interest = 9;
if(salary < 30000){
eligible = false;
reason = "Minimum salary for Car Loan is ₹30,000";
}
}

if(loanType === "Education Loan"){
interest = 7;
}

if(loanType === "Business Loan"){
interest = 12;
if(salary < 50000){
eligible = false;
reason = "Minimum salary for Business Loan is ₹50,000";
}
}

if(credit < 600){
eligible = false;
reason = "Credit score must be above 600";
}

/* EMI Calculation */

let r = interest / 12 / 100;
let n = tenure * 12;

let emi = Math.round(
(amount * r * Math.pow(1+r,n)) /
(Math.pow(1+r,n)-1)
);

/* Save data for result page */

localStorage.setItem("eligible", eligible);
localStorage.setItem("reason", reason);
localStorage.setItem("loanType", loanType);
localStorage.setItem("amount", amount);
localStorage.setItem("interest", interest);
localStorage.setItem("emi", emi);

window.location.href = "result.html";

});
