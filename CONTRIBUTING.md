# Contributing

Thanks for helping with places.

## Setup

Follow the setup and run steps in [README.md](README.md). Use Bun, not npm, yarn, or pnpm.

## Before you open a pull request

```sh
bunx tsc --noEmit
bun run lint
bun run test
```

Git hooks (installed by `bun install`) run lint-staged on commit and tsc and tests on push. Fix the cause of a failing hook rather than skipping it with `--no-verify`.

## Commits and pull requests

- Use [Conventional Commits](https://www.conventionalcommits.org/), for example `fix(map): keep marker when list is empty`.
- Keep each commit to one logical change.
- Use the pull request template in `.github/PULL_REQUEST_TEMPLATE.md`.
- For bugs and features, open an issue first using the templates in `.github/ISSUE_TEMPLATE/`.

## Licensing of contributions

places is licensed under the GNU Affero General Public License v3.0 (see [LICENSE](LICENSE)).
By submitting a contribution, you agree that it is licensed under the same terms. No Contributor
License Agreement is required.
