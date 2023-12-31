"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import AccountIcon from "@modules/common/icons/account"

const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderHovered, setIsHeaderHovered] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-white border-b border-transparent duration-100 group-hover:bg-[#79aa9c] group-hover:border-gray-200",
          {
            "!bg-[#79aa9c] !border-gray-200 text-white": !isHome || isScrolled,
          }
        )}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <nav
          className={clsx(
            "font-bold flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-[#79aa9c] group-hover:text-white": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex items-center flex-1 h-full basis-0">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden h-full small:block">
              <DropdownMenu />
            </div>
          </div>
          <div className="">

          </div>

          <div className="flex items-center h-full">
            <Link href="/" className="uppercase text-xl-semi">
              <Image
                src={
                  isHeaderHovered
                    ? "/little_goose_logo.svg" // Change this to the image for hover state
                    : isHome && !isScrolled
                      ? "/little_goose_logo_inverted.svg"
                      : "/little_goose_logo.svg"
                }
                alt="Little Goose Logo"
                draggable={false}
                width={60}
                height={60}
                style={{
                  objectFit: "contain",
                  objectPosition: "",
                }}
              />
            </Link>
          </div>

          <div className="flex items-center justify-end flex-1 h-full gap-x-6 basis-0">
            <div className="items-center hidden h-full small:flex gap-x-6">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <div className="flex items-center space-x-1">
                <AccountIcon />
                <Link className="text-base" href="/account">Account</Link>
              </div>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
