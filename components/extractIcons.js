/**
 * Icon Extraction Script
 * 
 * This script analyzes the monolithic icons.tsx file and extracts each icon
 * into its own file in the components/icons directory.
 */

const fs = require('fs');
const path = require('path');

// Paths
const iconsPath = path.join(__dirname, 'icons.tsx');
const iconsDirPath = path.join(__dirname, 'icons');

// Ensure the icons directory exists
if (!fs.existsSync(iconsDirPath)) {
  fs.mkdirSync(iconsDirPath);
}

// Read the icons.tsx file
const iconsFile = fs.readFileSync(iconsPath, 'utf8');

// Extract individual icon components
// This regex looks for export const IconName = ... pattern
const iconRegex = /export\s+const\s+([A-Za-z0-9_]+)\s*=\s*\(?[^=]*?=>\s*\(?(\s*<svg[\s\S]*?<\/svg>\s*)\)?;?/g;

let match;
const iconNames = [];

// Process each match
while ((match = iconRegex.exec(iconsFile)) !== null) {
  const iconName = match[1];
  const svgContent = match[2].trim();
  
  // Create individual icon file
  const iconContent = `import React from 'react';

export const ${iconName} = () => (
  ${svgContent}
);
`;

  // Write to file, converting camelCase to kebab-case for filename
  const fileName = iconName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  fs.writeFileSync(path.join(iconsDirPath, `${fileName}.tsx`), iconContent);
  
  iconNames.push({ name: iconName, fileName });
  console.log(`Extracted ${iconName} to ${fileName}.tsx`);
}

// Create index.tsx to export all icons
const importStatements = iconNames.map(({ name, fileName }) => 
  `import { ${name} } from './${fileName}';`
).join('\n');

const exportObject = `
export const Icons = {
  ${iconNames.map(({ name }) => {
    // Convert IconName to iconName (PascalCase to camelCase)
    const propName = name.charAt(0).toLowerCase() + name.slice(1);
    return `${propName}: ${name}`;
  }).join(',\n  ')}
};
`;

const indexContent = `// Icon index file - exports all icons
${importStatements}

${exportObject}`;

fs.writeFileSync(path.join(iconsDirPath, 'index.tsx'), indexContent);
console.log('Created index.tsx with all icon exports');

// Create a backup of the original icons.tsx file
fs.copyFileSync(iconsPath, path.join(__dirname, 'icons.tsx.backup'));
console.log('Created backup of original icons.tsx file');

// Replace original icons.tsx with a file that re-exports from the icons directory
const redirectContent = `// This file re-exports icons from components/icons for backward compatibility
// For better performance, import specific icons directly from components/icons

import { Icons } from './icons';

export default Icons;

// Individual exports for backward compatibility
${iconNames.map(({ name }) => `export const ${name} = Icons.${name.charAt(0).toLowerCase() + name.slice(1)};`).join('\n')}
`;

fs.writeFileSync(iconsPath, redirectContent);
console.log('Updated icons.tsx to re-export icons from components/icons directory');

console.log('\nIcon extraction complete!');
console.log(`Extracted ${iconNames.length} icons to components/icons/`);
console.log('\nTo improve performance, update your imports to use:');
console.log('import { Icons } from "@/components/icons";');
console.log('// or for specific icons:');
console.log('import { IconName } from "@/components/icons/icon-name";');