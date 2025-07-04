"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BarChart, Mail, PartyPopper } from "lucide-react"

// A simple function to format numbers as currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

export function InteractiveRoiCalculator() {
  const [step, setStep] = useState(1)
  const [monthlyPlayers, setMonthlyPlayers] = useState(10000)
  const [avgRevenue, setAvgRevenue] = useState(50)
  const [email, setEmail] = useState("")
  const [results, setResults] = useState({ revenueUplift: 0, engagementUplift: 0 })

  const handleCalculate = () => {
    // Simplified ROI calculation based on PRD goals
    // These factors would be refined with real business data
    const revenueUpliftPercentage = 0.15 // 15% uplift
    const engagementUpliftPercentage = 0.25 // 25% uplift

    const currentMonthlyRevenue = monthlyPlayers * avgRevenue
    const projectedRevenueUplift = currentMonthlyRevenue * revenueUpliftPercentage

    setResults({
      revenueUplift: projectedRevenueUplift,
      engagementUplift: engagementUpliftPercentage * 100,
    })
    setStep(2)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with an email service like SendGrid
    console.log(`Lead captured: ${email}. Sending report...`)
    setStep(3)
  }

  return (
    <section id="roi-calculator" className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center p-8">
            <CardTitle className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              {step < 3 ? "See Your Potential ROI" : "Your Results"}
            </CardTitle>
            <CardDescription className="mt-4 max-w-2xl mx-auto text-lg text-charcoal/80">
              {step === 1 && "Answer two simple questions to see how our games can boost your revenue."}
              {step === 2 && "Here's your estimated monthly uplift. Enter your email to get a detailed report."}
              {step === 3 && "Thank you! Your detailed report is on its way."}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <Label htmlFor="monthly-players" className="text-lg font-medium text-charcoal">
                    Monthly Active Players
                  </Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      id="monthly-players"
                      min={1000}
                      max={500000}
                      step={1000}
                      value={[monthlyPlayers]}
                      onValueChange={(value) => setMonthlyPlayers(value[0])}
                    />
                    <Input
                      type="number"
                      className="w-32 font-mono"
                      value={monthlyPlayers}
                      onChange={(e) => setMonthlyPlayers(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="avg-revenue" className="text-lg font-medium text-charcoal">
                    Average Monthly Revenue per Player (USD)
                  </Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Slider
                      id="avg-revenue"
                      min={5}
                      max={500}
                      step={5}
                      value={[avgRevenue]}
                      onValueChange={(value) => setAvgRevenue(value[0])}
                    />
                    <Input
                      type="number"
                      className="w-32 font-mono"
                      value={avgRevenue}
                      onChange={(e) => setAvgRevenue(Number(e.target.value))}
                    />
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-premium-gold text-white hover:bg-premium-gold/90"
                  onClick={handleCalculate}
                >
                  <BarChart className="mr-2 h-5 w-5" />
                  Calculate My ROI
                </Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                  <div className="bg-light-gray p-6 rounded-lg">
                    <p className="text-lg text-charcoal/80">Projected Monthly Revenue Increase</p>
                    <p className="text-5xl font-bold text-data-blue mt-2 font-mono">
                      {formatCurrency(results.revenueUplift)}
                    </p>
                  </div>
                  <div className="bg-light-gray p-6 rounded-lg">
                    <p className="text-lg text-charcoal/80">Estimated Player Engagement Uplift</p>
                    <p className="text-5xl font-bold text-data-blue mt-2 font-mono">{results.engagementUplift}%</p>
                  </div>
                </div>
                <form onSubmit={handleEmailSubmit} className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    required
                    className="flex-grow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" size="lg" className="bg-deep-navy text-white hover:bg-deep-navy/90">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Full Report
                  </Button>
                </form>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <PartyPopper className="h-16 w-16 mx-auto text-premium-gold" />
                <h3 className="mt-4 text-2xl font-bold text-deep-navy">Check Your Inbox!</h3>
                <p className="mt-2 text-charcoal/80">
                  A personalized report with competitive analysis and implementation steps has been sent to{" "}
                  <span className="font-semibold text-charcoal">{email}</span>.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
