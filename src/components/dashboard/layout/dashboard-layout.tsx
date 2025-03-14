import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { DashboardGradient } from '@/components/gradients/dashboard-gradient';
import '../../../styles/dashboard.css';
import { Sidebar } from '@/components/dashboard/layout/sidebar';
import { SidebarUserInfo } from '@/components/dashboard/layout/sidebar-user-info';

interface Props {
  children: ReactNode;
}

export function DashboardLayout({ children }: Props) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative overflow-hidden bg-black/95">
      <DashboardGradient />
      <div className="hidden border-r border-purple-900/20 md:block relative bg-black/40 backdrop-blur-sm">
        <div className="flex h-full flex-col gap-2">
          <div className="flex items-center pt-8 pl-6 pb-10">
            <Link href="/" className="flex items-center gap-2 font-semibold text-purple-500">
              <Image src={'/assets/icons/logo/aeroedit-logo-icon.svg'} alt={'AeroEdit'} width={41} height={41} />
            </Link>
          </div>
          <div className="flex flex-col grow">
            <Sidebar />
            <SidebarUserInfo />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black/40 backdrop-blur-sm">{children}</div>
    </div>
  );
}
