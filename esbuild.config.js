const esbuild = require('esbuild');

function getBuildOptions(env) {
  return {
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: env === 'production',
    sourcemap: env === 'development',
    target: 'es2017',
    loader: {
      '.css': 'css',
      '.png': 'file',
      '.jpg': 'file',
      '.gif': 'file',
    },
    external: ['fs', 'path', 'express', 'ws', '@dead50f7/adbkit', 'ios-device-lib', 'node-mjpeg-proxy', 'node-pty', 'portfinder', 'tslib', 'yaml'],
    outfile: env === 'production' ? 'dist/bundle.min.js' : 'dist/bundle.js',
  };
}

if (['production', 'development'].includes(process.env.NODE_ENV)) {
  esbuild.build(getBuildOptions(process.env.NODE_ENV)).catch(() => process.exit(1));
} else {
  esbuild.build(getBuildOptions('production')).catch(() => process.exit(1));
}