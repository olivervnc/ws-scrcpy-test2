const esbuild = require('esbuild');
const path = require('path');

const config = {
  entryPoints: ['src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2015'],
  platform: 'browser',
  fallback: 'node',
  outdir: 'dist',
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx',
    '.ts': 'tsx',
    '.tsx': 'tsx',
  },
};

module.exports = config;