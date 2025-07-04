import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Twitter, Linkedin, Facebook } from "lucide-react"
import { InteractiveRoiCalculator } from "@/app/components/interactive-roi-calculator"
import { NewHero } from "@/app/components/new-hero"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NewHero />
      <main className="flex-1">
        <section id="games" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Top-Earning Games</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Check out the games that are making our partners money right now.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Valkyrie's Valor",
                  volatility: "High",
                  rtp: "96.5%",
                  maxWin: "50,000x",
                  query: "epic norse mythology warrior slot game art",
                },
                {
                  title: "Goblin's Gold",
                  volatility: "Medium",
                  rtp: "95.8%",
                  maxWin: "5,000x",
                  query: "mischievous goblin in a treasure cave slot game art",
                },
                {
                  title: "Cosmic Quest",
                  volatility: "Very High",
                  rtp: "97.1%",
                  maxWin: "100,000x",
                  query: "futuristic astronaut exploring alien planet slot game art",
                },
              ].map((game) => (
                <Card key={game.title} className="overflow-hidden group bg-card">
                  <CardHeader className="p-0">
                    <Image
                      src={`/abstract-geometric-shapes.png?width=600&height=400&query=${game.query}`}
                      alt={game.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold text-card-foreground">{game.title}</CardTitle>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-center font-mono">
                      <div>
                        <p className="text-sm text-muted-foreground">Volatility</p>
                        <p className="text-lg font-semibold text-data-blue">{game.volatility}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">RTP</p>
                        <p className="text-lg font-semibold text-data-blue">{game.rtp}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Max Win</p>
                        <p className="text-lg font-semibold text-data-blue">{game.maxWin}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/games">See All Games</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="partnership" className="py-16 md:py-24 bg-charcoal text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder-a7ddg.png"
                  alt="Partner Logo"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="text-left">
                <blockquote className="text-2xl font-semibold italic border-l-4 border-premium-gold pl-6">
                  "Working with Peter & Sons was a game-changer. Our players are more engaged, and we've seen a 25%
                  boost. They're true partners."
                </blockquote>
                <p className="mt-6 font-bold text-xl">- Alex Chen, Head of Gaming</p>
                <p className="text-light-gray/80">A Top-Tier Casino Group</p>
                <Button
                  variant="outline"
                  className="mt-8 border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-white bg-transparent"
                >
                  See Success Stories
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="merchandise" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get Your Merch</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Cool gear for your team, events, and partners.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <Image
                  src="/placeholder-cau9i.png"
                  alt="Branded Hoodie"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">Premium Branded Hoodie</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/placeholder-xc2om.png"
                  alt="Branded Cap"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">Executive Cap</h3>
              </div>
              <div className="text-center">
                <Image
                  src="/placeholder-ouq6k.png"
                  alt="Collectible Poker Chips"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-foreground">Collectible Game Chips</h3>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Shop Merch
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <InteractiveRoiCalculator />
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
                  <Link href="/login" className="text-sm hover:text-premium-gold" prefetch={false}>
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
