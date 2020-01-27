# Sous Project

This is a Drupal Project Created initially with the [Sous Project](https://github.com/fourkitchens/sous-drupal-project).

Its theme is based on the [Emulsify Design System](https://github.com/emulsify-ds/emulsify-design-system).

The theme is using upstream "Core" components and styles that can be shared across multiple projects, as well as custom "Project" specific components only used by this project.


## Install

- Clone this repo
- `lando start` (Start up Lando)
- `yarn import-data` (Import the provided database)
- `cd web/themes/custom/line_chef` (Move to the theme directory)
- `yarn` (Install the theme dependencies)
- `yarn develop` (Compile the theme and start the Storybook instance)
- Create three pages filling out all fields
- View the homepage and you should see two views. One showing cards using the "Core" styles only. And one using a mix of core/project styles. (specifically, the blue button)

## Additional Tooling

This package provides some additional tooling to support the build.

### Helper scripts

To use the helper script provided you will need to have `yarn` or `npm` installed. Then just run `yarn <command>` or `npm run <command>`.

For example: `yarn import-data`.

These commands are bash scripts located in the `./scripts/sous` directory and defined in `package.json`.

#### Configuration management scripts

**confex**

```
yarn confex
```

Export active configuration to the config directory.

**confim**

```
yarn confim
```

Import the configuration to the database.

**import-data**

```
yarn import-data
```

Import a copy of the canonical database backup into your local instance. This assumes the database backup is located in `./reference/db.sql.gz`.

**local-data-bak**

```
yarn local-data-back
```

Create a local database backup. Saves the backup to the `./reference` directory.

**rebuild**

```
yarn rebuild
```

Rebuild a fresh local instance of your site. Imports the canonical database backup and imports configuration into it.
