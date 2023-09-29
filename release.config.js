console.log("branch", process.env.GITHUB_REF_NAME);

const branch = process.env.GITHUB_REF_NAME;
const prerelease = branch !== "master";
const prereleaseChangelog = prerelease && "CHANGELOG.alpha.md";

const config = {
  branches: [{ name: "*eg-*", prerelease: true }, "master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: prereleaseChangelog }],
    ["@semantic-release/npm", { npmPublish: true }],
    [
      "@semantic-release/git",
      {
        message: "chore(release): ${nextRelease.version} [skip ci]",
        branch: "master",
        assets: [prereleaseChangelog].filter((p) => p),
      },
    ],
  ],
};

if (!prerelease) {
  ["@semantic-release/github", { branch: "master" }];
}
module.exports = config;
