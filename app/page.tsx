import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111418] font-display min-h-screen">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white dark:bg-background-dark shadow-sm min-h-[calc(100vh-80px)]">
        {/* Hero Section */}
        <section className="relative h-[340px] md:h-[500px] w-full overflow-hidden rounded-b-3xl md:rounded-3xl mt-4">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Modern cozy hostel room interior with bunk beds"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBe9oC8QruFKQg5UcMjCOGaquAJ_u446p145lWR6or2qE0w_dQnfNGdyOEj6dewExcEQYVCh1xRwRrx3Bx5bkJicLVIgOWJCNJ9dCR9w4E75WdmeuJqJIbBbsYuOtmMyic-xxchACnej-NQZtpOwxO4PMjnR8Dc9xOT12yKLhULE8H6l04x6fsYdaxqRq1pHN-5NNkj4yqw09Xl7kNbOL6uf1AoF9U_3n3XhQR2q6o9fr3MvmeRPifTn8SvAzeapOIqLoadEXoBNTk')" }}
          ></div>
          <div className="absolute inset-0 hero-gradient flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-teal-500/80 to-teal-500/20">
            <h2 className="text-white text-[32px] md:text-5xl font-extrabold leading-tight mb-2 md:mb-4 max-w-3xl">Let&apos;s find you the Perfect Room.</h2>
            <p className="text-white/90 text-base md:text-xl font-medium max-w-2xl">Affordable hostel accommodation for your short stay needs.</p>
          </div>
        </section>

        {/* Search Filters Section */}
        <section className="p-4 -mt-6 relative z-10 md:mt-8 md:p-0">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-5 md:p-8 space-y-4 md:space-y-0 md:flex md:gap-4 border border-gray-100 dark:border-gray-800 items-end">
            <div className="space-y-1 md:flex-1">
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
            <div className="space-y-1 md:flex-1">
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
            <div className="space-y-1 md:flex-1">
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
            <button className="w-full md:w-auto md:px-8 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">search</span>
              Search
            </button>
          </div>
        </section>

        {/* Explore Our Rooms */}
        <section className="py-6 px-4 md:px-0 md:py-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold dark:text-white">Explore Our Rooms</h3>
            <div className="flex gap-2">
              <button className="size-8 md:size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-sm md:text-base">chevron_left</span>
              </button>
              <button className="size-8 md:size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="material-symbols-outlined text-sm md:text-base">chevron_right</span>
              </button>
            </div>
          </div>
          {/* Room Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 group hover:shadow-lg transition-shadow">
              <div className="relative h-48 md:h-56">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Student hostel room with desk and bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0_gu4JCPq6opliKlSxW_koWfxre6t6NG3RPK3FyvJd6jevZyyxrE_yll6gKapKBxKdWMYMfEIpmZexN9Vy1rAnHsAnJW3JYaU2nw9PFyj4kVMzku1DjxczL0VlCTp-2LAk4qgGj1_MaEYLjpU3RMZM-3g1jd4Y7YdiF1SattsziuaSWQLTS2kKrZQt3YKRXXA2rRopXJEivb73L8EWrYTFvd65Zfx8Sd1H4VVJjbwrIyTopUvIv6rsXpF9VEnYOGS82FBxK2CqkY" />
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
            {/* Duplicate Card for Demonstration of Grid */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 group hover:shadow-lg transition-shadow hidden md:block">
              <div className="relative h-48 md:h-56">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Student hostel room with desk and bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoBVRrz7J7kuPqWmp2XVllgQVMslzFSm17matiHk0MVfwZQHVWScwQeA2YkIeTkr3BSQOTD7-09QlhoEIxuD48Rs6rhmKBTjyIW2plESjKT-i1x1fzobjIL9JRheqhIDYDQRcBCrEbumWEO1Hx9l2Yro28jHipMJZJR6KiH4JC3KKYZC6OpfEy_znlptN6tQMjSAQ3hViDGDTYyCe4UzNGQfDrT58wh7UdnfFQetsnXgY3RHGxtv5mYxMjEvM85MD2KID3fAcld6Kv" />
                <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Available</div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg dark:text-white">Campus View Suites</h4>
                <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-primary font-bold text-lg">N 12,000 <span className="text-xs text-gray-400 font-normal">/mo</span></p>
                  <Link className="text-sm font-bold text-primary hover:underline" href="#">See all</Link>
                </div>
              </div>
            </div>
            {/* Duplicate Card for Demonstration of Grid */}
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 group hover:shadow-lg transition-shadow hidden lg:block">
              <div className="relative h-48 md:h-56">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Student hostel room with desk and bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQsdgU8Gk_5lb5hfiy7ancpOzveY1H49RLDojMFUbIpfeVv2xa_kyUEEpzV4EMs2coEpyNO8D8i3CKtLvPzOQqrhz_uSw4kM4wccn05lDlPw4gwnNe_XuCXgnB1hbIvdo8nqSTn9hxZ6Var409GyrfOzVxg3R80tNn5daC7vxGdwuNCBt8u9Ps5x43qOgIHNSU7a7zfBY2un5x4WSONYR9i2IDYFPH1gjFtEgsdL3lNBRio14JwFeSoyzntfc-ZKgOW4twBHF2yxfF" />
                <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Available</div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg dark:text-white">The Scholar's Nest</h4>
                <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>Abuja, FCT</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-primary font-bold text-lg">N 8,500 <span className="text-xs text-gray-400 font-normal">/mo</span></p>
                  <Link className="text-sm font-bold text-primary hover:underline" href="#">See all</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Hostel.ng? */}
        <section className="py-8 px-4 md:px-8 bg-gray-50 dark:bg-gray-950 rounded-2xl my-8">
          <h3 className="text-xl md:text-3xl font-bold mb-8 dark:text-white text-center">Why Choose Hostel.ng?</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="size-10 md:size-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined md:text-3xl">payments</span>
              </div>
              <h5 className="font-bold text-sm md:text-lg mb-1 dark:text-white">Monetize your room</h5>
              <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed">Turn your extra space into extra income effortlessly.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="size-10 md:size-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined md:text-3xl">security</span>
              </div>
              <h5 className="font-bold text-sm md:text-lg mb-1 dark:text-white">Damage insurance</h5>
              <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed">Full coverage for peace of mind while hosting guests.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="size-10 md:size-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined md:text-3xl">verified_user</span>
              </div>
              <h5 className="font-bold text-sm md:text-lg mb-1 dark:text-white">Verified room listings</h5>
              <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed">Every room is inspected and verified for quality.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="size-10 md:size-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3">
                <span className="material-symbols-outlined md:text-3xl">verified</span>
              </div>
              <h5 className="font-bold text-sm md:text-lg mb-1 dark:text-white">Safe & secured payment</h5>
              <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed">Encrypted transactions for all your bookings.</p>
            </div>
          </div>
        </section>

        {/* Promo and Lease Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-0 mb-12">
          {/* Smooth Rides Ahead Promo */}
          <section className="h-full">
            <div className="bg-accent-teal/10 rounded-2xl overflow-hidden flex items-center p-6 border border-accent-teal/20 h-full">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-accent-teal mb-2">Smooth rides ahead</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">Book affordable transport for your hostel move.</p>
                <button className="bg-accent-teal text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-accent-teal/90 transition-colors">Learn more</button>
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img className="w-full h-full object-cover" data-alt="Happy student traveler smiling with luggage" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVQMyQI5INPvOT6lwEAC8pNbmANAyyWexsZTo0nkb2ioPxNhxNYWNKtU9W51pSOoCVNwnrNvYMLqioduxa8vZohzACL_89bxXb0kXkhVkDWmTtiZGlA82_ujzjgKWx9W9F6SgSJssg952dkc2C8qBnr59skoE2LQr_9skDYBv1UWqtMdBG8ic5ri9QEnV4N9G3-nUA8YmHq4_b2xKycF5v8QJRaesqQvnEcWa6zUMDo9EwfJY0Qu3NhVs3UeZ0AnXOCFq43uwsrY" />
              </div>
            </div>
          </section>

          {/* Lease Your Room Banner */}
          <section className="h-full">
            <div className="bg-primary rounded-2xl p-8 text-center text-white relative overflow-hidden h-full flex flex-col justify-center items-center">
              <div className="absolute -right-4 -top-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">meeting_room</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 relative z-10">Lease your room!</h3>
              <p className="text-white/80 mb-6 relative z-10 max-w-sm mx-auto">Become a host today and start earning from your vacant space.</p>
              <button className="bg-white text-primary px-8 py-3 rounded-xl font-extrabold shadow-lg relative z-10 hover:bg-gray-100 transition-colors">Get Started</button>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gray-50 dark:bg-gray-950 pt-10 pb-6 px-6 md:px-12 border-t border-gray-100 dark:border-gray-800 rounded-t-3xl">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 mb-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl">domain</span>
              <h1 className="text-[#111418] dark:text-white text-xl font-extrabold tracking-tight">Hostel.ng</h1>
            </div>
            <p className="text-sm text-gray-500 max-w-sm mt-4 md:mt-0">The easiest way to find and book student accommodation in Nigeria.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Company</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary transition-colors" href="#">About Us</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Careers</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Quick Links</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary transition-colors" href="#">Search Rooms</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Become a Host</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Rides</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Resources</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary transition-colors" href="#">Help Center</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Terms of Use</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h6 className="font-bold text-xs uppercase tracking-widest text-gray-400">Contact</h6>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <li><Link className="hover:text-primary transition-colors" href="#">Support</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">info@hostel.ng</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-800 gap-4">
            <p className="text-xs text-gray-400">© 2024 Hostel.ng. All rights reserved.</p>
            <div className="flex gap-4">
              <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">public</span></Link>
              <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></Link>
              <Link className="text-gray-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">mail</span></Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
