import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Twitter, Linkedin, Facebook, ArrowRight } from "lucide-react"
import { InteractiveRoiCalculator } from "@/app/components/interactive-roi-calculator"
import { NewHero } from "@/app/components/new-hero"

export default function HomePage() {
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
                  src="/evegnii.png"
                  alt="Evgenii Lucky"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
              <div className="text-left">
                <blockquote className="text-xl font-semibold italic border-l-4 border-premium-gold pl-6">
                  "Working with Sonya has been an absolute privilege. She is an incredibly motivating and understanding leader who consistently provides invaluable support in the workplace. Sonya is an exceptional manager who delivers on her responsibilities with 100% dedication. Her deep understanding of the industry, strong grasp of metrics, and ability to inspire and motivate her team set her apart."
                </blockquote>
                <p className="mt-6 font-bold text-xl">- Evgenii Lucky</p>
                <p className="text-light-gray/80">HR Manager / Talent Hunter at iGaming</p>
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

        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Get Your Merch</h2>
              <p className="text-gray-400 text-lg">Cool gear for your team, events, and partners.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              <div className="group relative">
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src="/shop/hoodie.png"
                    alt="Premium Branded Hoodie"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-semibold">Premium Branded Hoodie</h3>
                  <p className="text-gray-400 text-sm">Limited Edition</p>
                </div>
              </div>

              <div className="group relative">
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src="/shop/tshirt.png"
                    alt="Branded Cap"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-semibold">Branded T-Shirt</h3>
                  <p className="text-gray-400 text-sm">Classic Style</p>
                </div>
              </div>

              <div className="group relative">
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src="/shop/tshirt2.png"
                    alt="Executive Cap"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-semibold">Premium T-Shirt</h3>
                  <p className="text-gray-400 text-sm">Premium Collection</p>
                </div>
              </div>

              <div className="group relative">
                <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden">
                  <Image
                    src="/shop/keychain.png"
                    alt="Collectible Game Chips"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-semibold">Collectible Keychain</h3>
                  <p className="text-gray-400 text-sm">Limited Edition</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/merchandise">
                <Button 
                  size="lg"
                  className="bg-premium-gold text-black hover:bg-premium-gold/90 transition-all duration-300 group"
                >
                  Shop Merch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_100%] pointer-events-none opacity-5" />
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose Peter & Sons?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We do things differently. Here's what makes us special.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Creative Games</h3>
                <p className="text-muted-foreground">
                  We make games that look amazing and feel different. No boring copies here.
                </p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Stand Out</h3>
                <p className="text-muted-foreground">
                  We help you be different from other casinos. Players notice unique games.
                </p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Perfect Details</h3>
                <p className="text-muted-foreground">
                  We check every detail to make sure our games work perfectly for you.
                </p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Easy to Work With</h3>
                <p className="text-muted-foreground">
                  We make everything simple. Easy to set up, easy to play, easy to enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InteractiveRoiCalculator />
      </main>
    </div>
  )
}
