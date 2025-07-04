"use client"

import { LineChart as LineChartIcon, Users, Timer, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "00:00", players: 2100, retention: 85, revenue: 1200 },
  { name: "04:00", players: 1800, retention: 82, revenue: 1100 },
  { name: "08:00", players: 2800, retention: 88, revenue: 1800 },
  { name: "12:00", players: 3200, retention: 91, revenue: 2200 },
  { name: "16:00", players: 3800, retention: 90, revenue: 2600 },
  { name: "20:00", players: 3500, retention: 87, revenue: 2400 },
  { name: "24:00", players: 2900, retention: 86, revenue: 1900 },
]

const gameMetrics = [
  { game: "Cosmic Quest", players: "1.2k", avgSession: "24m", winRate: "32%" },
  { game: "Valkyrie's Valor", players: "950", avgSession: "18m", winRate: "28%" },
  { game: "Goblin's Gold", players: "850", avgSession: "15m", winRate: "35%" },
  { game: "Ocean's Fortune", players: "720", avgSession: "22m", winRate: "30%" },
  { game: "Jungle Jackpot", players: "680", avgSession: "19m", winRate: "33%" },
]

export default function GameAnalytics() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Game Analytics</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Players</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,842</div>
            <p className="text-xs text-muted-foreground">+12% from last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session Time</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18.5m</div>
            <p className="text-xs text-muted-foreground">+5% from last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">31.4%</div>
            <p className="text-xs text-muted-foreground">-2% from last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Player Retention</CardTitle>
            <LineChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+3% from last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>24-Hour Analytics</CardTitle>
            <CardDescription>Player activity and retention over the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Line type="monotone" dataKey="players" stroke="hsl(var(--premium-gold))" strokeWidth={2} />
                <Line type="monotone" dataKey="retention" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Game Performance Metrics</CardTitle>
            <CardDescription>Current active games and their metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Game</TableHead>
                  <TableHead>Players</TableHead>
                  <TableHead>Avg. Session</TableHead>
                  <TableHead className="text-right">Win Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gameMetrics.map((game) => (
                  <TableRow key={game.game}>
                    <TableCell className="font-medium">{game.game}</TableCell>
                    <TableCell>{game.players}</TableCell>
                    <TableCell>{game.avgSession}</TableCell>
                    <TableCell className="text-right">{game.winRate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
} 