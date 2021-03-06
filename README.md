# Sous Website

This is a Drupal Site initially created with the [Sous Project](https://github.com/fourkitchens/sous-drupal-project).

Its theme is based on the [Emulsify Design System](https://github.com/emulsify-ds/emulsify-design-system).

The theme is using upstream "Core" [components](https://github.com/ModulesUnraveled/sous-components-twig) and [styles](https://github.com/ModulesUnraveled/sous-styles) that can be shared across multiple projects, as well as custom "Project" specific components only used by this project.

## Frontend Install

- Clone this repo
- `cd sous-website/web/themes/custom/line_chef` (Move into the theme directory)
- `yarn` (Install dependencies)
- `yarn develop` (Start the build system and open Storybook)

## Drupal Install

- Clone this repo
- `composer install` (Install dependencies)
- `lando start` (Start up Lando)
- `yarn import-data` (Import the provided database)
- `cd web/themes/custom/line_chef` (Move to the theme directory)
- `yarn` (Install the theme dependencies)
- `yarn build` (Compile the theme)
- [Login to Drupal](https://sous-project.lndo.site/user) (u:admin/p:admin) and create three pages filling out all fields. (Or [edit the existing pages](https://sous-project.lndo.site/admin/content) - you should just need to upload your own images.)
- [View the homepage](https://sous-project.lndo.site/) and you should see two views. One showing cards using the "Core" styles only. And one using a mix of core/project styles. (specifically, the blue button)

## Additional Tooling

This package provides some additional tooling to support the build.

### Helper scripts

To use the helper script provided you will need to have `yarn` or `npm` installed. Then just run `yarn <command>` or `npm run <command>`.

For example: `yarn import-data`.

These commands are bash scripts located in the `./scripts/sous` directory and defined in `package.json`.

#### Configuration management scripts

| Command          | Description                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `confex`         | **Export Config**<br> Export active configuration to the config directory.                                                                                               |
| `confim`         | **Import Config**<br> Import the configuration to the database.                                                                                                          |
| `import-data`    | **Import Data**<br> Import a copy of the canonical database backup into your local instance.<br> This assumes the database backup is located in `./reference/db.sql.gz`. |
| `local-data-bak` | **Export Local Database**<br> Create a local database backup. Saves the backup to the `./reference` directory.                                                           |
| `rebuild`        | **Rebuild the Site**<br> Rebuild a fresh local instance of your site.<br> Imports the canonical database backup and imports configuration into it.                       |
