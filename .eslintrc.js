module.exports = {
    extends: "airbnb",
    plugins: ["jest", "react-hooks"],
    env: {
        jest: true,
        browser: true,
    },
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "jsx-quotes": "off",
        quotes: "off",
        camelcase: "off",
        "arrow-body-style": "off",
        "react/jsx-tag-spacing": "off",
        "spaced-comment": "off",
        "import/first": "off",
        "no-underscore-dangle": "off",
        "no-continue": "off",
        "react/no-did-mount-set-state": "off",
        "react-hooks/rules-of-hooks": "error",
        "react/no-did-update-set-state": "off",
        "react/no-find-dom-node": "off",
        "react/sort-comp": "off",
        "no-trailing-spaces": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "max-len": "off",
        "function-paren-newline": "off",
        "import/no-dynamic-require": "off",
        "consistent-return": "off",
        "react/jsx-props-no-spreading": "off",
        "react/forbid-prop-types": "off",
        "no-use-before-define": ["error", { variables: false, functions: false, classes: false }],
        "no-mixed-operators": "off",
        "no-param-reassign": "off",
        "jsx-a11y/alt-text": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": "off",
        "import/no-mutable-exports": "off",
        "prefer-destructuring": "off",
        "no-prototype-builtins": "off",
        "no-shadow": "off",
        "react/require-default-props": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "sort-imports": "off",
        "jsx-a11y/html-has-lang": "off",
        "react/button-has-type": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "object-curly-newline": "off",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "react/jsx-no-bind": ["error", {
            ignoreDOMComponents: true,
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowFunctions: false,
            allowBind: true,
        }],
        "no-console": "off",
        "class-methods-use-this": "off",
        "linebreak-style": 0,
        "arrow-parens": ["error", "as-needed"],
    },
    globals: {
        window: true,
        API_URL: true,
        document: true,
        localStorage: true,
    },
    parser: "babel-eslint",
};