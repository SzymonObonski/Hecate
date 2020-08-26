import React, { ReactNode } from 'react';
import { Navigation } from '@components/molecules';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navigation />
    <main>{children}</main>
  </>
);
export default Layout;
