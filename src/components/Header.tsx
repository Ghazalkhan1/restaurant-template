import Link from "next/link"

export default function Header(){
    return (
<header className="w-full bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-10"
        >
        </button>

        {/* Navigation Links */}
        <ul className="
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out">
          
            <li>
              <Link
                href=""
                className="text-[16px] leading-6 text-[#FF9F0D] font-bold"
              >
              </Link>
            </li>
          
        </ul>


      </nav>
    </header>
  )
}
    
