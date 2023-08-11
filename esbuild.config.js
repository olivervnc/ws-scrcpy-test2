const path = require('path');

const config = {
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2015'],
  platform: 'browser',
  outdir: 'dist',
  loader: {
    '.js': 'jsx',
    '.ts': 'tsx',
  },
};

module.exports = config;
