
import Link from 'next/link';

export default function AddListing() {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased min-h-screen">
            {/* iOS Status Bar Spacer */}
            <div className="h-12 w-full bg-white dark:bg-slate-900"></div>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4 flex items-center justify-between">
                <Link href="/" className="w-10 h-10 flex items-center justify-start text-slate-600 dark:text-slate-400">
                    <span className="material-icons-round">arrow_back_ios</span>
                </Link>
                <h1 className="text-lg font-bold tracking-tight">Add New Listing</h1>
                <div className="w-10"></div> {/* Spacer for symmetry */}
            </header>
            <main className="max-w-md mx-auto px-4 pb-32">
                {/* Progress Indicator */}
                <div className="mt-6 mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step 2 of 4</span>
                        <span className="text-sm font-medium text-slate-500">Media & Photos</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/2 rounded-full"></div>
                    </div>
                </div>
                {/* Form Sections */}
                <div className="space-y-8">
                    {/* Section 1: Basic Information */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <span className="material-icons-round text-primary text-sm">home</span>
                            </span>
                            <h2 className="text-base font-bold">Property Details</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="group">
                                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ml-1">Listing Title</label>
                                <input className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="e.g. Luxury Studio near West Campus" type="text" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ml-1">Price</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                                        <input className="w-full pl-8 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="0.00" type="number" />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ml-1">Per</label>
                                    <select className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white">
                                        <option>Semester</option>
                                        <option>Month</option>
                                        <option>Year</option>
                                    </select>
                                </div>
                            </div>
                            <div className="group relative">
                                <label className="block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5 ml-1">Location</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-icons-round text-slate-400 text-xl">location_on</span>
                                    <input className="w-full pl-11 pr-12 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-slate-900 dark:text-white" placeholder="Enter university or street" type="text" />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-primary bg-primary/10 rounded-lg">
                                        <span className="material-icons-round text-lg">my_location</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section 2: Media Upload */}
                    <section className="space-y-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                    <span className="material-icons-round text-primary text-sm">photo_camera</span>
                                </span>
                                <h2 className="text-base font-bold">Property Photos</h2>
                            </div>
                            <span className="text-xs font-medium text-slate-400">Up to 10 photos</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {/* Upload Box */}
                            <label className="aspect-square rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 transition-colors">
                                <input className="hidden" multiple type="file" />
                                <span className="material-icons-round text-primary mb-1">add_a_photo</span>
                                <span className="text-[10px] font-bold text-primary uppercase">Add</span>
                            </label>
                            {/* Preview 1 */}
                            <div className="relative aspect-square rounded-xl overflow-hidden group">
                                <img className="w-full h-full object-cover" data-alt="Modern minimalist studio apartment interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyrqsjEL2OhRYVM4Qmq_jxXrWDh_LBP2dy2O2VNsmcdbD-0RBNJFgEpzP5GdEkxwC3095CqFX_uyOAJr96QPv0RLd18vQSNfizTL7igdgaU-N33PPGI8qW3zoarakahGl39oedY9wyHbNKUo8LxX4wgwlExDPHVM0-IAs_Yg5VLdu5c4embr-JYqlGlBqda15xRTxDGi2LqTAMM_A6qae_EyLUnfgFwK1KOGmxiMYtpAmjHOEfSUmRIDCDDfv_j68bBDxpUii6RPzt" />
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-1 left-1 bg-primary text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Cover</div>
                                <button className="absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center">
                                    <span className="material-icons-round text-xs">close</span>
                                </button>
                            </div>
                            {/* Preview 2 */}
                            <div className="relative aspect-square rounded-xl overflow-hidden group">
                                <img className="w-full h-full object-cover" data-alt="Well lit modern bathroom with blue tiles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0MQRA1lN5EyPtJRnQi1IwoYUHojHJGHX6GlvgPkCDA1qOPfja7mPKOCkkvdeDjoc5245UpCNQ70YcC68r5WIcDS_9WSYXNOgEBV7woMz24bSGT8Y8BQp6dwNFRtZ5rrHuEPUAwWTGw1kYI5MVgJGgQgi5NkSObyg1dV2fhLpgGacWrwx6doV8R4Da7SNXpZUdP2aS6uaVgr9LGBCc4EzbNahaYvB3oSr8is1y-vDYwQvYolMtRw8oU73P3kZnm6LpDC2tQNbDIauc" />
                                <button className="absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center">
                                    <span className="material-icons-round text-xs">close</span>
                                </button>
                            </div>
                        </div>
                    </section>
                    {/* Section 3: Features/Amenities */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <span className="material-icons-round text-primary text-sm">bolt</span>
                            </span>
                            <h2 className="text-base font-bold">Amenities & Features</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <label className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                                <input defaultChecked className="hidden peer" type="checkbox" />
                                <span className="material-icons-round text-slate-400 peer-checked:text-primary mr-3 text-lg">wifi</span>
                                <span className="text-sm font-medium">Free Wi-Fi</span>
                            </label>
                            <label className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                                <input className="hidden peer" type="checkbox" />
                                <span className="material-icons-round text-slate-400 peer-checked:text-primary mr-3 text-lg">ac_unit</span>
                                <span className="text-sm font-medium">Air Conditioning</span>
                            </label>
                            <label className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                                <input className="hidden peer" type="checkbox" />
                                <span className="material-icons-round text-slate-400 peer-checked:text-primary mr-3 text-lg">local_laundry_service</span>
                                <span className="text-sm font-medium">Laundry</span>
                            </label>
                            <label className="flex items-center p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                                <input defaultChecked className="hidden peer" type="checkbox" />
                                <span className="material-icons-round text-slate-400 peer-checked:text-primary mr-3 text-lg">security</span>
                                <span className="text-sm font-medium">24/7 Security</span>
                            </label>
                        </div>
                    </section>
                </div>
            </main>
            {/* Fixed Bottom Action Area */}
            <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 px-6 py-5 pb-8">
                <div className="max-w-md mx-auto flex gap-4">
                    <button className="w-14 h-14 rounded-xl border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                        <span className="material-icons-round">save</span>
                    </button>
                    <button className="flex-1 h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all">
                        Continue to Review
                        <span className="material-icons-round">arrow_forward</span>
                    </button>
                </div>
                {/* iOS Home Indicator Space */}
                <div className="h-2 w-32 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mt-4"></div>
            </div>
        </div>
    );
}
