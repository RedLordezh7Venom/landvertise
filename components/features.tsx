import { MapPin, Zap, Globe, BarChart4, Users, Lock } from "lucide-react"

export function Features() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform provides all the tools necessary for successful satellite advertising campaigns.
          </p>
        </div>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Location Analytics</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Detailed analytics on location visibility, traffic patterns, and potential viewer demographics.
          </p>
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Auction System</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Transparent bidding platform with real-time updates and competitive pricing.
          </p>
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Global Reach</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Your advertisements visible on major mapping platforms and satellite imagery services.
          </p>
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <BarChart4 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Performance Tracking</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Monitor views, engagement, and ROI with our comprehensive analytics dashboard.
          </p>
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Matchmaking</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Smart algorithms match advertisers with the perfect land for their campaign goals.
          </p>
        </div>
        <div className="grid gap-1">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-bold">Secure Contracts</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Digital contracts and secure payment processing for all transactions.
          </p>
        </div>
      </div>
    </div>
  )
}

