import { Header } from "@/app/components/header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, Award, Zap, Shield } from "lucide-react"

export default function PartnershipsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
          </div>

          <div className="container relative mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-left space-y-6 animate-in slide-in-from-left duration-700">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                  Partner With
                  <span className="block text-premium-gold">Excellence</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-xl">
                  Join forces with the industry's most innovative game studio. Our partnerships drive success through cutting-edge technology, stunning visuals, and unmatched player engagement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-premium-gold text-black hover:bg-premium-gold/90 transition-all duration-300 group"
                  >
                    Become a Partner
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-600 transition-all duration-300"
                  >
                    View Success Stories
                  </Button>
                </div>
              </div>

              {/* Partner Image */}
              <div className="relative h-[600px] animate-in slide-in-from-right duration-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute -left-20 inset-y-0 w-1/3 bg-gradient-to-r from-black to-transparent z-10" />
                    <Image
                      src="/partnersimage.png"
                      alt="Peter & Sons Partnership Visualization"
                      fill
                      className="object-contain object-center"
                      priority
                      quality={100}
                    />
                    <div className="absolute -right-20 inset-y-0 w-1/3 bg-gradient-to-l from-black to-transparent z-10" />
                  </div>
                </div>

                {/* Ambient Light Effects */}
                <div className="absolute -top-20 right-40 w-32 h-32 bg-premium-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>

          {/* Vertical Lines Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_100%] pointer-events-none opacity-5" />
        </section>

        {/* Why Partner With Us Section */}
        <section className="py-24 bg-zinc-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We deliver more than just games. Our partnerships are built on innovation, reliability, and mutual success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-zinc-900 border-gray-800 p-6 hover:border-premium-gold/50 transition-colors">
                <Globe className="h-12 w-12 text-premium-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-gray-400">Access to 40+ regulated markets worldwide with multi-language support.</p>
              </Card>

              <Card className="bg-zinc-900 border-gray-800 p-6 hover:border-premium-gold/50 transition-colors">
                <Award className="h-12 w-12 text-premium-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Award-Winning</h3>
                <p className="text-gray-400">Industry-recognized games with proven player engagement metrics.</p>
              </Card>

              <Card className="bg-zinc-900 border-gray-800 p-6 hover:border-premium-gold/50 transition-colors">
                <Zap className="h-12 w-12 text-premium-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fast Integration</h3>
                <p className="text-gray-400">Quick and seamless integration process with dedicated technical support.</p>
              </Card>

              <Card className="bg-zinc-900 border-gray-800 p-6 hover:border-premium-gold/50 transition-colors">
                <Shield className="h-12 w-12 text-premium-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Compliance First</h3>
                <p className="text-gray-400">Certified in major jurisdictions with regular compliance updates.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,#111_50%,#000_75%)] bg-[length:400%_400%] animate-subtle-shift opacity-70" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_100%] pointer-events-none opacity-5" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Trusted By Industry Leaders</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Creating games for some of the biggest brands in the iGaming industry, we are expanding into new jurisdictions and closing new partner deals all the time.
              </p>
            </div>

            {/* Partner Logos */}
            <div className="w-full relative">
              <div className="w-full relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src="/currentpartners.png"
                  alt="Our Partners"
                  width={1200}
                  height={400}
                  className="w-full object-contain"
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Ambient Light Effects */}
          <div className="absolute -top-40 left-20 w-96 h-96 bg-premium-gold/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </section>

        {/* Partnership Form Section */}
        <section className="py-24 bg-zinc-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
                <p className="text-gray-400 text-lg">
                  Ready to elevate your gaming portfolio? Fill out the form below and our partnership team will get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-zinc-900 border-gray-800 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Company Name" 
                      className="bg-zinc-900 border-gray-800 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Website" 
                    className="bg-zinc-900 border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email"
                    placeholder="Email Address" 
                    className="bg-zinc-900 border-gray-800 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Tell us about your company and what you're looking for in a partnership" 
                    className="bg-zinc-900 border-gray-800 text-white placeholder:text-gray-500 min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-premium-gold text-black hover:bg-premium-gold/90 transition-all duration-300 group"
                >
                  Submit Partnership Request
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 