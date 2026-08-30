// eslint-config-next 16 ships native flat config — no FlatCompat wrapper needed.
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'src/data/**', 'next-env.d.ts'] },
  ...coreWebVitals,
  ...typescript,
];

export default config;
