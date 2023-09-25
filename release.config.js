const branch = process.env.CI_COMMIT_BRANCH;

module.exports = {
  branches: [{ name: "alpha", prerelease: true }, "master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",

    ...(config.branches.some(
      (it) => it === branch || (it.name === branch && !it.prerelease)
    ) && [
      "@semantic-release/changelog",
      [
        "@semantic-release/git",
        { message: "chore(release): ${nextRelease.version} [skip ci]" },
      ],
    ]),
    ["@semantic-release/npm", { npmPublish: true }],
    ["@semantic-release/github", { branch: "master" }],
  ],
};
