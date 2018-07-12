# SoCraTes Day Franken

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

### Development

Run `npm run build` to build the project in development mode. The build artifacts will be stored in the `dist/` directory.

### Production

Run `npm run build:prod` to build the project in production mode. The build artifacts will be stored in the `dist/` directory.

## Pages

All `.md`-files referenced in the [pages json](./src/pages/pages.json) with `"isDefault": false` will be available in the menu and displayed as a page.
The `.md`-file with `"isDefault": true` will available via link on the title and be displayed as default page.
