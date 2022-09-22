/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

interface NumberWithCount {
  theNumber: number;
  numberCount: number;
}

export default function doCodeClash() {
  const numberWithCountArray: NumberWithCount[] = [];

  const n: number = parseInt('9');
  var inputs: string[] = '3 4 -1 5 4 5 4 4 5'.split(' ');
  for (let i = 0; i < n; i++) {
    const a: number = parseInt(inputs[i]);
    const x = numberWithCountArray.find((x) => x.theNumber === a);
    if (x) {
      x.numberCount++;
    } else {
      numberWithCountArray.push({
        numberCount: 1,
        theNumber: a,
      });
    }
  }

  const x = numberWithCountArray
    .map((x) => x.numberCount)
    .sort((a, b) => (a > b ? a : b));

  console.error(x);
  const secondHigh = x[1];
  console.error(secondHigh);

  const result = numberWithCountArray.find((x) => x.numberCount == secondHigh);

  // Write an answer using console.log()
  // To debug: console.error('Debug messages...');

  if (result) {
    console.log(result.theNumber);
  }
}
