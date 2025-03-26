import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session || session.user.userType !== "LANDOWNER") {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const json = await req.json()

    const property = await prisma.landProperty.create({
      data: {
        userId: session.user.id,
        latitude: json.latitude,
        longitude: json.longitude,
        sizeInSqm: json.sizeInSqm,
        description: json.description,
        askingPrice: json.askingPrice,
        status: "AVAILABLE",
        satelliteVisibility: json.satelliteVisibility,
        imageUrl: json.imageUrl,
      }
    })

    return NextResponse.json(property)
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status")
    const page = parseInt(searchParams.get("page") ?? "1")
    const perPage = parseInt(searchParams.get("perPage") ?? "10")

    const properties = await prisma.landProperty.findMany({
      where: {
        status: status as PropertyStatus || undefined,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          }
        }
      },
      skip: (page - 1) * perPage,
      take: perPage,
    })

    return NextResponse.json(properties)
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    )
  }
}