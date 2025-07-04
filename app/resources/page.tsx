import { Header } from "@/app/components/header"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Access documentation, guides, and support materials
        </p>
        {/* Add your resources content here */}
      </main>
    </div>
  )
} 