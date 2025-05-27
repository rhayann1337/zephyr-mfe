import { rspack } from '@rspack/core';
import ReactRefreshRspackPlugin from '@rspack/plugin-react-refresh';
import { withZephyr } from 'zephyr-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default withZephyr()({
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  // @ts-expect-error Below are non-blocking error and we are working on improving them
  plugins: [
	 new rspack.container.ModuleFederationPlugin({
      name: 'mfe_host',
      remotes: {
		application: "application@https://rhayann-13-application-zephyr-mfe-rhayann1337-e68808e07-ze.zephyrcloud.app/remoteEntry.js",
	  },
      shared: {
        react: { eager: true },
        'react-dom': { eager: true },
        'react-router-dom': { eager: true },
      },
    }),
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
    isDev ? new ReactRefreshRspackPlugin() : null,
  ].filter(Boolean),
  optimization: {
    minimizer: [
      // @ts-expect-error
      new rspack.SwcJsMinimizerRspackPlugin(),
      // @ts-expect-error
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
  experiments: {
    css: true,
  },
});