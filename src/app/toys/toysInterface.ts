export interface IToy {

}

export interface IToysFilterData {
  amount: number;
  purchaseYear: number;
  shape: Record<ToyShape, boolean>;
  color: Record<string, boolean>;
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

export type ToyColor = 'white' | 'yellow' | 'red' | 'blue' | 'green';

  // White = 'white',
  // Yellow = 'yellow',
  // Red = 'red',
  // Blue = 'blue',
  // Green = 'green'

export enum ToySize {
  Big = 'big',
  Medium = 'medium',
  Small = 'small'
}