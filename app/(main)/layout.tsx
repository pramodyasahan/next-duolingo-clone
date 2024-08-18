import React from 'react';
import { Sidebar } from '@/components/sidebar';
import { MobileHeader } from '@/components/mobile-header';

type props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="h-full bg-[#142023] text-white">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
