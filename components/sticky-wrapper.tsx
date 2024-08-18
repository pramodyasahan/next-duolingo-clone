import React from 'react';

type props = {
  children: React.ReactNode;
};

export const StickyWrapper = ({ children }: props) => {
  return (
    <div className="sticky bottom-6 hidden w-[368px] self-end lg:block">
      <div className="sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4">{children}</div>
    </div>
  );
};
