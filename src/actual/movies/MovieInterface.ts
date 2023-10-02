import { ChildrenMovie } from "./ChildrenMovie";
import { NewReleaseMovie } from "./NewReleaseMovie";
import { RegularMovie } from "./RegularMovie";

type MovieType = "REGULAR" | "NEW_RELEASE" | "CHILDREN";

export interface MovieInterface {
  computeRentalPrice: (rentalDaysAmount: number) => number;
  computeRenterPoints: (rentalDaysAmount?: number) => number;
  getTitle: () => string;
}

const MovieTypeMap = {
  REGULAR: RegularMovie,
  NEW_RELEASE: NewReleaseMovie,
  CHILDREN: ChildrenMovie,
};

export class LegacyMovie {
  private movie: MovieInterface;
  public constructor(title: string, movieType: MovieType) {
    this.movie = new MovieTypeMap[movieType](title);
  }

  public getMovie(): MovieInterface {
    return this.movie;
  }
}
