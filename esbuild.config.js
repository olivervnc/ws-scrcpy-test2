const esbuild = require('esbuild');

// Define build options
const options = {
  entryPoints: ['src/app/index.ts'],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ['es2017'],
  platform: 'browser',
  outdir: 'dist',
  loader: {
    '.woff': 'file',
    '.node': 'file',
    '.wasm': 'file',
  },
  plugins: [
    // Add plugins to handle web workers
  ],
};

// Build the project using esbuild and the defined options
esbuild.build(options).catch(() => process.exit(1));
