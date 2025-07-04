"use client"
import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Menu, MountainIcon, Users, Globe, Gamepad, Filter, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { gamesData } from "./data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Header } from "@/app/components/header"
import { Badge } from "@/components/ui/badge"
import { Gamepad2 } from "lucide-react"

const themes = ["Mythology", "Adventure", "Sci-Fi", "Fantasy", "Classic"]
const features = ["Free Spins", "Jackpot", "Megaways", "Bonus Buy"]
const volatilities = ["All", "Low", "Medium", "High", "Very High"]
const GAMES_PER_PAGE = 9

export default function GamesPage() {
  const [visibleGames, setVisibleGames] = useState(GAMES_PER_PAGE)
  const [filters, setFilters] = useState({
    volatility: "All",
    themes: [] as string[],
    features: [] as string[],
  })

  const filteredGames = useMemo(() => {
    return gamesData.filter((game) => {
      const volatilityMatch = filters.volatility === "All" || game.volatility === filters.volatility
      const themeMatch = filters.themes.length === 0 || filters.themes.includes(game.theme)
      const featureMatch =
        filters.features.length === 0 || filters.features.every((feature) => game.features.includes(feature as any))
      return volatilityMatch && themeMatch && featureMatch
    })
  }, [filters])

  const handleThemeChange = (theme: string) => {
    setFilters((prev) => ({
      ...prev,
      themes: prev.themes.includes(theme) ? prev.themes.filter((t) => t !== theme) : [...prev.themes, theme],
    }))
  }

  const handleFeatureChange = (feature: string) => {
    setFilters((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }))
  }

  const resetFilters = () => {
    setFilters({ volatility: "All", themes: [], features: [] })
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28">
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our Game Portfolio
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              Explore our collection of high-performing slots, designed to captivate players and drive revenue
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
                <Gamepad className="h-10 w-10 text-accent mb-2" />
                <p className="text-4xl font-bold">51</p>
                <p className="text-muted-foreground">Games</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
                <Users className="h-10 w-10 text-accent mb-2" />
                <p className="text-4xl font-bold">200+</p>
                <p className="text-muted-foreground">Operators</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
                <Globe className="h-10 w-10 text-accent mb-2" />
                <p className="text-4xl font-bold">50</p>
                <p className="text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-4 gap-8">
              <aside className="lg:col-span-1">
                <Card className="sticky top-32 bg-muted">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5" />
                      Filter Games
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-base">Volatility</Label>
                      <Select
                        value={filters.volatility}
                        onValueChange={(v) => setFilters({ ...filters, volatility: v })}
                      >
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select Volatility" />
                        </SelectTrigger>
                        <SelectContent>
                          {volatilities.map((v) => (
                            <SelectItem key={v} value={v}>
                              {v}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-base">Theme</Label>
                      <div className="mt-2 space-y-2">
                        {themes.map((theme) => (
                          <div key={theme} className="flex items-center space-x-2">
                            <Checkbox
                              id={`theme-${theme}`}
                              checked={filters.themes.includes(theme)}
                              onCheckedChange={() => handleThemeChange(theme)}
                            />
                            <Label htmlFor={`theme-${theme}`} className="font-normal">
                              {theme}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="text-base">Features</Label>
                      <div className="mt-2 space-y-2">
                        {features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={`feature-${feature}`}
                              checked={filters.features.includes(feature)}
                              onCheckedChange={() => handleFeatureChange(feature)}
                            />
                            <Label htmlFor={`feature-${feature}`} className="font-normal">
                              {feature}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent" onClick={resetFilters}>
                      <X className="mr-2 h-4 w-4" />
                      Reset Filters
                    </Button>
                  </CardContent>
                </Card>
              </aside>

              <div className="lg:col-span-3">
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {filteredGames.slice(0, visibleGames).map((game) => (
                    <Card key={game.id} className="overflow-hidden group bg-card">
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
                          View Game
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {visibleGames < filteredGames.length && (
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setVisibleGames((prev) => prev + GAMES_PER_PAGE)}
                    >
                      Load More
                    </Button>
                  </div>
                )}
                {filteredGames.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No games match your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-light-gray">{/* Footer content remains the same */}</footer>
    </div>
  )
}
