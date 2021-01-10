import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.ts',
  external: ['styled-components', 'react', 'react-dom', 'react-icons'],
  plugins: [
    typescript(),
    resolve({ extensions }),
    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    url(),
    terser(),
  ],
  output: [{ file: pkg.module, format: 'es' }],
};
