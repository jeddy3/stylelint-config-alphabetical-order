# Contributing

## Releasing

1. Add the version's changes to `CHANGELOG.md` and commit.
2. Bump the version, which also commits and tags it:

   ```bash
   npm version patch # or minor, or major
   ```

3. Push the commit and the tag:

   ```bash
   git push --follow-tags origin main
   ```

4. Approve the staged package:

   ```bash
   npm stage list stylelint-config-alphabetical-order
   npm stage approve <stage-id>
   ```

5. Create a GitHub release.
