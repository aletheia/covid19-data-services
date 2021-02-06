module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__test__/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
