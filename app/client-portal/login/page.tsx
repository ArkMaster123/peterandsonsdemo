import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MountainIcon } from "lucide-react"

export default function ClientPortalLogin() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-light-gray p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
            <MountainIcon className="h-8 w-8 text-deep-navy" />
            <span className="text-2xl font-bold text-deep-navy">Peter & Sons</span>
          </Link>
        </div>
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-deep-navy">Client Portal Access</CardTitle>
            <CardDescription className="text-charcoal/80">
              Enter your credentials to access your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm text-premium-gold hover:underline" prefetch={false}>
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-premium-gold text-white hover:bg-premium-gold/90">
                Login
              </Button>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-charcoal/60">Or continue with</span>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Login with SSO
              </Button>
            </form>
            <div className="mt-6 text-center text-sm">
              <p className="text-charcoal/80">
                Don't have access?{" "}
                <Link href="#" className="font-medium text-premium-gold hover:underline" prefetch={false}>
                  Request a Partnership
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
