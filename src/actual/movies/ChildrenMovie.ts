import { MovieInterface } from "./MovieInterface";

export class ChildrenMovie implements MovieInterface {
  private title: string;

  public constructor(title: string) {
    this.title = title;
  }

  public computeRentalPrice(rentalDaysAmount: number) {
    if (rentalDaysAmount > 3) {
      return (rentalDaysAmount - 3) * 1.5 + 1.5;
    }
    return 1.5;
  }

  public computeRenterPoints() {
    return 1;
  }

  public getTitle(): string {
    return this.title;
  }
}
