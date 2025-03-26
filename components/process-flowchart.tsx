"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ProcessFlowchart() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Colors based on theme
  const primaryColor = theme === "dark" ? "#4ade80" : "#16a34a"
  const bgColor = theme === "dark" ? "#1e293b" : "#f8fafc"
  const textColor = theme === "dark" ? "#f8fafc" : "#0f172a"
  const lineColor = theme === "dark" ? "#475569" : "#cbd5e1"

  if (!mounted) return null

  return (
    <div className="w-full overflow-x-auto pb-10">
      <div className="min-w-[768px] w-full mx-auto">
        <svg
          viewBox="0 0 1000 400"
          className="w-full h-auto"
          style={{
            background: bgColor,
            borderRadius: "0.5rem",
            padding: "1rem",
          }}
        >
          {/* Connecting Lines */}
          <path
            d="M150,80 L850,80 M150,80 L150,200 M850,80 L850,200 M150,200 L250,200 M350,200 L450,200 M550,200 L650,200 M750,200 L850,200 M250,240 L250,320 M450,240 L450,320 M650,240 L650,320 M850,240 L850,320 M250,320 L850,320"
            stroke={lineColor}
            strokeWidth="2"
            fill="none"
          />

          {/* Arrows */}
          <polygon points="245,200 255,195 255,205" fill={primaryColor} />
          <polygon points="445,200 455,195 455,205" fill={primaryColor} />
          <polygon points="645,200 655,195 655,205" fill={primaryColor} />
          <polygon points="845,200 855,195 855,205" fill={primaryColor} />
          <polygon points="250,315 245,325 255,325" fill={primaryColor} />
          <polygon points="450,315 445,325 455,325" fill={primaryColor} />
          <polygon points="650,315 645,325 655,325" fill={primaryColor} />
          <polygon points="850,315 845,325 855,325" fill={primaryColor} />

          {/* Start Node */}
          <circle cx="500" cy="40" r="30" fill={primaryColor} />
          <text x="500" y="45" textAnchor="middle" fill="white" fontWeight="bold">
            Start
          </text>
          <line x1="500" y1="70" x2="500" y2="80" stroke={lineColor} strokeWidth="2" />

          {/* Process Nodes - Top Row */}
          <rect x="100" y="120" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="150" y="160" textAnchor="middle" fill="white" fontWeight="bold">
            Land
          </text>
          <text x="150" y="180" textAnchor="middle" fill="white" fontWeight="bold">
            Registration
          </text>

          <rect x="300" y="120" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="350" y="160" textAnchor="middle" fill="white" fontWeight="bold">
            Advertiser
          </text>
          <text x="350" y="180" textAnchor="middle" fill="white" fontWeight="bold">
            Matching
          </text>

          <rect x="500" y="120" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="550" y="160" textAnchor="middle" fill="white" fontWeight="bold">
            Auction &
          </text>
          <text x="550" y="180" textAnchor="middle" fill="white" fontWeight="bold">
            Bidding
          </text>

          <rect x="700" y="120" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="750" y="160" textAnchor="middle" fill="white" fontWeight="bold">
            Design &
          </text>
          <text x="750" y="180" textAnchor="middle" fill="white" fontWeight="bold">
            Implementation
          </text>

          {/* Process Nodes - Bottom Row */}
          <rect x="200" y="240" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="250" y="280" textAnchor="middle" fill="white" fontWeight="bold">
            Satellite
          </text>
          <text x="250" y="300" textAnchor="middle" fill="white" fontWeight="bold">
            Capture
          </text>

          <rect x="400" y="240" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="450" y="280" textAnchor="middle" fill="white" fontWeight="bold">
            Analytics &
          </text>
          <text x="450" y="300" textAnchor="middle" fill="white" fontWeight="bold">
            Reporting
          </text>

          <rect x="600" y="240" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="650" y="280" textAnchor="middle" fill="white" fontWeight="bold">
            Maintenance
          </text>
          <text x="650" y="300" textAnchor="middle" fill="white" fontWeight="bold">
            & Updates
          </text>

          <rect x="800" y="240" width="100" height="80" rx="10" fill={primaryColor} />
          <text x="850" y="280" textAnchor="middle" fill="white" fontWeight="bold">
            Campaign
          </text>
          <text x="850" y="300" textAnchor="middle" fill="white" fontWeight="bold">
            Completion
          </text>

          {/* End Node */}
          <circle cx="500" cy="360" r="30" fill={primaryColor} />
          <text x="500" y="365" textAnchor="middle" fill="white" fontWeight="bold">
            End
          </text>
          <line x1="500" y1="320" x2="500" y2="330" stroke={lineColor} strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

