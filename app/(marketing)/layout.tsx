import React from 'react';
import { Header } from '@/app/(marketing)/header';
import { Footer } from '@/app/(marketing)/footer';

type props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
