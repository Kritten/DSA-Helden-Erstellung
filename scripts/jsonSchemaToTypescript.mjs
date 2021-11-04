import { compileFromFile } from 'json-schema-to-typescript';
import { writeFileSync } from 'fs';

compileFromFile('./public/configs/schema.json').then((ts) => writeFileSync('src/modules/creator/schema.types.d.ts', ts));
