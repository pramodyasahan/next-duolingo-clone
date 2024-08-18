import { cn } from '@/lib/utils';

type props = {
  className?: string;
};

export const Sidebar = ({ className }: props) => {
  return (
    <div
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 bg-blue-500 px-4 lg:fixed lg:w-[256px]',
        className,
      )}
    >
      Sidebar
    </div>
  );
};
