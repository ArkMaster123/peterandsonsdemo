"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MountainIcon, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const gameQuotes = [
  {
    quote: "The house always wins, but smart operators win bigger.",
    author: "Casino Wisdom",
    game: "Blackjack Masters"
  },
  {
    quote: "Fortune favors the bold, but data favors the prepared.",
    author: "Strategic Gaming",
    game: "Fortune's Edge"
  },
  {
    quote: "Every spin tells a story. Every story drives revenue.",
    author: "Player Psychology",
    game: "Mystic Reels"
  },
  {
    quote: "Innovation isn't just about new games—it's about new possibilities.",
    author: "Gaming Evolution",
    game: "Quantum Slots"
  },
  {
    quote: "The best partnerships are built on trust, transparency, and shared success.",
    author: "Business Philosophy",
    game: "Alliance Poker"
  },
  {
    quote: "Player engagement is the currency of the future.",
    author: "Digital Gaming",
    game: "Engagement Engine"
  },
  {
    quote: "Great games don't just entertain—they create communities.",
    author: "Community Building",
    game: "Social Spins"
  },
  {
    quote: "Data without insight is just noise. Insight without action is just potential.",
    author: "Analytics Mastery",
    game: "Metrics & Magic"
  }
]

export default function LoginPage() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % gameQuotes.length)
    }, 4000) // Change quote every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentQuote = gameQuotes[currentQuoteIndex]

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Quote Section */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-deep-navy via-charcoal to-deep-navy p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-premium-gold rounded-full"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 border border-premium-gold rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-premium-gold rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-lg text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-12 text-white hover:text-premium-gold transition-colors">
            <MountainIcon className="h-8 w-8" />
            <span className="text-2xl font-bold">Peter & Sons</span>
          </Link>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-6"
            >
              <blockquote className="text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
                "{currentQuote.quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="text-premium-gold font-medium text-lg">
                  — {currentQuote.author}
                </p>
                <p className="text-white/70 text-sm uppercase tracking-wider">
                  From {currentQuote.game}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Quote Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {gameQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuoteIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuoteIndex 
                    ? 'bg-premium-gold w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center p-8 lg:p-12 bg-background">
        {/* Mobile Header */}
        <div className="lg:hidden w-full mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <MountainIcon className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Peter & Sons</span>
            </Link>
          </div>

          <Card className="shadow-xl border-0 bg-card">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold">Client Portal Access</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your credentials to access your dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="m@example.com" 
                    required 
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                    <Link 
                      href="#" 
                      className="text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    required 
                    className="h-12"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                >
                  Login
                </Button>
              </form>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full h-12 font-medium"
              >
                Login with SSO
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Don't have access?{" "}
                <Link 
                  href="#" 
                  className="font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Request a Partnership
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Quote */}
          <div className="lg:hidden text-center space-y-4 p-6 bg-muted rounded-lg">
            <blockquote className="text-lg font-medium text-foreground">
              "{currentQuote.quote}"
            </blockquote>
            <p className="text-accent font-medium">
              — {currentQuote.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 