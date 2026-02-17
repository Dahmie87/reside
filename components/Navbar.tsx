import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 p-4 justify-between">
            <Link href="/" className="flex items-center gap-2">
                <div className="text-primary flex items-center">
                    <span className="material-symbols-outlined text-3xl">domain</span>
                </div>
                <h1 className="text-[#111418] dark:text-white text-xl font-extrabold tracking-tight">Hostel.ng</h1>
            </Link>
            <Link href="/sign-in" className="text-primary text-base font-bold hover:opacity-80 transition-opacity">
                Sign In
            </Link>
        </nav>
    );
}
