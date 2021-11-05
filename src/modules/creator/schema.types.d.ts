export interface JSONSchemaFurDieDSAHeldenErstellung {
  steps: {
    title: string;
    description: string;
    sections?: Array<{
      title?: string;
      description?: string;
      fields?: Array<{
        id: string;
        label: string;
        type: 'text' | 'number' | 'select';
        data?: string[];
      }>;
    }>;
  }[];
}
