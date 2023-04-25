const path = require('path');

module.exports = {
    stories: ['./welcome.stories.mdx', '../stories/**/*.stories.*'],
    addons: [
        { name: '@storybook/addon-essentials', options: { backgrounds: false } },
        '@storybook/addon-a11y',
    ],

    core: {
        builder: 'webpack5',
        disableTelemetry: true,
    },

    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: path.resolve(__dirname, '../'),
        });

        // Return the altered config
        return config;
    },
};
