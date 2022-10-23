/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.

Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
*/
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnersAge = 18;

// Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true
if ( runnersAge >= 18 && registeredEarly) {
    raceNumber += 1000;
  }

if ( runnersAge > 18 && registeredEarly) {
console.log(`The number ${raceNumber} will race at 9:30 am.`);
} else if (runnersAge > 18 && !registeredEarly) {
console.log(`The number ${raceNumber} will race at 11 am.`);
} else if ( runnersAge === 18 ) {
console.log(`Please see the registration desk`);
} else {
console.log(`The number ${raceNumber} will race at 12:30 pm.`);
}