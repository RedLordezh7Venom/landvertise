import Image from "next/image"

export function Testimonials() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied customers who have transformed unused land into valuable advertising space.
          </p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-background p-6">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Avatar"
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Landowner</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            "My family farm had unused fields that were generating no income. With GeoAdSpace, we're now earning passive
            income while maintaining our land."
          </p>
        </div>
        <div className="rounded-lg border bg-background p-6">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Avatar"
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Michael Chen</h3>
              <p className="text-sm text-muted-foreground">Marketing Director</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            "Our brand visibility increased dramatically after our satellite ad campaign. It's a completely unique
            advertising channel that sets us apart."
          </p>
        </div>
        <div className="rounded-lg border bg-background p-6">
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Avatar"
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Emma Rodriguez</h3>
              <p className="text-sm text-muted-foreground">Real Estate Developer</p>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            "We had land waiting for development that was sitting idle. GeoAdSpace helped us generate revenue during the
            planning phase."
          </p>
        </div>
      </div>
    </div>
  )
}

