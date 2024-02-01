/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let countMax = 0;
  let theYear = 0;
  data.asteroids
    .map(asteroid => asteroid.discoveryYear)
    .reduce((one, trackYear, three, array) => {
      let sameYear = array.filter(year => year == trackYear);
      let count = sameYear.length;
      if (count > countMax) {
        countMax = count;
        theYear = trackYear;
      }
    },0
  );
  return theYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
