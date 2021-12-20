export interface IToy {

}

export interface IToysFilterData {
  amount: number;
  purchaseYear: number;
  shape: Record<string, boolean>;
  color: Record<string, boolean>;
  size: Record<string, boolean>
  onlyFavourites: boolean;
}

export type ToyShape = 'ball'| 'figure' | 'bell' | 'cone' | 'snowflake';
export type ToyColor = 'white' | 'yellow' | 'red' | 'blue' | 'green';
export type ToySize ='big'| 'medium'| 'small';
