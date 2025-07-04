"use client"

import { useState } from "react"
import { MessageSquarePlus, Search, Clock, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const supportTickets = [
  {
    id: "T-1234",
    title: "Integration Issue",
    status: "open",
    priority: "high",
    created: "2024-02-15T10:30:00",
    lastUpdate: "2024-02-15T14:20:00",
  },
  {
    id: "T-1233",
    title: "API Documentation Question",
    status: "in-progress",
    priority: "medium",
    created: "2024-02-14T15:45:00",
    lastUpdate: "2024-02-15T09:15:00",
  },
  {
    id: "T-1232",
    title: "Game Launch Error",
    status: "resolved",
    priority: "high",
    created: "2024-02-13T08:20:00",
    lastUpdate: "2024-02-14T16:30:00",
  },
]

const faqs = [
  {
    question: "How do I integrate your games into my platform?",
    answer: "Our games can be integrated through our API using either our JavaScript SDK or REST API endpoints. Check our Technical Documentation for detailed integration guides and code examples."
  },
  {
    question: "What are the minimum technical requirements?",
    answer: "Our games require a modern web browser with WebGL support. For optimal performance, we recommend a minimum of 8GB RAM and a dedicated graphics card. Mobile devices should have iOS 12+ or Android 7+."
  },
  {
    question: "How do I handle player authentication?",
    answer: "Player authentication can be handled through our secure token-based system. You can generate player tokens using your API key and pass them during game initialization. See our Authentication Guide for more details."
  },
  {
    question: "What currencies and payment methods are supported?",
    answer: "We support multiple currencies including USD, EUR, GBP, and more. Payment processing is handled through your platform's payment system, which we integrate with via our Transaction API."
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "open":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />
    case "in-progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "resolved":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    default:
      return <HelpCircle className="h-4 w-4" />
  }
}

export default function Support() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Support Center</h2>
          <Button>
            <MessageSquarePlus className="mr-2 h-4 w-4" />
            New Ticket
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
              <AlertCircle className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">4 tickets this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.5h</div>
              <p className="text-xs text-muted-foreground">-30min from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">+2% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Recent Tickets</CardTitle>
              <CardDescription>View and manage your support tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search tickets..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                  />
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tickets</SelectItem>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center justify-between rounded-lg border p-4"
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(ticket.status)}
                        <div>
                          <p className="font-medium">{ticket.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {ticket.id} • {new Date(ticket.created).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
} 