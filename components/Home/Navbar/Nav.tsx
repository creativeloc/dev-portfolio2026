import Logo from "@/components/Helper/Logo"

const Nav = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] zoom-200 fixed w-full">
      <div className="flex items-center h-full justify-baseline w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
      </div>
    </div>
  )
}
export default Nav
