export type Field = {
  id: string;
  label: string;
  type: 'select' | 'number' | 'text';
  data?: Array<string>;
}

export type Section = {
  title?: string;
  description?: string;
  fields?: Array<Field>;
}

export type Step = {
  title: string;
  description: string;
  sections?: Array<Section>;
}
