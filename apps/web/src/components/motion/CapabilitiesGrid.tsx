import { motion } from 'motion/react'
import { useState } from 'react'

interface Capability {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

const capabilities: Capability[] = [
  {
    id: 'sourcing',
    title: 'European Sourcing Network',
    description: 'Access to premium growers across Denmark and Europe. We source the right trees for your specific market.',
    icon: 'globe',
    features: ['Denmark', 'Poland', 'Germany', 'Scotland', 'Ireland']
  },
  {
    id: 'production',
    title: 'Full Production Team',
    description: 'Experienced team on the ground. 10-30 seasonal workers for grading, netting, and palletizing.',
    icon: 'users',
    features: ['Professional grading', 'Quality sorting', 'Netting', 'Palletizing']
  },
  {
    id: 'quality',
    title: 'Professional Quality Control',
    description: 'Every tree professionally graded to consistent standards.',
    icon: 'badge',
    features: ['Premium grade', 'A-Grade', 'Standard', 'Custom specs']
  },
  {
    id: 'logistics',
    title: 'Reliable Logistics',
    description: 'Best-in-class logistics partners. Full truck loads, mixed loads, day-to-day delivery.',
    icon: 'truck',
    features: ['FTL delivery', 'Mixed loads', 'Day-to-day', 'Drop shipping']
  },
  {
    id: 'labeling',
    title: 'Private Label Options',
    description: 'Custom labeling and branding available. Your brand, our quality trees.',
    icon: 'tag',
    features: ['Custom tags', 'Branded netting', 'Your packaging', 'White label']
  },
  {
    id: 'speed',
    title: 'Speed & Flexibility',
    description: 'Quick turnaround on custom orders. We have the systems to deliver what you need, when you need it.',
    icon: 'bolt',
    features: ['Fast quotes', 'Flexible MOQ', 'Rush orders', 'Custom specs']
  }
]

const icons: Record<string, JSX.Element> = {
  globe: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  badge: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  truck: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
  ),
  tag: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  bolt: (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

export function CapabilitiesGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capabilities.map((cap, index) => (
        <motion.div
          key={cap.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          onMouseEnter={() => setHoveredId(cap.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="group relative"
        >
          <motion.div
            className={`
              relative h-full bg-white rounded-2xl p-8 
              border border-gray-100 overflow-hidden
              transition-all duration-500
              ${hoveredId === cap.id ? 'shadow-soft-xl' : 'shadow-soft'}
            `}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background gradient on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0"
              animate={{ opacity: hoveredId === cap.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-7 h-7 text-primary-600">
                  {icons[cap.icon]}
                </div>
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {cap.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {cap.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {cap.features.map((feature, i) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredId === cap.id ? 1 : 0.7,
                      scale: hoveredId === cap.id ? 1 : 0.95
                    }}
                    transition={{ delay: i * 0.05 }}
                    className={`
                      px-3 py-1 text-sm rounded-full
                      transition-colors duration-300
                      ${hoveredId === cap.id 
                        ? 'bg-primary-100 text-primary-700' 
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
