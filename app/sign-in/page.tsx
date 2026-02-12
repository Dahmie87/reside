
import Link from 'next/link';

export default function SignIn() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
            {/* iOS Phone Mockup Container (Mental Model) */}
            <div className="w-full max-w-[400px] bg-white dark:bg-slate-900 shadow-2xl rounded-[2.5rem] overflow-hidden border-8 border-slate-200 dark:border-slate-800 relative">
                {/* Status Bar */}
                <div className="h-11 flex items-center justify-between px-8 pt-4">
                    <span className="text-sm font-semibold">9:41</span>
                    <div className="flex space-x-1.5 items-center">
                        <span className="material-icons text-[16px]">signal_cellular_alt</span>
                        <span className="material-icons text-[16px]">wifi</span>
                        <span className="material-icons text-[16px]">battery_full</span>
                    </div>
                </div>
                {/* Main Content Area */}
                <div className="px-6 pb-12 pt-8">
                    {/* App Logo/Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                            <span className="material-icons text-primary text-3xl">home_work</span>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Find your perfect home away from home.</p>
                    </div>
                    {/* Role Selector (iOS Segmented Control Style) */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex mb-8">
                        <button className="flex-1 bg-white dark:bg-slate-700 shadow-sm py-2 text-sm font-semibold rounded-lg text-primary transition-all">
                            Student
                        </button>
                        <button className="flex-1 py-2 text-sm font-semibold rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all">
                            Agent
                        </button>
                    </div>
                    {/* Sign In Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-[12px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1.5 ml-1">Email Address</label>
                            <div className="relative">
                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">alternate_email</span>
                                <input className="w-full pl-11 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm" placeholder="alex@university.edu" type="email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[12px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500 mb-1.5 ml-1">Password</label>
                            <div className="relative">
                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">lock</span>
                                <input className="w-full pl-11 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-sm" placeholder="••••••••" type="password" />
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" type="button">
                                    <span className="material-icons text-[20px]">visibility</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-end pt-1">
                            <Link href="#" className="text-primary text-sm font-semibold hover:underline">Forgot Password?</Link>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] mt-4" type="submit">
                            Sign In
                        </button>
                    </form>
                    {/* Social Login Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-medium">Or continue with</span>
                        </div>
                    </div>
                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center space-x-2 border border-slate-100 dark:border-slate-800 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <img alt="Google Logo" className="w-5 h-5" data-alt="Google company logo in colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmYXXpz22rjH0Fno2smA18brYWRe1oTelbURENFMPKjUvXxqPpfIrYTspFN3HonrusPBDvFbhpdhAHd7rvk5NmNvksE0ZZLjaN6-7KGRBpwKn9DAeOxysEBscrfJUU9xGXD-7_8nDI08kZ9daURTiszEfJj0ddAi9UyInKTF00RXaiSOzEHUQrtrhaiVU0iSovafnJcBqtp-LBxmA9vbGZiw9C7tyRsX1wbCmq7akQvqQhPzNhtjz-70WecHBQNdlCwAwgwPDrsuuR" />
                            <span className="text-sm font-semibold">Google</span>
                        </button>
                        <button className="flex items-center justify-center space-x-2 border border-slate-100 dark:border-slate-800 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <span className="material-icons text-slate-900 dark:text-white">apple</span>
                            <span className="text-sm font-semibold">Apple</span>
                        </button>
                    </div>
                    {/* Sign Up Footer */}
                    <p className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400">
                        New to UniHostel?{' '}
                        <Link href="#" className="text-primary font-bold hover:underline">Create Account</Link>
                    </p>
                    {/* Social Proof Subtle Tag */}
                    <div className="flex justify-center items-center mt-12 space-x-2">
                        <div className="flex -space-x-2">
                            <img alt="User 1" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" data-alt="Female student smiling portrait thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOJK1ocz8tg1oXzZZT1OZ9NDRsNupIR0qiiOcQZNU_juZXTODYnocrx6mugHANGhMU9OFHD9JnBHoTjGdo8Fx4FasFyPAMRMECWpW9y9eotrdW5s2yWNAmMiECFr6KnDR6IHoc3UFBXZ0WhNF90Re1cNvPcVWCtYzIMGP9NxC521GPDpQBgnE7QAC6eV4Ias4EdynUOZpNJrDllvjfY_RL0ZEiWfUm4vTrmcdOX9WAHonZOuJF5DGSZIxVgykf1XEeBoPHjdcFgJ2J" />
                            <img alt="User 2" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" data-alt="Male student smiling portrait thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDIpZZhmAobHrRd-8ynFuERNzs5XswOO1lZJcAmM5OlvPciNzTCihvYHZxPP-C-Dbdojbdd7IyyxuBkPlEAUg4tLSI_7OkzawDDQkSug-7rxaR9Y7ZIAigsELUYtRd55A3_60N2wqDNVwlqPgm0lEO6YHfEhP1DqHeSI_2Y8sQnjSqdKFjpn46SdVq_4FoPCR16n9N_YUUqxGlzAnT7fK0oKaTvYXX0Hz5yEckm4faxzPmf7KPiQC8xdNFaxLmPnekMdcniZaOEPup" />
                            <img alt="User 3" className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900" data-alt="Student with glasses portrait thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVhLmLb7nWOftV_-N1u_jRrnqvD4U8xo8mpjESCaUi_oHU73dLoM140DhcXBC1NHprFHqSDW6cj9YG4IFkwt_7xtXERy6WuyYrtokESSoAAvf4taWyIbQz7v0I-9OM4tEpweRFlvq6hZ0NZAKNty2EVT_gC1RNmOqWxvDzO0q1-bBUtWCzhaJKz6-Dn-Cu1LhTPyKm5lHY0_sX5Jau2PuF544T9dHQxu8AMzXSWcF3xqMmFP4pff-ZwsmVLwZ0N7TVCxXVC93EfYjt" />
                        </div>
                        <p className="text-[11px] font-medium text-slate-400 uppercase tracking-tighter">Joined by 12k+ students</p>
                    </div>
                </div>
                {/* iOS Indicator Bar */}
                <div className="flex justify-center pb-2">
                    <div className="w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
