'use client';

import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItems = ({ label, iconSrc, href }: props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? 'sidebarOutline' : 'sidebar'}
      className="h-[52px] justify-start"
      asChild
    >
      <Link href={href}>
        <Image src={iconSrc} alt={label} className="mb-1 mr-5" height={32} width={32} />
        {label}
      </Link>
    </Button>
  );
};
