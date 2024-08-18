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
      <main className="h-full bg-[#142023] pt-[50px] text-white lg:pl-[256px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pl-4 pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
