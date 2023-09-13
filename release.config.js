module.exports = {
  branches: [{name: 'alpha', prerelease: true}, 'master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: true }],
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]' }],
    ['@semantic-release/github', { branch: 'master' }],
  ],
};
