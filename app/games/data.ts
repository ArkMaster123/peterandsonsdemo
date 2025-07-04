export type Game = {
  id: number
  title: string
  query: string
  volatility: "Low" | "Medium" | "High" | "Very High"
  rtp: string
  maxWin: string
  theme: "Mythology" | "Adventure" | "Sci-Fi" | "Fantasy" | "Classic"
  features: ("Free Spins" | "Jackpot" | "Megaways" | "Bonus Buy")[]
}

export const gamesData: Game[] = [
  {
    id: 1,
    title: "Valkyrie's Valor",
    query: "epic norse mythology warrior slot game art",
    volatility: "High",
    rtp: "96.5%",
    maxWin: "50,000x",
    theme: "Mythology",
    features: ["Free Spins", "Bonus Buy"],
  },
  {
    id: 2,
    title: "Goblin's Gold",
    query: "mischievous goblin in a treasure cave slot game art",
    volatility: "Medium",
    rtp: "95.8%",
    maxWin: "5,000x",
    theme: "Fantasy",
    features: ["Free Spins", "Jackpot"],
  },
  {
    id: 3,
    title: "Cosmic Quest",
    query: "futuristic astronaut exploring alien planet slot game art",
    volatility: "Very High",
    rtp: "97.1%",
    maxWin: "100,000x",
    theme: "Sci-Fi",
    features: ["Free Spins", "Megaways", "Bonus Buy"],
  },
  {
    id: 4,
    title: "Pharaoh's Fortune",
    query: "ancient egyptian pharaoh in a golden tomb slot game art",
    volatility: "Medium",
    rtp: "96.2%",
    maxWin: "10,000x",
    theme: "Adventure",
    features: ["Free Spins", "Jackpot"],
  },
  {
    id: 5,
    title: "Jungle Jackpot",
    query: "lush jungle with hidden treasures and animals slot game art",
    volatility: "Low",
    rtp: "95.5%",
    maxWin: "2,500x",
    theme: "Adventure",
    features: ["Free Spins"],
  },
  {
    id: 6,
    title: "Dragon's Hoard",
    query: "majestic dragon guarding a mountain of gold slot game art",
    volatility: "High",
    rtp: "96.8%",
    maxWin: "75,000x",
    theme: "Fantasy",
    features: ["Free Spins", "Bonus Buy", "Jackpot"],
  },
  {
    id: 7,
    title: "Space Invaders Megaways",
    query: "retro pixelated space invaders slot game art",
    volatility: "High",
    rtp: "96.3%",
    maxWin: "20,000x",
    theme: "Sci-Fi",
    features: ["Megaways"],
  },
  {
    id: 8,
    title: "Zeus's Thunder",
    query: "powerful zeus on mount olympus with lightning slot game art",
    volatility: "Very High",
    rtp: "97.0%",
    maxWin: "150,000x",
    theme: "Mythology",
    features: ["Free Spins", "Bonus Buy"],
  },
  {
    id: 9,
    title: "Classic 7s",
    query: "classic fruit machine with sevens and bells slot game art",
    volatility: "Low",
    rtp: "95.0%",
    maxWin: "1,000x",
    theme: "Classic",
    features: ["Jackpot"],
  },
  // Add more games to reach 51
  ...Array.from({ length: 42 }, (_, i) => ({
    id: 10 + i,
    title: `Awesome Game ${i + 1}`,
    query: `abstract slot game art ${i}`,
    volatility: (["Low", "Medium", "High", "Very High"] as const)[i % 4],
    rtp: `${(95 + Math.random() * 2).toFixed(1)}%`,
    maxWin: `${Math.floor(Math.random() * 10 + 1) * 1000}x`,
    theme: (["Mythology", "Adventure", "Sci-Fi", "Fantasy", "Classic"] as const)[i % 5],
    features: (
      ["Free Spins", "Jackpot", "Megaways", "Bonus Buy"] as ("Free Spins" | "Jackpot" | "Megaways" | "Bonus Buy")[]
    ).filter(() => Math.random() > 0.5),
  })),
]
