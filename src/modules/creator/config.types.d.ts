export interface SwitchCase {
  switch?: string;
  cases?: {
    expression?: string;
    value?: (number | string | boolean);
  }[];
}

export type Field = {
  id: string;
  label: string;
  type: 'select' | 'number' | 'text';
  data?: Array<string>;
  minimum?: (number | SwitchCase);
  maximum?: (number | SwitchCase);
}

export type Section = {
  title?: string;
  description?: string;
  fields?: Array<Field>;
}

export type Step = {
  id: string;
  title: string;
  description: string;
  sections?: Array<Section>;
}
