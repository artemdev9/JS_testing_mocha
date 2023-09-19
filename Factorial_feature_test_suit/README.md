# Test-Driven Development (TDD) Example with Mocha

This JavaScript module demonstrates Test-Driven Development (TDD) principles using the Mocha testing framework. It includes a Calculate object with a factorial method to calculate the factorial of a number while incorporating thorough testing.

## Motivation

Test-Driven Development (TDD) is a software development approach that emphasizes writing tests before writing the actual code. This ensures that code is thoroughly tested from the outset, leading to more robust and reliable software.

## Usage

Installation:

Clone this repository or download the code to your project directory.

-Initialize npm (if not done):

If your project is not already set up with npm, you can initialize it with:

- npm init -y

Install Dependencies:

Install the necessary testing libraries, including Mocha and Chai, as development dependencies:

- npm install mocha chai --save-dev

Running Tests:

Run the tests using the following command:

- npm test

This will execute the tests defined in the test directory using the Mocha testing framework.

## Key Components

Calculate Object
The Calculate object contains a factorial method that calculates the factorial of a number.
It includes error handling to ensure that the input is a valid number.

## Test Suite with Mocha

The code includes a test suite defined using Mocha, a popular JavaScript testing framework.
Each test case in the suite thoroughly tests the Calculate.factorial method, including different scenarios such as positive numbers, negative numbers, zero, and non-numeric inputs.
The Chai assertion library is used for more expressive and readable assertions.

## Test-Driven Development (TDD)

This project follows the TDD approach, where tests are written before the actual code implementation. The cycle typically involves:

1. Write a Test: Create a test case that defines the expected behavior of the code.

2. Run the Test: Run the test to ensure it fails initially (since the code is not implemented yet).

3. Write Code: Write the minimum amount of code necessary to make the test pass.

4. Run Tests: Re-run all tests to ensure the new code did not break existing functionality.

5. Refactor (if needed): Refactor the code while ensuring that tests still pass.

6. Repeat: Repeat the process for each new feature or behavior.

By following this cycle, you can iteratively develop and test your code, resulting in a more robust and reliable software system.
