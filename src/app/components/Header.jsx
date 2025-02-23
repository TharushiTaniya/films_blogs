"use client";

import Link from 'next/link';
import DarkModeSwich from './DarkModeSwich';
import { SignedIn, SignedOut  , UserButton, SignedIn } from '@clerk/nextjs';
export default function Header() {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <ul className='flex gap-4'>

                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <Link href={'/sign-in'}>
                        Sign in
                    </Link>

                    
                </SignedOut>

                <li className='hidden sm:block'>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>


                <li className='hidden sm:block'>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
            </ul>

            <div className='flex gap-4 items-center '>

                <DarkModeSwich />

            <Link href={'/'} className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
                    IMDb
                </span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>

        </div>
    );
}
