import { motion } from 'motion/react'
import { useState } from 'react'

interface Step {
  number: string
  title: string
  description: string
  details: string[]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
]

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="relative">
      {/* Desktop: Horizontal timeline */}
      <div className="hidden lg:block">
        {/* Progress line */}
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 rounded-full" />
          <motion.div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 -translate-y-1/2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          
          {/* Step indicators */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`
                  relative w-16 h-16 rounded-full flex items-center justify-center
                  font-bold text-lg transition-all duration-300
                  ${index <= activeStep 
                    ? 'bg-primary-600 text-white shadow-soft-lg' 
                    : 'bg-white text-gray-400 border-2 border-gray-200 hover:border-primary-300'
                  }
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.number}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Active step content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-10 shadow-soft-xl border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-6xl font-bold text-gradient mb-4">
                {steps[activeStep].number}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-xl text-gray-600">
                {steps[activeStep].description}
              </p>
            </div>
            <div className="space-y-4">
              {steps[activeStep].details.map((detail, i) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{detail}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Vertical accordion */}
      <div className="lg:hidden space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
              className={`
                w-full text-left p-6 rounded-2xl transition-all duration-300
                ${activeStep === index 
                  ? 'bg-primary-600 text-white shadow-soft-xl' 
                  : 'bg-white text-gray-900 shadow-soft hover:shadow-soft-lg'
                }
              `}
            >
              <div className="flex items-center gap-4">
                <span className={`
                  text-2xl font-bold
                  ${activeStep === index ? 'text-primary-100' : 'text-primary-600'}
                `}>
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className={activeStep === index ? 'text-primary-100' : 'text-gray-600'}>
                    {step.description}
                  </p>
                </div>
              </div>
            </button>
            
            {activeStep === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-2xl p-6 mt-2 shadow-soft"
              >
                <div className="space-y-3">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
