// i want to invest in a coin
// if i invest in a coin now i will get in return of x2.65 for each coin of investment

const coinPrice: number = 4.5;
let coinInvestmentValue: number;
let numberOfMonthsofInvestment: number;
let returnOfTheInvesment: number;

function calculatorInvestment(CI: number, M: number): number {
  let numberofcoins = CI / coinPrice;

  returnOfTheInvesment = numberofcoins * 2.265 * M;

  return returnOfTheInvesment;
}

function printResults(result: number): void {
  console.info(`RETURN OF THE INVESTMENT: ${result}`);
}

console.log(`Coin Price of the moment: ${coinPrice}`);
coinInvestmentValue = 20;
numberOfMonthsofInvestment = 10;

const inve = calculatorInvestment(
  coinInvestmentValue,
  numberOfMonthsofInvestment
);

printResults(inve);
