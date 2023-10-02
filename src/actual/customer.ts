import { Rental } from "./rental";

export class Customer {
  private name: string;
  private rentals: Rental[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public addRental(arg: Rental) {
    this.rentals.push(arg);
  }

  public getName(): string {
    return this.name;
  }

  public statement(): string {
    let totalMoneyOwed: number = 0;
    let frequentRenterPoints: number = 0;
    let result = "Rental Record for " + this.getName() + "\n";

    for (const rental of this.rentals) {
      totalMoneyOwed += rental.computeOwedMoney();
      frequentRenterPoints += rental.computeRenterPoints();
      result += rental.generateRentalRecord();
    }

    // add footer lines
    result += "Amount owed is " + totalMoneyOwed.toFixed(1) + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points";

    return result;
  }
}
