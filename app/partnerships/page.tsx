import { Header } from "@/app/components/header"

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-4xl font-bold mb-6">Partnerships</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Join forces with Peter & Sons to create exceptional gaming experiences
        </p>
        {/* Add your partnerships content here */}
      </main>
    </div>
  )
} 