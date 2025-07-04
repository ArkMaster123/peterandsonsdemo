"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronRight, MountainIcon } from "lucide-react"
import { useScroll, motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Header } from "./header"

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Games", href: "/games" },
  { name: "Partnerships", href: "#" },
  { name: "Merchandise", href: "#" },
  { name: "Resources", href: "#" },
]

const Logo = () => (
  <Link href="/" aria-label="home" className="flex items-center gap-2">
    <MountainIcon className="h-8 w-8 text-accent" />
    <span className="text-xl font-bold text-foreground">Peter & Sons</span>
  </Link>
)

const HeroHeader = () => {
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
    <header>
      <nav data-state={menuState ? "active" : "inactive"} className="group fixed z-20 w-full pt-2">
        <div
          className={cn(
            "mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12",
            scrolled && "bg-background/50 backdrop-blur-2xl",
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
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
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

export function NewHero() {
  return (
    <>
      <Header />
      <section className="relative">
        <div className="aspect-[2/3] absolute inset-0 overflow-hidden sm:aspect-video">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover"
            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
          ></video>
        </div>
        
        <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-48">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-12">
            <div className="rounded-3xl bg-black/40 backdrop-blur-md p-8 md:p-12 w-full max-w-4xl">
              <h1 className="mt-8 text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl font-bold text-white drop-shadow-lg">
                Games That Win Big for Casino Partners
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg md:text-xl text-white/90 drop-shadow">
                We make games that players love to play. Happy players spend more time and money. This means more profit for your casino.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="relative z-20 bg-accent hover:bg-accent/90 text-accent-foreground transition-colors min-w-[200px] active:scale-95"
                >
                  <Link href="/games" className="flex items-center justify-center">
                    See Our Games <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="relative z-20 text-white hover:bg-white/10 transition-colors min-w-[200px] active:scale-95"
                >
                  <Link href="#contact" className="flex items-center justify-center">
                    Book a Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background pb-2">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm text-muted-foreground">Powering the best teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-7 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </InfiniteSlider>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
