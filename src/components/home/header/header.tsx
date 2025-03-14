import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Props {
  user: User | null;
}

export default function Header({ user }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="mx-auto max-w-7xl px-[32px] py-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link className="flex items-center" href={'/'}></Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#overview">
              Overview
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#features">
              Features
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#industries">
              Industries
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#security">
              Security
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#pricing">
              Pricing
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              href="#integrations"
            >
              Integrations
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#enterprise">
              Enterprise
            </Link>
            <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="#templates">
              Templates
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {user?.id ? (
            <Button variant={'secondary'} asChild={true}>
              <Link href={'/dashboard'}>Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant={'ghost'} className="hidden md:inline-flex" asChild={true}>
                <Link href={'/book-demo'}>Book A Demo</Link>
              </Button>
              <Button
                variant={'default'}
                className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500"
                asChild={true}
              >
                <Link href={'/signup'}>Try for Free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
