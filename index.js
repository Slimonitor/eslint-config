const projectJson = require('../../../package.json');
const isRunningOnServer = projectJson.repository.url.match(/server/);

module.exports = {
    "env": {
        "browser": isRunningOnServer,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": isRunningOnServer
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": isRunningOnServer ? [
        "react"
    ] : [],
    "rules": {
        "indent": [
            "warn", // todo: change to error in production phase
            4,
            {SwitchCase: 1}
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
