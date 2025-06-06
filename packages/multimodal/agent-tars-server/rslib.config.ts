/**
 * Copyright (c) 2025 Bytedance, Inc. and its affiliates.
 * SPDX-License-Identifier: Apache-2.0
 */
import { defineConfig } from '@rslib/core';
import pkg from './package.json';

const BANNER = `/**
* Copyright (c) 2025 Bytedance, Inc. and its affiliates.
* SPDX-License-Identifier: Apache-2.0
*/`;

export default defineConfig({
  source: {
    entry: {
      index: ['src/**'],
    },
    define: {
      __VERSION__: JSON.stringify(pkg.version),
    },
  },
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      bundle: false,
      dts: true,
      banner: { js: BANNER },
    },
    {
      format: 'cjs',
      syntax: 'es2021',
      bundle: false,
      dts: true,
      banner: { js: BANNER },
    },
  ],
  output: {
    target: 'node',
    cleanDistPath: true,
    sourceMap: true,
  },
});
