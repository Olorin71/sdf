# SoCraTes Day Franken

## Prepare

After checkout run `npm ci` to get all dependencies without generating a new [package-lock json](./package-lock.json).

##Development

### Commits
We use [conventional commit format](https://conventionalcommits.org/) for commit messages.

When you want to commit changes:

- Format your commit message to meet the conventional commit format.
- use git cz after staging your changes to run commitizen.
- use npm run cz to stage all changes and run commitizen.

Commit messages that not meet the conventions will be rejected.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

### Development

Run `npm run build` to build the project in development mode. The build artifacts will be stored in the `dist/` directory.

### Production

Run `npm run build:prod` to build the project in production mode. The build artifacts will be stored in the `dist/` directory.

### Release

After all changes are merged into `master` run:
- npm run release
- push with tags (git push --tags origin master)

The ci will create the image container push to registry and connect the docker server to update the socrates-day-franken service.

## Pages

All `.md`-files referenced in the [pages json](./src/pages/pages.json) with `"isDefault": false` will be available in the menu and displayed as a page.
The `.md`-file with `"isDefault": true` will available via link on the title and be displayed as default page.

## Sponsors

All images referenced in the [spons_current json](./src/spons/spons_current.json) will be shown in the sponsors area with links to each sponsor's website.
