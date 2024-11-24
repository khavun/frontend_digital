import * as path from 'path';
import * as fs from 'fs';

// Get the module name from the command-line arguments
const moduleName = process.argv[2];
if (!moduleName) {
  console.error('Please provide a module name: npm run create-module <moduleName>');
  process.exit(1);
}

// Define the base path for modules
const modulesBasePath = path.join(__dirname, 'src', 'modules');
const modulePath = path.join(modulesBasePath, moduleName);

// Define the structure of the module
const directories = [
  'components',
  'translates',
  'router',
  'services',
  'store',
  'types',
  'views',
];

const files = [
  { path: 'components/Component.tsx', content: `import React from 'react';

const Component = () => {
  return <div>Hello from ${moduleName} component!</div>;
};

export default Component;
` },
  { path: 'translates/eng.json', content: `{
  "welcome": "Welcome to the ${moduleName} module!"
}` },
  { path: 'translates/khr.json', content: `{
  "welcome": "ស្វាគមន៍ទៅកាន់ម៉ូឌុល ${moduleName}!"
}` },
];

// Create the module directory and subdirectories
fs.mkdirSync(modulePath, { recursive: true });
directories.forEach((dir) => {
  const dirPath = path.join(modulePath, dir);
  fs.mkdirSync(dirPath, { recursive: true });
});

// Create files with content
files.forEach((file) => {
  const filePath = path.join(modulePath, file.path);
  fs.writeFileSync(filePath, file.content);
});

console.log(`Module '${moduleName}' created successfully at ${modulePath}`);
