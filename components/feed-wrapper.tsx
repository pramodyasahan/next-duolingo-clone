import React from 'react';

type props = {
  children: React.ReactNode;
};

export const FeedWrapper = ({ children }: props) => {
  return <div className="relative top-0 flex-1 bg-[#142023] pb-10">{children}</div>;
};
