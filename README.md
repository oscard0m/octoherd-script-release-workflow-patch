# octoherd-script-release-workflow-patch

> Adds an extra step in release.yml GitHub workflow to patch an issue with npm 9 and Pike

[![@latest](https://img.shields.io/npm/v/octoherd-script-release-workflow-patch.svg)](https://www.npmjs.com/package/octoherd-script-release-workflow-patch)
[![Build Status](https://github.com/oscard0m/octoherd-script-release-workflow-patch/workflows/Test/badge.svg)](https://github.com/oscard0m/octoherd-script-release-workflow-patch/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-release-workflow-patch@latest \
        --scriptPath ./dev/my-scripts/my-awesome-script.js
```

Pass all options as CLI flags to avoid user prompts

```js
npx octoherd-script-release-workflow-patch@latest \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "oscard0m/*" \
        --scriptPath ./dev/my-scripts/my-awesome-script.js
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--script-path`              | string           | **Required.** Path to the script file you want to integrate in your release workflow                                                                                                                                                        |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
