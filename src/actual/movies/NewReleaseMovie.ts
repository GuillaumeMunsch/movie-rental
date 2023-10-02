import { MovieInterface } from "./MovieInterface";

export class NewReleaseMovie implements MovieInterface {
  private title: string;

  public constructor(title: string) {
    this.title = title;
  }

  public computeRentalPrice(rentalDaysAmount: number) {
    return rentalDaysAmount * 3;
  }

  public computeRenterPoints(rentalDaysAmount: number) {
    if (rentalDaysAmount > 1) {
      return 2;
    }
    return 1;
  }

  public getTitle(): string {
    return this.title;
  }
}
