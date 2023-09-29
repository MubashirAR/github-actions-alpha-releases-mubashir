console.log('branch', process.env.GITHUB_REF_NAME)

const branch = process.env.GITHUB_REF_NAME;
const prerelease = branch !== 'master';
const prereleaseChangelog = prerelease && 'CHANGELOG.alpha.md';

const config = {
  branches: [{name: '[a-z0-9_-]*', prerelease: true}, 'master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', { changelogFile: prereleaseChangelog}],
    ['@semantic-release/npm', { npmPublish: true }],
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]', assets: prereleaseChangelog && [prereleaseChangelog] }],
  ],
};

if(!prerelease) {
  config.plugins.push(['@semantic-release/github', { branch: 'master' }])
}

module.exports = config;