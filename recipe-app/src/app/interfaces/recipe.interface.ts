import { Step } from "./step.interface";

export interface Recipe {
    name: string;
    description: string;
    time: number;
    people: number;
    difficulty: number;
    steps: Step[];
  }