export interface IToy {

}

export interface IToysFilterData {
  amount: number;
  purchaseYear: number;
  shape: Record<ToyShape, boolean>;
  color: Record<ToyColor, boolean>;
  size: Record<ToySize, boolean>
  onlyFavourites: boolean;
}

export enum ToyShape {
  Ball = 'ball',
  Figure = 'figure',
  Bell = 'bell',
  Cone = 'cone',
  Snowflake = 'snowflake'
}

export enum ToyColor {
  White = 'white',
  Yellow = 'yellow',
  Red = 'red',
  Blue = 'blue',
  Green = 'green'
}

export enum ToySize {
  Big = 'big',
  Medium = 'medium',
  Small = 'small'
}