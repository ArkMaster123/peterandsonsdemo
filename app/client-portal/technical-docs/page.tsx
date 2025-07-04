"use client"

import { useState } from "react"
import { Search, Book, Code2, Puzzle, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const documentationSections = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      { title: "Quick Start Guide", description: "Get up and running with Peter & Sons games" },
      { title: "Integration Overview", description: "Understanding the integration process" },
      { title: "Platform Requirements", description: "Technical requirements and specifications" },
    ]
  },
  {
    title: "API Reference",
    icon: Code2,
    items: [
      { title: "Authentication", description: "Secure your API requests" },
      { title: "Game Launch API", description: "Launch games programmatically" },
      { title: "Player Management", description: "Handle player data and sessions" },
    ]
  },
  {
    title: "Game Integration",
    icon: Puzzle,
    items: [
      { title: "Game Configuration", description: "Configure game parameters and settings" },
      { title: "Event Handling", description: "Listen and respond to game events" },
      { title: "Currency Management", description: "Handle in-game currencies and transactions" },
    ]
  },
  {
    title: "Troubleshooting",
    icon: Wrench,
    items: [
      { title: "Common Issues", description: "Solutions to frequently encountered problems" },
      { title: "Error Codes", description: "Understanding error messages and codes" },
      { title: "Performance Optimization", description: "Tips for optimal performance" },
    ]
  }
]

export default function TechnicalDocs() {
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredSections = documentationSections.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0)

  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Technical Documentation</h2>
        </div>
        
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12"
          />
          <Button type="submit" size="icon" className="h-12 w-12">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filteredSections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <section.icon className="h-6 w-6 text-premium-gold" />
                  <CardTitle>{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[280px] pr-4">
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                      >
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
} 