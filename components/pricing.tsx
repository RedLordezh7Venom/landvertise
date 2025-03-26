import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Pricing</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that works best for your advertising or land-listing needs.
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Landowner Basic</h3>
            <p className="text-muted-foreground">For individual landowners with a single property.</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-bold">$0</span>
            <span className="ml-1 text-muted-foreground">/month</span>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>List one property</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Basic analytics</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>5% commission on deals</span>
            </li>
          </ul>
          <Button className="mt-6" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
        <div className="flex flex-col rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Advertiser Standard</h3>
            <p className="text-muted-foreground">For businesses looking to create satellite advertisements.</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-bold">$99</span>
            <span className="ml-1 text-muted-foreground">/month</span>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Unlimited auction participation</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Advanced analytics</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Design consultation</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Priority support</span>
            </li>
          </ul>
          <Button className="mt-6" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
        <div className="flex flex-col rounded-lg border bg-background p-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <p className="text-muted-foreground">For large landowners or major advertising campaigns.</p>
          </div>
          <div className="mt-4 flex items-baseline">
            <span className="text-4xl font-bold">Custom</span>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Multiple property management</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Custom campaign creation</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>API access</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              <span>Reduced commission rates</span>
            </li>
          </ul>
          <Button className="mt-6" variant="outline" asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

