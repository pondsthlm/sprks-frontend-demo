module.exports = {
  "extends": ["react-app",],
  "plugins": [
    "prettier",
    "import"
  ],
  "rules": {
    "import/no-unresolved": 2,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
}