import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import type { ReactNode } from 'react'

interface ExpandableCardProps {
  title: string
  description: string
  icon: ReactNode
  expandedContent?: ReactNode
  index: number
}

export function ExpandableCard({ 
  title, 
  description, 
  icon,
  expandedContent,
  index
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative"
    >
      <motion.div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          relative bg-white rounded-2xl p-8 cursor-pointer
          border border-gray-100
          transition-all duration-300
          ${isExpanded ? 'shadow-soft-xl' : 'shadow-soft hover:shadow-soft-lg'}
        `}
        layout
      >
        {/* Number badge */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
          {index + 1}
        </div>

        <div className="flex items-start gap-4">
          {/* Icon */}
          <motion.div 
            className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-7 h-7 text-primary-600">
              {icon}
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 text-gray-400"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
            <p className="text-gray-600 mt-2">{description}</p>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && expandedContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-gray-100">
                {expandedContent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
