console.log('env', process.env.GITHUB_REF_NAME, process.env.BRANCH)
console.log(process.env)
module.exports = {
  branches: [{name: 'alpha', prerelease: true}, 'master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.alpha.md'}],
    ['@semantic-release/npm', { npmPublish: true }],
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]', assets: ['CHANGELOG.alpha.md'] }],
    // ['@semantic-release/github', { branch: 'master' }],
  ],
};
