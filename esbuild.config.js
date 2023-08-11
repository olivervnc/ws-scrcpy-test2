const { build } = require('esbuild');

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node14',
  outdir: 'dist',
  external: ['ws', 'express', 'yaml', 'node-pty', 'portfinder', 'node-mjpeg-proxy', 'ios-device-lib', '@dead50f7/adbkit', 'tslib', 'h264-converter', 'tinyh264', 'xterm', 'xterm-addon-attach', 'xterm-addon-fit', 'sylvester.js', 'buffer', 'mkdirp', 'recursive-copy', 'rimraf', 'file-loader', 'svg-inline-loader', 'worker-loader', 'html-webpack-plugin', 'mini-css-extract-plugin', 'css-loader', 'ts-loader', '@dead50f7/generate-package-json-webpack-plugin', '@typescript-eslint/eslint-plugin', '@typescript-eslint/parser', 'eslint', 'eslint-config-prettier', 'eslint-plugin-prettier', 'eslint-plugin-progress', 'prettier', 'cross-env', 'ts-node', 'webpack', 'webpack-cli', 'webpack-node-externals', '@types/bluebird', '@types/dom-webcodecs', '@types/express', '@types/node', '@types/node-forge', '@types/npmlog', '@types/webpack-node-externals', '@types/ws', 'xterm-addon-attach', 'xterm-addon-fit', 'xterm-addon-attach', 'xterm-addon-fit'],
}).catch(() => process.exit(1));
