import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, MountainIcon, ShieldCheck, Server, Cloud, Puzzle, Twitter, Linkedin, Facebook } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">Peter & Sons</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-lg font-medium">
            <Link href="/about" className="text-accent font-semibold transition-colors" prefetch={false}>
              About
            </Link>
            <Link href="/games" className="hover:text-accent transition-colors" prefetch={false}>
              Games
            </Link>
            <Link href="#" className="hover:text-accent transition-colors" prefetch={false}>
              Partnerships
            </Link>
            <Link href="#" className="hover:text-accent transition-colors" prefetch={false}>
              Merchandise
            </Link>
            <Link href="#" className="hover:text-accent transition-colors" prefetch={false}>
              Resources
            </Link>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              asChild
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <Link href="/client-portal/login">Login</Link>
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get in Touch</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 text-lg font-medium p-6">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                  <MountainIcon className="h-6 w-6 text-accent" />
                  <span className="font-bold">Peter & Sons</span>
                </Link>
                <Link href="/about" className="text-accent font-semibold" prefetch={false}>
                  About
                </Link>
                <Link href="/games" className="hover:text-accent" prefetch={false}>
                  Games
                </Link>
                <Link href="#" className="hover:text-accent" prefetch={false}>
                  Partnerships
                </Link>
                <Link href="#" className="hover:text-accent" prefetch={false}>
                  Merchandise
                </Link>
                <Link href="#" className="hover:text-accent" prefetch={false}>
                  Resources
                </Link>
                <div className="flex items-center gap-4 mt-4">
                  <ThemeToggle />
                </div>
                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  >
                    <Link href="/client-portal/login">Login</Link>
                  </Button>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get in Touch</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              We Build Games That Players Love and Operators Profit From.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We're Peter & Sons, a game studio that makes unique, high-performing slots. Since 2019, our team of
              experts has been creating games that stand out and deliver real value to our partners.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground">A True Partnership</h2>
                <p className="mt-4 text-muted-foreground">
                  We believe in winning together. Your dedicated Account Manager is an industry expert who will help you
                  plan game releases and marketing campaigns. We're more than a supplier; we're your partner in growth.
                </p>
                <h2 className="text-3xl font-bold text-foreground mt-8">Unique Experiences</h2>
                <p className="mt-4 text-muted-foreground">
                  Our games are built with world-class mechanics, stunning graphics, and amazing sound. We pack them
                  with innovative features that grab players' attention and keep them coming back for more, which means
                  better engagement and more revenue for you.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder-a7ddg.png"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Your All-in-One Gaming Solution
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our platform is simple, powerful, and easy to integrate. We give you the tools you need to succeed.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Server className="h-8 w-8 text-accent" />
                  <CardTitle>Powerful Game Server</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our modern, modular server is built for speed and reliability. Rich APIs make integration a breeze.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Cloud className="h-8 w-8 text-accent" />
                  <CardTitle>Cloud Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Handles any amount of traffic with zero downtime. Our average response time is less than 100ms,
                    keeping your players happy.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Puzzle className="h-8 w-8 text-accent" />
                  <CardTitle>Gamification Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Boost your sales with tools players love, like Free Spins, Tournaments, and Jackpots.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Global Reach, Local Compliance
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We serve the global gaming market and meet the highest industry standards. Our games are certified in over
              15 jurisdictions, support 40+ languages and currencies, and are available with multiple RTPs to fit any
              market need. We are committed to fair play and responsible gaming.
            </p>
            <div className="mt-8">
              <ShieldCheck className="h-16 w-16 mx-auto text-accent" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Join Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We're a passionate team with a fresh vision for slots. Want to be part of it?
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Explore Careers
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-light-gray">
        <div className="container mx-auto py-12 px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold text-white">Peter & Sons</h3>
              <p className="mt-2 text-sm text-light-gray/70">
                Fun games that make you more money. We partner with casinos to help them win.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/games" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-premium-gold" prefetch={false}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Resources</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/client-portal/login" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Client Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-premium-gold" prefetch={false}>
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Connect</h3>
              <div className="flex mt-2 space-x-4">
                <Link href="#" className="text-light-gray/70 hover:text-premium-gold" prefetch={false}>
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-light-gray/70 hover:text-premium-gold" prefetch={false}>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-light-gray/70 hover:text-premium-gold" prefetch={false}>
                  <Facebook className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-light-gray/20 pt-8 text-center text-sm text-light-gray/50">
            <p>&copy; {new Date().getFullYear()} Peter & Sons. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
