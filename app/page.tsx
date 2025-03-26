import Link from "next/link"
import { ArrowRight, Globe, MapPin, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">GeoAdSpace</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="/how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Process
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Login
              </Link>
              <Button asChild size="sm" className="transition-transform duration-200 hover:scale-105">
                <Link href="/register">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <AnimatedSection animation="fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Turn Unused Land into <span className="text-primary">Advertising Space</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Connect with landowners and advertisers to transform empty spaces into valuable advertising real estate
                visible on satellite imagery.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400} className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/register">
                  Start Advertising <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/list-property">List Your Property</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <AnimatedSection
            animation="fade-up"
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
              Satellite Advertising Revolution
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our platform connects advertisers looking for unique exposure with landowners who have unused space.
              Create advertisements visible from satellite imagery and mapping platforms.
            </p>
          </AnimatedSection>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8">
            <AnimatedSection
              animation="slide-in-left"
              delay={100}
              className="relative mt-8 overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <MapPin className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Geo-Targeted Advertising</h3>
                  <p className="text-sm text-muted-foreground">
                    Place your brand on the map, literally. Target specific geographic locations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection
              animation="fade-up"
              delay={200}
              className="relative mt-8 overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Zap className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Auction Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive bidding ensures fair market value for landowners and advertisers.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection
              animation="slide-in-right"
              delay={300}
              className="relative mt-8 overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Globe className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Global Visibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Your advertisement visible to anyone viewing satellite imagery or maps online.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        <section id="how-it-works" className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <AnimatedSection animation="fade-up">
            <HowItWorks />
          </AnimatedSection>
        </section>
        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <AnimatedSection animation="fade-up">
            <Features />
          </AnimatedSection>
        </section>
        <section id="testimonials" className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
          <AnimatedSection animation="fade-up">
            <Testimonials />
          </AnimatedSection>
        </section>
        <section id="pricing" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <AnimatedSection animation="fade-up">
            <Pricing />
          </AnimatedSection>
        </section>
        <section className="container py-8 md:py-12 lg:py-24">
          <AnimatedSection
            animation="fade-up"
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">Ready to Get Started?</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join our platform today and transform unused land into valuable advertising space.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/register">
                  Start Advertising <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/list-property">List Your Property</Link>
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Globe className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              &copy; {new Date().getFullYear()} GeoAdSpace. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

