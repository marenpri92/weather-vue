module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/*.spec.js'
  ],
  setupFiles: ['<rootDir>tests/jest.setup.js']
}
