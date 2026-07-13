import Logo from "@/components/Helper/Logo"
import ThemeToggler from "@/components/Helper/ThemeToggler"
import { Navlinks } from "@/Constant/Constant"
import { Download, MenuIcon } from "lucide-react"
import Link from "next/link"

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] zoom-200 fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="dark:text-white text-black hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.name}</p>
              </Link>
            )
          })}
        </div>
        {/* CV button */}
        <div className="flex text-center space-x-4">
          <a
            href="#_"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          {/* Theme Toggler */}
          <ThemeToggler />
          {/* Burger Menu */}
          <MenuIcon className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden" />
        </div>
      </div>
    </div>
  )
}
export default Nav
