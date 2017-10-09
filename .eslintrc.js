module.exports = {
  "extends": "google",
  "plugins": [
  	"react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
  	"ecmaFeatures": {
  		"jsx": true
  	}
  },
  "rules": {
  	"strict": 0,
  	"require-jsdoc": 0,
  	"react/jsx-uses-vars": ["error"],
  	"object-curly-spacing": ["error", "always"],
  	"no-unused-vars": ["error", { "varsIgnorePattern": "React" }]
  }
};