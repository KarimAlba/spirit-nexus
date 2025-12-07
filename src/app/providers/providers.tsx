import type { ReactNode } from 'react';

import ReactQueryProvider from './react-query-provider/react-query-provider';

export interface IProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<IProvidersProps> = ({ children }) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);

export default Providers;
