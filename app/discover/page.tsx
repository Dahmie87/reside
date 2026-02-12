
import Link from 'next/link';

export default function Discover() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen pb-32">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
                <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <span className="material-icons text-white text-sm">apartment</span>
                        </div>
                        <h1 className="text-lg font-bold tracking-tight">Discover Hostels</h1>
                    </div>
                    <div className="flex gap-3">
                        <button className="p-2 bg-primary/5 hover:bg-primary/10 rounded-full transition-colors">
                            <span className="material-icons text-primary">search</span>
                        </button>
                        <button className="p-2 bg-primary/5 hover:bg-primary/10 rounded-full transition-colors">
                            <span className="material-icons text-primary">notifications_none</span>
                        </button>
                    </div>
                </div>
                {/* Quick Filters */}
                <div className="px-4 pb-3 flex gap-2 overflow-x-auto no-scrollbar">
                    <button className="flex-none px-4 py-2 bg-primary text-white rounded-full text-sm font-medium flex items-center gap-1 shadow-md shadow-primary/20">
                        <span className="material-icons text-sm">tune</span>
                        Filters
                    </button>
                    <button className="flex-none px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-medium hover:border-primary transition-colors">
                        Near Campus
                    </button>
                    <button className="flex-none px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-medium hover:border-primary transition-colors">
                        Ensuite
                    </button>
                    <button className="flex-none px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-medium hover:border-primary transition-colors">
                        &lt; $400/mo
                    </button>
                    <button className="flex-none px-4 py-2 bg-white dark:bg-slate-800 border border-primary/10 rounded-full text-sm font-medium hover:border-primary transition-colors">
                        Female Only
                    </button>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-4 py-6">
                {/* Results Info & Sort */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <span className="text-sm font-semibold text-primary">124 hostels found</span>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Available for Summer Semester</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-primary/10">
                        <span className="text-xs font-medium text-slate-500">Sort:</span>
                        <select className="text-xs font-bold bg-transparent border-none p-0 focus:ring-0 cursor-pointer">
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Rating</option>
                        </select>
                    </div>
                </div>
                {/* Social Media Style Feed / Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* Hostel Card 1 */}
                    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Modern student hostel room with wooden bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtWUfWcIYZMYPh1cs4LMcLYcqGEbez-tGzKlGzZmuAKJ0uwgJgrGgjfji20uaabDGEekWg7Sr7T4E8NpNmOGVu1ZssiDPSYGy52zmNSUqUGO_-OJYNlqaR_udpE6Dm0d-1ohxnjQXaBltD3eiugMKIb9qYSi9jCAj8p0-4DJV6tO0C2Zwwv7YtKh_8jskCwZlABKl4CcqAvZZrIuWgwlymCJz3g6rulHjPiBwjcdN2RMYlCPfH3BHpNRwc0unZNpWCT-jB0v-HNAqG" />
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className="px-2.5 py-1 bg-primary text-white text-[10px] font-bold uppercase rounded-md tracking-wider">Top Rated</span>
                            </div>
                            <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                <span className="material-icons text-xl">favorite_border</span>
                            </button>
                            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white">
                                1/8 Photos
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg leading-tight truncate pr-4">Lumina Heights Residence</h3>
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="text-sm font-bold">4.9</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
                                <span className="material-icons text-xs">location_on</span>
                                <span>0.2 miles from Main Campus</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">wifi</span> WiFi
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">ac_unit</span> AC
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">fitness_center</span> Gym
                                </span>
                            </div>
                            <div className="flex items-end justify-between pt-3 border-t border-primary/5">
                                <div>
                                    <span className="text-2xl font-black text-primary">$450</span>
                                    <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                                </div>
                                <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hostel Card 2 */}
                    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Cozy double shared room for students" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZUQ85eop2kJIDHyNWYzQknr8CncDCMwVV6TRGlpzCP24e0SmEr2Lhhj0huggzcsJ3jr5WfAwxnKgXp4Qz481krAsMs1UuaILTpvho3kXHETmy7et_yhSdcLsKb_xT8FFrrIFtg_XlAbJijzVJGthMmR6aiMNjwvPw_kyyh5kVVaqJ_Z3mTBq1f31oxuO_v2eHxZyfJfxb0bhh-REAvTgQRJAjY1aOa8z_NiQDEKZZMibLdKO3OphHQgYeZN0Gm5kxETf6fZjKJcii" />
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className="px-2.5 py-1 bg-green-500 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">Female Only</span>
                            </div>
                            <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 transition-colors shadow-sm">
                                <span className="material-icons text-xl">favorite</span>
                            </button>
                            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white">
                                1/5 Photos
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg leading-tight truncate pr-4">The Blue Horizon Stay</h3>
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="text-sm font-bold">4.7</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
                                <span className="material-icons text-xs">location_on</span>
                                <span>0.8 miles from Library</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">local_laundry_service</span> Laundry
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">restaurant</span> Cafeteria
                                </span>
                            </div>
                            <div className="flex items-end justify-between pt-3 border-t border-primary/5">
                                <div>
                                    <span className="text-2xl font-black text-primary">$380</span>
                                    <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                                </div>
                                <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hostel Card 3 */}
                    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Single person student studio apartment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdIhS6R5oVc7xbEuNu_0Ye1Ql6THkEvrn71oh9mu8zu5-D3qBzLyMNCq_2MmEtXWW9xVShot5yYNQF32nnxUKy0X2MsB7JCuE-F1BP7uL_uP13P42dMr69vrvW4KTiFOG3pgqdZR3Ypbh5MnoWExRvjuUEKZGJHRlUN-OS9oMIlabUPWKFq3509l_fCuLA8d61xFE8ueSC4VVNY31tPor27sBIKy7m4uABIsQ_vtHbZq8dITgxC4GwVfINEYSS8wBdbCtpYd2mb2eM" />
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className="px-2.5 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">Fastest WiFi</span>
                            </div>
                            <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                <span className="material-icons text-xl">favorite_border</span>
                            </button>
                            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white">
                                1/12 Photos
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg leading-tight truncate pr-4">Apex Studio Suites</h3>
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="text-sm font-bold">4.8</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
                                <span className="material-icons text-xs">location_on</span>
                                <span>0.5 miles from IT Dept</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">kitchen</span> Kitchenette
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">security</span> 24/7 Security
                                </span>
                            </div>
                            <div className="flex items-end justify-between pt-3 border-t border-primary/5">
                                <div>
                                    <span className="text-2xl font-black text-primary">$520</span>
                                    <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                                </div>
                                <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Hostel Card 4 */}
                    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Student hostel shared lounge area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZVq5WOLD7wVDYqydDLaahY9oH4K-90ix2vVs2qB95SGii7iBNfaqcFwUjyLJAEvwSGYbo9xmW2CNYKcQlP9-sG8ziEIS8PZi7H4l6aWUsEVrb4cdUgRlolObQ_BmHVUm2_HWHYOE9fhunY7uO8p61J86hoiq43Lo7gBebVgen5zBqqyZ07Jzgfl3Bzz0y4KRgshrxQaY3NH7bJhmr8b2bE1LdaCWXz1-vLEjqed5lyPD98k8-IDsrW8GuXIFRc6brL-dSIleCGAP" />
                            <div className="absolute top-3 left-3 flex gap-2">
                                <span className="px-2.5 py-1 bg-purple-500 text-white text-[10px] font-bold uppercase rounded-md tracking-wider">Social Hub</span>
                            </div>
                            <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                                <span className="material-icons text-xl">favorite_border</span>
                            </button>
                            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white">
                                1/10 Photos
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg leading-tight truncate pr-4">Urban Roots Commune</h3>
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-icons text-sm">star</span>
                                    <span className="text-sm font-bold">4.6</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-3">
                                <span className="material-icons text-xs">location_on</span>
                                <span>1.2 miles from Campus</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">groups</span> Common Area
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-semibold rounded-lg flex items-center gap-1">
                                    <span className="material-icons text-[12px]">sports_esports</span> Game Room
                                </span>
                            </div>
                            <div className="flex items-end justify-between pt-3 border-t border-primary/5">
                                <div>
                                    <span className="text-2xl font-black text-primary">$320</span>
                                    <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                                </div>
                                <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Load More Section */}
                <div className="mt-12 mb-20 flex flex-col items-center">
                    <button className="px-8 py-3 bg-white dark:bg-slate-800 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all shadow-lg shadow-primary/10">
                        Show 120 more hostels
                    </button>
                    <p class Name="mt-4 text-xs text-slate-400 font-medium">You've viewed 4 of 124 available hostels</p>
                </div>
            </main>
            {/* Floating Map Button */}
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform">
                    <span className="material-icons text-sm">map</span>
                    <span className="font-bold text-sm">Map View</span>
                </button>
            </div>
            {/* Bottom Mobile Navigation Bar */}
            <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-t border-primary/10 px-6 py-2 pb-6">
                <div className="flex justify-between items-center max-w-md mx-auto">
                    <Link href="/discover" className="flex flex-col items-center gap-1 text-primary">
                        <span className="material-icons">explore</span>
                        <span className="text-[10px] font-bold">Discover</span>
                    </Link>
                    <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons">favorite</span>
                        <span className="text-[10px] font-bold">Saved</span>
                    </Link>
                    <Link href="#" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons">confirmation_number</span>
                        <span className="text-[10px] font-bold">Bookings</span>
                    </Link>
                    <Link href="/sign-in" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons">person_outline</span>
                        <span className="text-[10px] font-bold">Profile</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
