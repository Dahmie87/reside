import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] font-display min-h-screen">
      {/* Top Navigation Bar */}
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="max-w-md mx-auto bg-white dark:bg-background-dark shadow-sm">
        {/* Hero Section */}
        <section className="relative h-[340px] w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Modern cozy hostel room interior with bunk beds"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe9oC8QruFKQg5UcMjCOGaquAJ_u446p145lWR6or2qE0w_dQnfNGdyOEj6dewExcEQYVCh1xRwRrx3Bx5bkJicLVIgOWJCNJ9dCR9w4E75WdmeuJqJIbBbsYuOtmMyic-xxchACnej-NQZtpOwxO4PMjnR8Dc9xOT12yKLhULE8H6l04x6fsYdaxqRq1pHN-5NNkj4yqw09Xl7kNbOL6uf1AoF9U_3n3XhQR2q6o9fr3MvmeRPifTn8SvAzeapOIqLoadEXoBNTk')" }}
          ></div>
          <div className="absolute inset-0 hero-gradient flex flex-col justify-end p-6 bg-gradient-to-t from-teal-500/80 to-teal-500/20">
            <h2 className="text-white text-[32px] font-extrabold leading-tight mb-2">Let&apos;s find you the Perfect Room.</h2>
            <p className="text-white/90 text-base font-medium">Affordable hostel accommodation for your short stay needs.</p>
          </div>
        </section>

        {/* Search Filters Section */}
        <section className="p-4 -mt-6 relative z-10">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-5 space-y-4 border border-gray-100 dark:border-gray-800">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Search by cities</label>
              <div className="relative">
                <select className="w-full h-14 pl-4 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary appearance-none">
                  <option>Select city</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Ibadan</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-4 text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Price range</label>
              <div className="relative">
                <select className="w-full h-14 pl-4 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary appearance-none">
                  <option>Select range</option>
                  <option>N 1,000 - N 5,000</option>
                  <option>N 5,000 - N 15,000</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-4 text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1">Facilities</label>
              <div className="relative">
                <select className="w-full h-14 pl-4 pr-10 rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary appearance-none">
                  <option>Select facilities</option>
                  <option>Wi-Fi</option>
                  <option>AC</option>
                  <option>Kitchen</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-4 text-gray-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </section>

        {/* Explore Our Rooms */}
        <section className="py-6 px-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold dark:text-white">Explore Our Rooms</h3>
            <div className="flex gap-2">
              <button className="size-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="size-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
          {/* Room Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 group">
            <div className="relative h-48">
              <img className="w-full h-full object-cover" data-alt="Student hostel room with desk and bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0_gu4JCPq6opliKlSxW_koWfxre6t6NG3RPK3FyvJd6jevZyyxrE_yll6gKapKBxKdWMYMfEIpmZexN9Vy1rAnHsAnJW3JYaU2nw9PFyj4kVMzku1DjxczL0VlCTp-2LAk4qgGj1_MaEYLjpU3RMZM-3g1jd4Y7YdiF1SattsziuaSWQLTS2kKrZQt3YKRXXA2rRopXJEivb73L8EWrYTFvd65Zfx8Sd1H4VVJjbwrIyTopUvIv6rsXpF9VEnYOGS82FBxK2CqkY" />
              <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Unavailable</div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg dark:text-white">Osas N Abis Hostel</h4>
              <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <span>Benin City, Edo State</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-primary font-bold text-lg">N 3,000 <span className="text-xs text-gray-400 font-normal">/mo</span></p>
                <Link className="text-sm font-bold text-primary hover:underline" href="#">See all</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Hostel.ng? */}
        <section className="py-8 px-4 bg-gray-50 dark:bg-gray-950">
          <h3 className="text-xl font-bold mb-6 dark:text-white text-center">Why Choose Hostel.ng?</h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="size-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h5 className="font-bold text-sm mb-1 dark:text-white">Monetize your room</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed">Turn your extra space into extra income effortlessly.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="size-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h5 className="font-bold text-sm mb-1 dark:text-white">Damage insurance</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed">Full coverage for peace of mind while hosting guests.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="size-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h5 className="font-bold text-sm mb-1 dark:text-white">Verified room listings</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed">Every room is inspected and verified for quality.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="size-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h5 className="font-bold text-sm mb-1 dark:text-white">Safe & secured payment</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed">Encrypted transactions for all your bookings.</p>
            </div>
          </div>
        </section>

        {/* Smooth Rides Ahead Promo */}
        <section className="p-4">
          <div className="bg-accent-teal/10 rounded-2xl overflow-hidden flex items-center p-6 border border-accent-teal/20">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-accent-teal mb-2">Smooth rides ahead</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Book affordable transport for your hostel move.</p>
              <button className="bg-accent-teal text-white px-5 py-2 rounded-lg font-bold text-sm">Learn more</button>
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img className="w-full h-full object-cover" data-alt="Happy student traveler smiling with luggage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVQMyQI5INPvOT6lwEAC8pNbmANAyyWexsZTo0nkb2ioPxNhxNYWNKtU9W51pSOoCVNwnrNvYMLqioduxa8vZohzACL_89bxXb0kXkhVkDWmTtiZGlA82_ujzjgKWx9W9F6SgSJssg952dkc2C8qBnr59skoE2LQr_9skDYBv1UWqtMdBG8ic5ri9QEnV4N9G3-nUA8YmHq4_b2xKycF5v8QJRaesqQvnEcWa6zUMDo9EwfJY0Qu3NhVs3UeZ0AnXOCFq43uwsrY" />
            </div>
          </div>
        </section>

        {/* Lease Your Room Banner */}
        <section className="p-4">
          <div className="bg-primary rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-[120px]">meeting_room</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-2 relative z-10">Lease your room!</h3>
            <p className="text-white/80 mb-6 relative z-10">Become a host today and start earning from your vacant space.</p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-extrabold shadow-lg relative z-10">Get Started</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-950 pt-10 pb-6 px-6 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 mb-8">
            <div className="text-primary flex items-center">
              <span className="material-symbols-outlined text-2xl">domain</span>
            </div>
            <h1 className="text-[#111418] dark:text-white text-lg font-extrabold tracking-tight">Hostel.ng</h1>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Company</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary" href="#">About Us</Link></li>
                <li><Link className="hover:text-primary" href="#">Careers</Link></li>
                <li><Link className="hover:text-primary" href="#">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Quick Links</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary" href="#">Search Rooms</Link></li>
                <li><Link className="hover:text-primary" href="#">Become a Host</Link></li>
                <li><Link className="hover:text-primary" href="#">Rides</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Resources</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary" href="#">Help Center</Link></li>
                <li><Link className="hover:text-primary" href="#">Terms of Use</Link></li>
                <li><Link className="hover:text-primary" href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Contact</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary" href="#">Support</Link></li>
                <li><Link className="hover:text-primary" href="#">info@hostel.ng</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-gray-400">© 2024 Hostel.ng</p>
            <div className="flex gap-4">
              <Link className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">public</span></Link>
              <Link className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">share</span></Link>
              <Link className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">mail</span></Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
