import { DatasetColor } from "./color";

export interface Colors extends DatasetColor {
  data?: number[];
  label?: string;
}
