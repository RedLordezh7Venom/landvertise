import Image from "next/image"

export function HowItWorks() {
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our platform makes it easy to connect landowners with advertisers for satellite-visible advertising.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              1
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">List Your Land</h3>
              <p className="text-muted-foreground">
                Landowners register their property with location, size, and asking price.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              2
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Advertisers Bid</h3>
              <p className="text-muted-foreground">
                Companies browse available land and place bids in our auction system.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              3
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Create & Install</h3>
              <p className="text-muted-foreground">
                Once matched, we help coordinate the creation and installation of the advertisement.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              4
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Global Visibility</h3>
              <p className="text-muted-foreground">
                Your advertisement appears on satellite imagery and mapping platforms worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/placeholder.svg?height=550&width=550"
        width={550}
        height={550}
        alt="How GeoAdSpace works"
        className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
      />
    </div>
  )
}

