import SignUp from '@/components/auth/SignUp';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import React, { FC } from 'react';


export const metadata = {
  title: 'SignIn',
  description: 'Website Name and its Description',
};


type pageProps = {};

const page: FC<pageProps> = () => {
  return (
    <div className="absolute inset-0 ">
      <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-20">
        <Link
          href={'/'}
          className={cn(buttonVariants({ variant: 'ghost' }),'self-start -mt-20')}
        >{'< '}Home</Link>
        <SignUp />
      </div>
    </div>
  );
};

export default page;
