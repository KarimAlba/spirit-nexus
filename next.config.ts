import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactCompiler: true,
  sassOptions: {
    additionalData: '@import "/src/app/styles/mixin.scss";',
  },
};

export default nextConfig;
