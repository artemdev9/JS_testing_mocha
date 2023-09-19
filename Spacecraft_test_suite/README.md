# Spacecraft Control System

This JavaScript module simulates a Spacecraft Control System. It includes functions for checking the status of various systems and determining the time of takeoff.

## Usage

You can use this module in your Node.js applications to check the status of spacecraft systems and calculate the time of takeoff.

## Installation

1. Clone the repository or download the code to your project directory.
2. Install the required dependencies using npm:
- npm install

## Testing with Mocha

The code includes Mocha tests to ensure the correctness of the spacecraft control functions. You can run the tests using the following command:
- npm test

The tests are defined in the test directory within the index_test.js file. They cover scenarios for checking the status of systems and calculating the time of takeoff. Mocha, along with the assert and expect libraries, is used for testing.

## Available Functions

- Spacecraft.checkSystems()
  Returns true if all spacecraft systems are working.
  Returns false if at least one system is offline.
- Spacecraft.timeOfTakeoff(hour)
  Returns the hour as a string.
  Throws a RangeError if the input hour is not between 0 and 23 (inclusive).
