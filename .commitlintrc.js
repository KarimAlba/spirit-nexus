'use strict';

module.exports = {
  extends: [
    '@commitlint/config-conventional', // scoped packages are not prefixed
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'merge', // - when a commit resolves merge conflicts
        'build', // - these are the files that include the build files and dependencies
        'chore', // - when a commit doesn't fix a bug or introduce new functionality, but modifies or updates dependencies
        'ci', // - when a commit contains changes to the CI integration in files or scripts
        'docs', // - when a commit changes the documentation, readme.md or markdown files.
        'feat', // - when a commit adds a new feature to your application or library
        'fix', // - when a commit represents a bug fix for your application
        'perf', // - when a commit improves performance
        'proposal', // - when a commit contains a suggestion for improvement (similar to perf)
        'refactor', // - when a commit contains a refactoring that includes code refactorings or changes
        'revert', // - when a commit says about a rollback to a previous commit
        'style', // - when a commit makes changes to the design of the code
        'test', // - when a commit modifies the test file
        'wip', // - work in progress (be careful, WIP commit should not be in the main working branches)
      ],
    ],
  },
};
