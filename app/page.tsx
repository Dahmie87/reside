
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-32">
      <header className="bg-gradient-to-br from-primary to-blue-700 pt-12 pb-24 px-6 rounded-b-[2.5rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div>
            <h2 className="text-white/80 text-sm font-medium">Welcome back,</h2>
            <h1 className="text-white text-2xl font-bold">Alex Johnson</h1>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden shadow-md">
            <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTp4ANkCx9bg9r-a1LKaOokBBA5U1Kv6UM51pwgNERBWDGWS2c-SYW2Rqu9dj1ZdlpkUMI0L1IXU-PuTWM3yLfQ0SA7NcuufVuLY1RvegCgD18PnCZ9loXeU8_uw1aIXv_1DEeUVvNJL5HmI4OAwaLWovwaTkQsJhlGdpI9FS4UkMTS70-ugShOp13ta5AvqdwfvqJj6Kq26N1TuilTZ_Z6C8xFzMrs9Y6mtLW968zuocouhjBxe6fWKW8EifgqPtgTuAHiBCP5X0K" />
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold leading-tight max-w-[280px]">
            Find Your Perfect Hostel Near Campus
          </h2>
          <p className="text-blue-100 mt-2 text-sm">340+ options available today</p>
        </div>
      </header>
      <div className="px-6 -mt-10 relative z-20">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 space-y-3">
          <div className="relative">
            <span className="material-icons-round absolute left-3 top-1/2 -translate-y-1/2 text-primary">search</span>
            <input className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-700 border-none rounded-xl focus:ring-2 focus:ring-primary text-sm font-medium placeholder:text-slate-400" placeholder="Where are you studying?" type="text" />
          </div>
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-700 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="material-icons-round text-sm">location_on</span>
              Nearby
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-700 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="material-icons-round text-sm">payments</span>
              $200 - $600
            </button>
            <button className="w-12 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg shadow-primary/30">
              <span className="material-icons-round">tune</span>
            </button>
          </div>
        </div>
      </div>
      <section className="mt-8 px-6">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold">Browse by Location</h3>
          <a className="text-primary text-sm font-semibold" href="#">See all</a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="material-icons-round text-primary text-2xl">account_balance</span>
            </div>
            <span className="text-xs font-semibold">Central</span>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-icons-round text-slate-400 text-2xl">science</span>
            </div>
            <span className="text-xs font-semibold">Science Park</span>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-icons-round text-slate-400 text-2xl">menu_book</span>
            </div>
            <span className="text-xs font-semibold">Library Hill</span>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-icons-round text-slate-400 text-2xl">sports_soccer</span>
            </div>
            <span className="text-xs font-semibold">Sports Hub</span>
          </div>
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-icons-round text-slate-400 text-2xl">directions_bus</span>
            </div>
            <span className="text-xs font-semibold">West Gate</span>
          </div>
        </div>
      </section>
      <section className="mt-6 px-6">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold">Featured Hostels</h3>
          <div className="flex gap-2">
            <button className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Top Rated</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/hostel-details" className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 block">
            <div className="relative h-40">
              <img alt="Hostel Room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQsdgU8Gk_5lb5hfiy7ancpOzveY1H49RLDojMFUbIpfeVv2xa_kyUEEpzV4EMs2coEpyNO8D8i3CKtLvPzOQqrhz_uSw4kM4wccn05lDlPw4gwnNe_XuCXgnB1hbIvdo8nqSTn9hxZ6Var409GyrfOzVxg3R80tNn5daC7vxGdwuNCBt8u9Ps5x43qOgIHNSU7a7zfBY2un5x4WSONYR9i2IDYFPH1gjFtEgsdL3lNBRio14JwFeSoyzntfc-ZKgOW4twBHF2yxfF" />
              <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-icons-round text-sm">favorite_border</span>
              </button>
              <div className="absolute bottom-2 left-2 bg-primary px-2 py-1 rounded-lg">
                <span className="text-white text-[10px] font-bold">$350/mo</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm truncate">The Scholar's Nest</h4>
              <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                <span className="material-icons-round text-[12px]">location_on</span>
                <span className="text-[10px]">0.2 miles away</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                <span className="material-icons-round text-xs">star</span>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">4.8</span>
              </div>
            </div>
          </Link>
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="relative h-40">
              <img alt="Hostel Room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoBVRrz7J7kuPqWmp2XVllgQVMslzFSm17matiHk0MVfwZQHVWScwQeA2YkIeTkr3BSQOTD7-09QlhoEIxuD48Rs6rhmKBTjyIW2plESjKT-i1x1fzobjIL9JRheqhIDYDQRcBCrEbumWEO1Hx9l2Yro28jHipMJZJR6KiH4JC3KKYZC6OpfEy_znlptN6tQMjSAQ3hViDGDTYyCe4UzNGQfDrT58wh7UdnfFQetsnXgY3RHGxtv5mYxMjEvM85MD2KID3fAcld6Kv" />
              <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-icons-round text-sm">favorite</span>
              </button>
              <div className="absolute bottom-2 left-2 bg-primary px-2 py-1 rounded-lg">
                <span className="text-white text-[10px] font-bold">$420/mo</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm truncate">Campus View Suites</h4>
              <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                <span className="material-icons-round text-[12px]">location_on</span>
                <span className="text-[10px]">0.5 miles away</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                <span className="material-icons-round text-xs">star</span>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">4.9</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="relative h-40">
              <img alt="Hostel Room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-4vuSc0miPZ6yjt3Dj82HudrA_2IOs5X6hWiraYI4k9RPexOzJlEpDlNW9cbmU18d_emYGafIOgG9VH1_dm4AG299n4Ny4IawXwUr4ELyt9V6yX72yeMUxYcubflzT1lymKWTCZvF-LirXEw96d2JrWja9mLZY2aT2T9RN0hbiQ1PJTbtFxS5O_luAuXGPynwv2j5bYXDDglBJm7u26Kjktg4_hTGDzZ-bPV7GTz5-1cSMK2YPQWU2XC_PMdw3j8gmHlzh9YbOWK9" />
              <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-icons-round text-sm">favorite_border</span>
              </button>
              <div className="absolute bottom-2 left-2 bg-primary px-2 py-1 rounded-lg">
                <span className="text-white text-[10px] font-bold">$550/mo</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm truncate">Skyline Residences</h4>
              <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                <span className="material-icons-round text-[12px]">location_on</span>
                <span className="text-[10px]">0.8 miles away</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                <span className="material-icons-round text-xs">star</span>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">4.5</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="relative h-40">
              <img alt="Hostel Room" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLUEwL-XGiQw1rbPOwmwtM1H6RJnHCrY1CW9ZwSEkqNh_JsG-HhprUdx8a8cDXSAfEOfXvt4-ofDTcK0gJhUd5dBFiQVgZaRYCJjXivybP8LafyB4riamiQ3U_OoUgoINy_-zTuLp8WpGlNqiAs6J8qjzalVB3Ykol-PyJcvkfQqVTjlfFNbkp6wnSL7SHUEv7draQmHYUmjZlfR5B5Kjpr3x_V8IYachU9VHPkCOC2qy0Nn8dItqi7FMvcE8OvGY6zI-5pBLd_AU" />
              <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-icons-round text-sm">favorite_border</span>
              </button>
              <div className="absolute bottom-2 left-2 bg-primary px-2 py-1 rounded-lg">
                <span className="text-white text-[10px] font-bold">$290/mo</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-bold text-sm truncate">Westgate Dorms</h4>
              <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400">
                <span className="material-icons-round text-[12px]">location_on</span>
                <span className="text-[10px]">1.2 miles away</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                <span className="material-icons-round text-xs">star</span>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-200">4.2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed bottom-6 left-0 right-0 px-6 z-50">
        <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-[2rem] px-6 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] flex justify-between items-center max-w-md mx-auto">
          <Link href="/" className="flex flex-col items-center gap-1 text-primary">
            <span className="material-icons-round text-2xl">home</span>
            <span className="text-[10px] font-bold">Home</span>
          </Link>
          <Link href="/discover" className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400">
            <span className="material-icons-round text-2xl">explore</span>
            <span className="text-[10px] font-medium">Explore</span>
          </Link>
          <Link href="/add-listing" className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
            <span className="material-icons-round text-xl">add_circle</span>
            <span className="text-xs font-bold uppercase tracking-tight">Post</span>
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400">
            <span className="material-icons-round text-2xl">favorite</span>
            <span className="text-[10px] font-medium">Saved</span>
          </Link>
          <Link href="/sign-in" className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400">
            <span className="material-icons-round text-2xl">person</span>
            <span className="text-[10px] font-medium">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
