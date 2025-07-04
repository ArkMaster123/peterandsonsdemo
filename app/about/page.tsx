import { Header } from "@/app/components/header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Server, Cloud, Puzzle, Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,#111_50%,#000_75%)] bg-[length:400%_400%] animate-subtle-shift opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>

          <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-left space-y-6 animate-in slide-in-from-left duration-700">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                  BE THE
                  <span className="block text-premium-gold">GOAT</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-xl">
                  We're Peter & Sons, crafting extraordinary gaming experiences that captivate players and drive operator success. Since 2019, we've been pushing boundaries and redefining what's possible in online gaming.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-premium-gold text-black hover:bg-premium-gold/90 transition-all duration-300 group"
                  >
                    View Our Games
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-600 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Character Image */}
              <div className="relative h-[600px] animate-in slide-in-from-right duration-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute -left-20 inset-y-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10" />
                    <Image
                      src="/aboutimage.png"
                      alt="Peter & Sons Game Characters"
                      fill
                      className="object-contain object-center"
                      priority
                      quality={100}
                    />
                    <div className="absolute -right-20 inset-y-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10" />
                  </div>
                </div>

                {/* Ambient Light Effects */}
                <div className="absolute -top-20 right-40 w-32 h-32 bg-premium-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>

          {/* Vertical Lines Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_100%] pointer-events-none opacity-5" />
        </section>

        {/* Partnership Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,#111_50%,#000_75%)] bg-[length:400%_400%] animate-subtle-shift opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 relative z-10 animate-in slide-in-from-left duration-700">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white">
                    A True <span className="text-premium-gold">Partnership</span>
                  </h2>
                  <p className="text-lg text-gray-400">
                    We believe in winning together. Your dedicated Account Manager is an industry expert who will help you
                    plan game releases and marketing campaigns. We're more than a supplier; we're your partner in growth.
                  </p>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white">
                    Unique <span className="text-premium-gold">Experiences</span>
                  </h2>
                  <p className="text-lg text-gray-400">
                    Our games are built with world-class mechanics, stunning graphics, and amazing sound. We pack them
                    with innovative features that grab players' attention and keep them coming back for more, which means
                    better engagement and more revenue for you.
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-premium-gold text-black hover:bg-premium-gold/90 transition-all duration-300 group"
                >
                  Learn more about our approach
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative h-[600px] animate-in slide-in-from-right duration-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute -left-20 inset-y-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10" />
                    <Image
                      src="/partnersimage.png"
                      alt="Peter & Sons Partnership Visualization"
                      fill
                      className="object-contain object-center"
                      priority
                      quality={100}
                    />
                    <div className="absolute -right-20 inset-y-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10" />
                  </div>
                </div>

                {/* Ambient Light Effects */}
                <div className="absolute -top-20 right-40 w-32 h-32 bg-premium-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>

          {/* Vertical Lines Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_100%] pointer-events-none opacity-5" />
        </section>

        {/* Features Section */}
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
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Server className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Powerful Game Server</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our modern, modular server is built for speed and reliability. Rich APIs make integration a breeze.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Cloud className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Cloud Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Handles any amount of traffic with zero downtime. Our average response time is less than 100ms,
                    keeping your players happy.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-2 rounded-full bg-accent/10">
                    <Puzzle className="h-8 w-8 text-accent" />
                  </div>
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

        {/* Global Reach Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8">
                <ShieldCheck className="h-16 w-16 mx-auto text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Global Reach, Local Compliance
              </h2>
              <p className="text-lg text-muted-foreground">
                We serve the global gaming market and meet the highest industry standards. Our games are certified in over
                15 jurisdictions, support 40+ languages and currencies, and are available with multiple RTPs to fit any
                market need. We are committed to fair play and responsible gaming.
              </p>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're a passionate team with a fresh vision for slots. Want to be part of it?
                Join us in creating the future of online gaming.
              </p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
                Explore Careers
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/games" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="/partnerships" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/client-portal/login" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Client Portal
                  </Link>
                </li>
                <li>
                  <Link href="/merchandise" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/documentation" className="text-sm hover:text-premium-gold transition-colors" prefetch={false}>
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Connect</h3>
              <div className="flex mt-4 space-x-4">
                <Link href="#" className="text-light-gray/70 hover:text-premium-gold transition-colors" prefetch={false}>
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-light-gray/70 hover:text-premium-gold transition-colors" prefetch={false}>
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-light-gray/70 hover:text-premium-gold transition-colors" prefetch={false}>
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
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
