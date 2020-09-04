module.exports = {
	"root": true,
	"parser": "@typescript-eslint/parser", // Specifies the ESLint parser
	"plugins": [
		"@typescript-eslint"
	],
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		'plugin:react/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"plugins": ['@typescript-eslint', 'react'],
	"parserOptions": {
		"ecmaVersion": 9,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"impliedStrict": true
		}
	},
	"rules": {
		/* General */
		"comma-dangle": ["warn", "always-multiline"],
		"no-duplicate-imports": "warn",
		"linebreak-style": ["error", "unix"],
		"no-cond-assign": ["error", "always"],
		"no-console": "off",
		"semi": ["warn", "always", {
			"omitLastInOneLineBlock": true
		}],
		"indent": ["warn", "tab", {
			"SwitchCase": 1,
			"flatTernaryExpressions": true
		}],
		"quotes": ["warn", "single", {
			"avoidEscape": true,
			"allowTemplateLiterals": true
		}],
		"max-len": ["warn", {
			"code": 110,
			"comments": 75,
			"ignorePattern": "^\\s*//",
			"ignoreComments": true,
			"ignoreTrailingComments": false,
			"ignoreStrings": false
		}],
		"no-warning-comments": ["off", {
			"terms": [
				"todo",
				"fixme",
				"bug",
				"xxx"
			],
			"location": "start"
		}],
		/* Typescript */
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/class-name-casing": "off",
		"@typescript-eslint/explicit-function-return-type": ["error", {
			"allowExpressions": true
		}],
		"@typescript-eslint/no-unused-vars": ["warn", {
			"argsIgnorePattern": "^_"
		}],
		/* React */
		"react/prop-types": "off", // Use TypeScript for type checking
	}
}

