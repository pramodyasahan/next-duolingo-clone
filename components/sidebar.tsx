import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SidebarItems } from '@/components/sidebar-items';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';

type props = {
  className?: string;
};

export const Sidebar = ({ className }: props) => {
  return (
    <div
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 border-[#37474F] bg-[#142023] px-4 lg:fixed lg:w-[256px]',
        className,
      )}
    >
      <Link href="/learn">
        <div className="items-centergap-x-3 flex pb-7 pl-4 pt-8">
          <h1 className="flex justify-evenly pl-6 pt-1 text-3xl font-extrabold tracking-wide text-[#5ACB05]">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItems label="Learn" href="/learn" iconSrc="/home.svg" />
        <SidebarItems label="Leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg" />
        <SidebarItems label="Quests" href="/quests" iconSrc="/quests-1.png" />
        <SidebarItems label="Shop" href="/shop" iconSrc="/shop-3.png" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="text-muted-foreground h-5 w-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
