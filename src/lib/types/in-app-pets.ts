
export type Pet = {
  id: number;
  name: string;
  species: string;
  breed?: string;
  age?: number;
  gender?: "male" | "female" | "unknown";
  color?: string;
  weightKg?: number;
};
