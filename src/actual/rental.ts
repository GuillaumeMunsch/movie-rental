import { MovieInterface } from "./movies/MovieInterface";

export class Rental {
  private movie: MovieInterface;
  private daysRented: number;

  public constructor(movie: MovieInterface, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  public getDaysRented(): number {
    return this.daysRented;
  }

  public getMovie(): MovieInterface {
    return this.movie;
  }

  public computeOwedMoney(): number {
    return this.getMovie().computeRentalPrice(this.getDaysRented());
  }

  public computeRenterPoints(): number {
    return this.getMovie().computeRenterPoints(this.getDaysRented());
  }

  public generateRentalRecord(): string {
    return "\t" + this.getMovie().getTitle() + "\t" + this.computeOwedMoney().toFixed(1) + "\n";
  }
}
