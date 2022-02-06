## Configuring the template

- [ ] Edit jest.config.json ['moduleNameMapper'] with your scoped package names

e.g. `"^@acme-corp/(.\*)$": "<rootDir>/packages/$1/"` -> `"^@my-corp/(.\*)$": "<rootDir>/packages/$1/"`

- [ ] Remove example packages from `./packages` folder by deleting them

## Creating a scoped package in the workspace

```bash
npm run add-package --scope={named-scope} --package_name={package-name}
```

## Installing node modules for the package in workspace

```bash
npm init --scope=@{named-scope} -y
```

## Adding a git submodule

In order to add a submodule change directory to `./package` and run:

```bash
git submodule add {url}
```

## Testing

### The workspace

Running the `npm test` command from projects root directory will run the tests for the all the packages in the workspace.

### The package in workspace

```bash
npm test -w {named-scope/package-name}
```

## References

https://blog.frankdejonge.nl/setting-up-a-typescript-mono-repo-for-scoped-packages/

https://www.twilio.com/blog/npm-scripts
