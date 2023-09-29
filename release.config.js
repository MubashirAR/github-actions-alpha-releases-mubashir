console.log('branch', process.env.GITHUB_REF_NAME)

const branch = process.env.GITHUB_REF_NAME;
const prerelease = branch !== 'master';
const prereleaseChangelog = prerelease && 'CHANGELOG.alpha.md';

module.exports = {
  branches: [{name: '*eg-*', prerelease: true}, 'master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog'],
    ['@semantic-release/npm', { npmPublish: true }],
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]', branch: 'master' }],
    ['@semantic-release/github', { branch: 'master' }]
  ].filter(p => p),
};