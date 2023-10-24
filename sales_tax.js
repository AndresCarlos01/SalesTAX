"use strict";

// starting function
const $ = (selector) => document.querySelector(selector);

// Event handler function named processEntries()
function processEntries() {
  const subtotalInput = $("#subtotal");
  const taxRateInput = $("#tax_rate");
  const salesTaxInput = $("#sales_tax");
  const totalInput = $("#total");

  const subtotal = parseFloat(subtotalInput.value);
  const taxRate = parseFloat(taxRateInput.value);

  // Data validation
  if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    return;
  }
  if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    return;
  }

  // Calculate sales tax and total

  const salesTax = (subtotal * taxRate) / 100;
  const total = subtotal + salesTax;

  // Display result
  salesTaxInput.value = salesTax.toFixed(2);
  totalInput.value = total.toFixed(2);
}

// DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = $("#calculate");
  const clearButton = $("#clear");
  const subtotalInput = $("#subtotal");
  const taxRateInput = $("#tax_rate");

  // Moving the cursor to the Subtotal field
  subtotalInput.focus();

  calculateButton.addEventListener("click", function () {
    processEntries();
    //Moving the cursor to the Subtotal field when the Calculate button is clicked
    subtotalInput.focus();
  });

  // Event handler for the Clear button
  clearButton.addEventListener("click", function () {
    subtotalInput.value = "";
    taxRateInput.value = "";
    const salesTaxInput = $("#sales_tax");
    const totalInput = $("#total");
    salesTaxInput.value = "";
    totalInput.value = "";
    subtotalInput.focus();
  });

  // Eventhandler for the Subtotal and Tax Rate text boxes
  subtotalInput.addEventListener("click", clearInput);
  taxRateInput.addEventListener("click", clearInput);
});

// Task Event handler for clearing text boxes
function clearInput(event) {
  event.target.value = "";
}
