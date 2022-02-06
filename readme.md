## Creating a scoped package in the workspace

```bash
npm run add-package --scope={named=scope} --package_name={package_name}
```

## Installing node modules for the package in workspace

```bash
npm init --scope=@{named-scope} -y
```

## Adding a git submodule

In order to add a submodule change directory to packages a

## Notes on scoped packages

must have setting "composite": true.

how to benchmark between the versions?

## References

https://blog.frankdejonge.nl/setting-up-a-typescript-mono-repo-for-scoped-packages/
https://www.twilio.com/blog/npm-scripts
