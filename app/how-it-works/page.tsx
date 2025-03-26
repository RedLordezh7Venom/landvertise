import Link from "next/link"
import { ArrowLeft, ArrowRight, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { ProcessFlowchart } from "@/components/process-flowchart"

export default function HowItWorksPage() {
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
                href="/#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                How It Works
              </Link>
              <Link
                href="/#pricing"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Pricing
              </Link>
              <Link
                href="/#testimonials"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonials
              </Link>
              <Link
                href="/how-it-works"
                className="flex items-center text-sm font-medium text-primary transition-colors hover:text-primary"
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
        <section className="container py-12 md:py-16 lg:py-20">
          <AnimatedSection animation="fade-in" className="mb-12 text-center">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              How <span className="text-primary">GeoAdSpace</span> Works
            </h1>
            <p className="mt-4 max-w-[42rem] mx-auto text-muted-foreground sm:text-xl">
              A detailed look at our process from land registration to global satellite visibility
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="mb-16">
            <ProcessFlowchart />
          </AnimatedSection>

          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <AnimatedSection animation="slide-in-left" delay={100}>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h2 className="text-2xl font-bold">Land Registration</h2>
                <p className="text-muted-foreground">
                  Landowners register their property on our platform by providing location details, size, and photos.
                  Our system analyzes the property for satellite visibility potential and suggests an optimal asking
                  price based on location and size.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Complete property profile with GPS coordinates</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Automated satellite visibility assessment</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Legal verification of ownership</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h2 className="text-2xl font-bold">Advertiser Matching</h2>
                <p className="text-muted-foreground">
                  Advertisers browse available properties or set specific criteria for their campaign needs. Our
                  matching algorithm suggests optimal properties based on visibility, location relevance, and budget
                  constraints.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>AI-powered property recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Demographic and traffic analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Campaign goal optimization</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-left" delay={300}>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h2 className="text-2xl font-bold">Auction & Bidding</h2>
                <p className="text-muted-foreground">
                  Properties can be listed with fixed pricing or through our auction system. Advertisers place bids, and
                  landowners can review offers. Our transparent bidding platform ensures fair market value for both
                  parties.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Real-time bidding notifications</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Secure escrow payment system</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Flexible contract terms</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={400}>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h2 className="text-2xl font-bold">Design & Implementation</h2>
                <p className="text-muted-foreground">
                  Once a match is made, our design team works with advertisers to create satellite-visible designs. We
                  coordinate with local contractors for implementation, ensuring the advertisement meets specifications
                  for satellite visibility.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Professional design consultation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Vetted contractor network</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Environmentally friendly materials</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-left" delay={500}>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  5
                </div>
                <h2 className="text-2xl font-bold">Satellite Capture</h2>
                <p className="text-muted-foreground">
                  We coordinate with satellite imagery providers to ensure your advertisement is captured in upcoming
                  imagery updates. Our relationships with mapping platforms help expedite the refresh cycle for your
                  location.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Satellite imagery schedule tracking</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Mapping platform partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Verification of visibility</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" delay={600}>
              <div className="space-y-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  6
                </div>
                <h2 className="text-2xl font-bold">Analytics & Reporting</h2>
                <p className="text-muted-foreground">
                  Track the performance of your satellite advertisement with our comprehensive analytics dashboard.
                  Monitor views, engagement metrics, and ROI. Receive regular reports and insights to optimize your
                  campaign.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>View count estimation</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Campaign performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-4 w-4 text-primary mt-1" />
                    <span>Competitive benchmarking</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={700} className="mt-16 text-center">
            <h2 className="text-3xl font-bold">Ready to Transform Unused Land?</h2>
            <p className="mt-4 text-muted-foreground max-w-[42rem] mx-auto">
              Whether you're a landowner looking to monetize your property or an advertiser seeking unique exposure,
              GeoAdSpace has you covered.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
                <Link href="/contact">Contact Our Team</Link>
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

