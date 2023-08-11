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
    require('esbuild-plugin-node-externals')(),
    require('esbuild-plugin-worker-loader')(),
  ],
};

// Build the project using esbuild and the defined options
esbuild.build(options).catch((err) => {
  console.error(err);
  process.exit(1);
});