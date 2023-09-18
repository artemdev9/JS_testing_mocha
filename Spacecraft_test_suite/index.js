// Define a Spacecraft
Spacecraft = {};

// Check all systems
Spacecraft.checkSystems = () => {
  var powerGenerationandStorageSystem = true;
  var communicationSystem = true;
  var propulsionSystem = true;
  var thermalControlSystem = true;
  var guidanceNavigationandControlSystem = true;

  if (
    powerGenerationandStorageSystem &&
    communicationSystem &&
    propulsionSystem &&
    thermalControlSystem &&
    guidanceNavigationandControlSystem
  ) {
    return true; // All systems are working
  } else {
    return false; // At least one system is offline
  }
};

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Spacecraft.timeOfTakeoff = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError();
  } else {
    return hour.toString();
  }
};

module.exports = Spacecraft;