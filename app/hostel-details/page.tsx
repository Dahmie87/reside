
import Link from 'next/link';

export default function HostelDetails() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
            {/* Mobile Header Overlay (Sticky) */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
                <Link href="/" className="bg-white/90 dark:bg-background-dark/80 backdrop-blur-md p-2 rounded-full shadow-lg text-slate-800 dark:text-white">
                    <span className="material-icons-round block">arrow_back</span>
                </Link>
                <div className="flex gap-2">
                    <button className="bg-white/90 dark:bg-background-dark/80 backdrop-blur-md p-2 rounded-full shadow-lg text-slate-800 dark:text-white">
                        <span className="material-icons-round block">share</span>
                    </button>
                    <button className="bg-white/90 dark:bg-background-dark/80 backdrop-blur-md p-2 rounded-full shadow-lg text-primary">
                        <span className="material-icons-round block">favorite</span>
                    </button>
                </div>
            </div>
            {/* Main Content Container */}
            <main className="pb-32 max-w-250 mx-auto bg-white dark:bg-slate-900 min-h-screen shadow-2xl overflow-hidden">
                {/* Hero Gallery */}
                <div className="relative w-full aspect-[4/2] overflow-hidden">
                    <img className="w-full h-full object-cover" data-alt="Modern hostel room with minimalist furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwnoVk8x534JwoiGbEKFbKPXVSeGAyb6P7ql70ijf3-PIYVdiy-xEIi5JPv-u795UTAZR5ttMyGas1KRagy0u1T4RzVGsXS-SQws169EeGp_oCfufzJJi09iLJbBAYPTpvb2xaf-7fm1mxX3ubdtsNNqzdfW8zXmAKf8KgrBlw5ymyI6YFTDKosAgMioDC7pOKPldcaY_Y5U5y7gUTVI1OItbuEgI9yHk9RMfF9hTMbw2byolqhx1o29jyYLV5Uj7DmYf0u8Gy-EDM" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                        <div className="w-6 h-1.5 bg-primary rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                        1/12
                    </div>
                </div>
                {/* Details Section */}
                <div className="px-5 pt-6 space-y-6">
                    {/* Title & Price */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Premium Listing</span>
                            <span className="flex items-center text-amber-500 font-bold text-sm">
                                <span className="material-icons-round text-sm mr-1">star</span> 4.8
                            </span>
                        </div>
                        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">Lumina Student Living</h1>
                        <div className="flex items-baseline gap-1 mt-1">
                            <span className="text-2xl font-bold text-primary">$450</span>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">/month</span>
                        </div>
                        <p className="flex items-center text-slate-500 dark:text-slate-400 text-sm mt-1">
                            <span className="material-icons-round text-sm mr-1 text-slate-400">location_on</span>
                            North Campus, University District
                        </p>
                    </div>
                    {/* Room Types Chips */}
                    <div className="flex gap-2 overflow-x-auto hide-scrollbar -mx-5 px-5">
                        <button className="flex-shrink-0 border-2 border-primary bg-primary/5 px-4 py-2 rounded-xl text-primary font-semibold text-sm">
                            Single Room
                        </button>
                        <button className="flex-shrink-0 border-2 border-slate-100 dark:border-slate-800 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 font-semibold text-sm">
                            Double Shared
                        </button>
                        <button className="flex-shrink-0 border-2 border-slate-100 dark:border-slate-800 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-300 font-semibold text-sm">
                            Studio Suite
                        </button>
                    </div>
                    {/* Description */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">About this space</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            Modern student living at its finest. Lumina offers fully furnished rooms with high-speed internet, ergonomic study desks, and plenty of natural light. Located just 5 minutes walk from the main library. <span className="text-primary font-bold">Read more</span>
                        </p>
                    </div>
                    {/* Amenities */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Key Amenities</h3>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-icons-round">wifi</span>
                                </div>
                                <span className="text-[11px] font-medium text-slate-500">Free WiFi</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-icons-round">ac_unit</span>
                                </div>
                                <span className="text-[11px] font-medium text-slate-500">Central AC</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-icons-round">local_laundry_service</span>
                                </div>
                                <span className="text-[11px] font-medium text-slate-500">Laundry</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <span className="material-icons-round">fitness_center</span>
                                </div>
                                <span className="text-[11px] font-medium text-slate-500">Gym</span>
                            </div>
                        </div>
                    </div>
                    {/* Location Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Location</h3>
                            <button className="text-primary text-sm font-bold">Get Directions</button>
                        </div>
                        <div className="relative h-40 w-full rounded-2xl overflow-hidden shadow-inner border border-slate-100 dark:border-slate-800">
                            <img className="w-full h-full object-cover" data-alt="Map view of university district" data-location="University District" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCODIkblg2T16wtedHW06A61Ys0X7TsoZpqWRA85ihR3UYlvvR3MnniNcV-jzwA4uxAHYvnnXJtJg4uBU8LeRiMlGhc4l5MrcpMfthOvQ9evExNxJw3294_AtiB8bu40AEGMW8hvZjFqntStP-kcL6fEPNaxtmtO8txtpyiqPWwzL8RGHjKNAz5WtaK7Zo270AXDv2tmuuuciG19Mpn5OwzoltPDkErEkSk3m5llBCaAiZBSmH4uSqtPISmO_dBcG5hHHELgoQ2V_HS" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center animate-pulse">
                                    <div className="w-4 h-4 bg-primary rounded-full border-2 border-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Agent Contact Card */}
                    <div className="bg-background-light dark:bg-slate-800/50 p-4 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img className="w-12 h-12 rounded-full object-cover" data-alt="Professional real estate agent portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLQntP0rhU1C0hFIeWat2nZdoGD-cOqACHMgiWPT96-dCRLjrUfFIAwlmmGABkwC_CBOghtMoojoxz74aUbKl3hqtYg5YXw4yw44tbwN61BrF4LMjxr6ie4ywEbPm7o7FxtJ8Tx6OkQOC2moQl_Ix4F8rxyOHV9HxxFiHXqhiPpFPQMrprnduYagS9grLfjcS1Blz69-efrbkxJEAEpowEAPP9oC6bxUc_hPP1nPJT23tenA39TTZ50v9NYvOP_wYcIE_yvNlA2bWv" />
                                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Marcus Thompson</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Response time: ~5 mins</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm text-primary">
                                <span className="material-icons-round text-xl">chat_bubble</span>
                            </button>
                            <button className="w-10 h-10 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm text-primary">
                                <span className="material-icons-round text-xl">call</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            {/* Sticky Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 z-50">
                <div className="max-w-lg mx-auto flex gap-4 items-center">
                    <div className="flex-1">
                        <span className="block text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Total Price</span>
                        <span className="text-xl font-extrabold text-slate-900 dark:text-white">$450<span className="text-sm font-medium text-slate-400">/mo</span></span>
                    </div>
                    <button className="flex-[2] bg-primary hover:bg-primary/90 text-white font-extrabold py-4 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                        Rent Now
                        <span className="material-icons-round text-lg">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
