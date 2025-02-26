export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.js" // 🛠️ Adicionado para mockar arquivos de imagem
  }
};
