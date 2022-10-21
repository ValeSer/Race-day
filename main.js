/*
Math.random() returns a value between 0 (inclusive) and 1 (exclusive).

In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.

Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().
*/
let raceNumber = Math.floor(Math.random() * 1000);