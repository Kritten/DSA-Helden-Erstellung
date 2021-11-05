export type Field = {
  id: string;
  type: 'select' | 'number' | 'text';
  data?: Array<string>;
}

export type Step = {
  title: string;
  description: string;
  fields?: Array<Field>;
}
