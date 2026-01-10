# Getting Started

## Using the Template

1. Click the `Use this template` button in the top right corner of the page.

![alt text](../asset/useThisTemplate.png)

1. Enter the project name and click the `Create repository from template` button.

![alt text](../asset/create.png)

## Installing Dependencies

```npm
npm install
```

## Template Structure

```bash
├── assets
├── background
│   ├── dev-hmr.js  // Hot Module Replacement script for development
│   └── main.js  // Background script
├── logic
│   └── common-setup.js  // Common setup script
├── manifest.js // Script to generate manifest.json
├── options // Options page
│   ├── OptionsPage.vue
│   ├── index.html
│   └── main.js
├── popup // Popup
│   ├── PopupComponent.vue
│   ├── index.html
│   └── main.js
├── sidepanel // Side panel
│   ├── SidePanel.vue
│   ├── assets
│   │   └── logo.png
│   ├── index.html
│   └── main.js
└── utils
    ├── base.js // Basic utility functions
    └── config.js // Configuration file functions
```

## How to Develop?

### Start Hot Module Replacement (HMR)

```npm
npm run dev:ext
```

### Install the Extension

1. Open Chrome browser.
2. Click the browser menu (usually three vertical dots), select "More Tools" > "Extensions".
3. On the Extensions page, turn on "Developer mode".
4. Click "Load unpacked", and select the `extension` folder in the project root directory.

## How to Build?

### Build for Production

```npm
npm run build
```

### Build as CRX3 File

```npm
npm run build:crx
```

After execution, the following files will be generated in the `release` directory of the project:

- `extension.crx`: Chrome extension installation file
- `extension.zip`: Extension package file (can be used to upload to Chrome Web Store)

At the same time, the following file is generated in the project root directory:

- `key.pem`: Private key file (used for subsequent extension updates)

### Notes

- The `key.pem` file is automatically generated when the `build:crx` command is executed for the first time.
- Please keep the `key.pem` file safe, as the same key is required for subsequent extension updates.
- Do not commit the `key.pem` file to the version control system.
