import { MovieInterface } from "./MovieInterface";

export class RegularMovie implements MovieInterface {
  private title: string;

  public constructor(title: string) {
    this.title = title;
  }

  public computeRentalPrice(rentalDaysAmount: number) {
    if (rentalDaysAmount > 2) {
      return (rentalDaysAmount - 2) * 1.5 + 2;
    }
    return 2;
  }

  public computeRenterPoints() {
    return 1;
  }

  public getTitle(): string {
    return this.title;
  }
}
