import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Get module name from command-line arguments
const moduleName = process.argv[2];
if (!moduleName) {
  console.error('Please provide a module name.');
  process.exit(1);
}

// Construct the base directory for the new module
const baseDir = path.join(__dirname, '..', 'src', 'modules', moduleName);

// Define the paths for files
const files = {
  page: path.join(baseDir, `${moduleName}.page.tsx`),
  view: path.join(baseDir, `${moduleName}.view.tsx`),
  slice: path.join(baseDir, `${moduleName}Slice.ts`),
  service: path.join(baseDir, `${moduleName}.service.ts`),
  utils: path.join(baseDir, `${moduleName}.utils.ts`),
};

// Create directories recursively
fs.mkdirSync(baseDir, { recursive: true });
fs.mkdirSync(path.join(baseDir, 'components'), { recursive: true });

// Write files with predefined content
fs.writeFileSync(
  files.page,
  `import React from 'react';

import ${moduleName}View from './${moduleName}.view';

const ${moduleName}Page = () => {
  return <${moduleName}View />;
};

export default ${moduleName}Page;`
);

fs.writeFileSync(
  files.view,
  `import React from 'react';

const ${moduleName}View = () => {
  return <div>${moduleName} View</div>;
};

export default ${moduleName}View;`
);

fs.writeFileSync(
  files.slice,
  `import { createSlice } from '@reduxjs/toolkit';

const ${moduleName}Slice = createSlice({
  name: '${moduleName}',
  initialState: {},
  reducers: {},
});

export const {} = ${moduleName}Slice.actions;
export default ${moduleName}Slice.reducer;`
);

fs.writeFileSync(
  files.service,
  `import axios from 'axios';
import {} from '../../service/apiClient';
import {} from '../../service/serviceEndPoints';

`
);

fs.writeFileSync(
  files.utils,
  `// Add utils methods`
);

console.log(`${moduleName} module created successfully.`);
