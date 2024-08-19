import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disable?: boolean;
  active?: boolean;
};

export const Card = ({ title, id, imageSrc, onClick, disable, active }: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        'flex h-full min-h-[217px] min-w-[200px] cursor-pointer flex-col items-center justify-between rounded-xl ' +
          'border-2 border-b-4 p-4 pb-6 hover:bg-black/5 active:border-b-2',
        disable && 'pointer-events-none opacity-50',
      )}
    >
      <div className="min-[24px] flex w-full items-center justify-end">
        {active && (
          <div className="flex items-center justify-center rounded-lg bg-[#5ACB05] p-1">
            <Check className="m-0 h-4 w-4 stroke-[4] p-0 text-[#142023]" />
          </div>
        )}
      </div>
      <Image
        alt={title}
        src={imageSrc}
        height={70}
        width={93.33}
        className={cn('mb-0 rounded-lg border object-cover drop-shadow-md', active && 'mt-[-22px]')}
      />
      <p className="text-center text-xl font-bold text-white">{title}</p>
    </div>
  );
};
