module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "standard",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    'jsx-a11y',
    "@typescript-eslint",
    "prettier",
    "eslint-plugin-import-helpers",
  ],
  rules: {
    camelcase: "off",
    "no-useless-constructor": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: true,
        endOfLine: "auto"
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          "/^@shared/",
          [
            "parent",
            "sibling",
            "index"
          ]
        ],
        alphabetize: {
          order: "asc",
          ignoreCase: true
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "_"
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts",
        ".tsx",
        ".d.ts",
        "json"
      ]
    },
    "import/resolver": {
      typescript: {}
    }
  }
}