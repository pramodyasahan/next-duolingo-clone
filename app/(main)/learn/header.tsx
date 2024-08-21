import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type props = {
  title: string;
};

export const Header = ({ title }: props) => {
  return (
    <div className="sticky top-0 flex items-center justify-between rounded-2xl border border-b-4 border-slate-600 bg-[#5ACB05] p-6 pb-3 text-white lg:z-50 lg:mt-[5px] lg:p-[15px]">
      <Link href="/courses">
        <Button variant="secondary" size="sm">
          <ArrowLeft className="mt-1 h-5 w-5 stroke-2 text-white hover:text-[#D0F0C1]" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </div>
  );
};
