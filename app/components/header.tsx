"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, MountainIcon } from "lucide-react"
import { useScroll, motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Merchandise", href: "/merchandise" },
  { name: "Resources", href: "/resources" },
]

const Logo = () => (
  <Link href="/" aria-label="home" className="flex items-center gap-2">
    <MountainIcon className="h-8 w-8 text-accent" />
    <span className="text-xl font-bold text-white drop-shadow-lg">Peter & Sons</span>
  </Link>
)

export function Header() {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header className="fixed w-full z-50">
      <nav data-state={menuState ? "active" : "inactive"} className="group w-full pt-2">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled ? "bg-black/40 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm"
          )}
        >
          <motion.div
            key={1}
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4",
            )}
          >
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Logo />
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 text-white duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 text-white duration-200" />
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-white/90 hover:text-accent block duration-150 drop-shadow-lg"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/40 backdrop-blur-md group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-white/90 hover:text-accent block duration-150 drop-shadow-lg"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                <ThemeToggle />
                <Button
                  variant="outline"
                  asChild
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get in Touch</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
} 