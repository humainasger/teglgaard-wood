import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

interface Step {
  number: string
  title: string
  description: string
  details: string[]
  image: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understanding your needs',
    details: [
      'Species and quality requirements',
      'Volume and size specifications',
      'Delivery timeline and logistics',
      'Budget and pricing discussion'
    ],
    image: '/images/process/consultation'
  },
  {
    number: '02',
    title: 'Sourcing',
    description: 'Selecting the right growers',
    details: [
      'Access to European grower network',
      'Quality matching to your market',
      'Supply confirmation and reservation',
      'Pricing negotiation'
    ],
    image: '/images/process/sourcing'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Grade, net, palletize',
    details: [
      'Professional grading team on-site',
      'Quality sorting and classification',
      'Netting and packaging',
      'Pallet optimization'
    ],
    image: '/images/process/production'
  },
  {
    number: '04',
    title: 'Quality Check',
    description: 'Professional inspection',
    details: [
      'Final quality verification',
      'Documentation and certificates',
      'Photo documentation available',
      'Issue resolution if needed'
    ],
    image: '/images/process/quality'
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'To your location',
    details: [
      'Best-in-class logistics partners',
      'Full truck or mixed loads',
      'Real-time tracking available',
      'Day-to-day delivery capability'
    ],
    image: '/images/process/delivery'
  }
]

function ProcessStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-[80vh] flex items-center py-12"
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Content */}
        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Step number */}
          <motion.div 
            className="inline-flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-7xl lg:text-8xl font-bold text-gradient bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              {step.number}
            </span>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-300 rounded-full" />
          </motion.div>

          <motion.h3 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {step.title}
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {step.description}
          </motion.p>

          {/* Details list */}
          <div className="space-y-4">
            {step.details.map((detail, i) => (
              <motion.div
                key={detail}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg text-gray-700">{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div 
          className={`relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-xl">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent z-10" />
            
            <picture>
              <source srcSet={`${step.image}.webp`} type="image/webp" />
              <img
                src={`${step.image}.jpg`}
                alt={step.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>

          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-white rounded-2xl p-4 lg:p-6 shadow-soft-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-3xl lg:text-4xl font-bold text-primary-600">
              Step {index + 1}
            </div>
            <div className="text-sm text-gray-500">of 5</div>
          </motion.div>

          {/* Decorative element */}
          <div className={`absolute -z-10 w-full h-full rounded-3xl bg-primary-100 ${isEven ? '-bottom-6 -right-6' : '-bottom-6 -left-6'}`} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function ProcessStepsScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative">
      {/* Progress indicator */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-3">
          {steps.map((step, index) => (
            <a
              key={step.number}
              href={`#step-${index + 1}`}
              className="group flex items-center gap-3"
            >
              <span className="text-xs font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {step.title}
              </span>
              <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-primary-600 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-8 lg:space-y-0">
        {steps.map((step, index) => (
          <div key={step.number} id={`step-${index + 1}`}>
            <ProcessStep step={step} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}
