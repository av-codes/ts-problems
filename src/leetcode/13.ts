function romanToInt(s: string): number {
  let res: number = 0;
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  s.split("")
    .reverse()
    .forEach((char) => {
      let val: number = parseInt(symbols[char]);
      if (res > 4 * val) {
        res -= val;
      } else {
        res += val;
      }
    });
  return res;
}

module.exports = romanToInt;
{
  let result: any[] = null;
  let expected: any[] = null;

  const setErr = (result, expected) => {
    return `Test Case Failed = > Expected: ${expected} but Received: ${result}`;
  };
  const assert = require("assert");

  const testcase = (input, expect) => {
    result = romanToInt.apply(null, input);
    //result = input;
    expected = expect;

    console.log("Output: ", result);
    console.log("Expected: ", expected);

    assert.ok(result, expected, new Error(setErr(result, expected)));
  };

  testcase(["MCMXCIV"], 1994);
}
