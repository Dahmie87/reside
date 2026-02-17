import Link from 'next/link';
import { Home, Search, PlusCircle, User, Building } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 p-4 justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="text-primary flex items-center">
                    <span className="material-symbols-outlined text-3xl">domain</span>
                </div>
                <h1 className="text-[#111418] dark:text-white text-xl font-extrabold tracking-tight">Hostel.ng</h1>
            </Link>

            <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    <Home size={20} />
                    <span className="font-medium">Home</span>
                </Link>
                <Link href="/discover" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    <Search size={20} />
                    <span className="font-medium">Discover</span>
                </Link>
                <Link href="/add-listing" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    <PlusCircle size={20} />
                    <span className="font-medium">Add Listing</span>
                </Link>
                <Link href="/home-2" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                    <Building size={20} />
                    <span className="font-medium">Home 2</span>
                </Link>
            </div>

            <Link href="/sign-in" className="flex items-center gap-2 text-primary text-base font-bold hover:opacity-80 transition-opacity">
                <User size={20} />
                <span>Sign In</span>
            </Link>
        </nav>
    );
}
