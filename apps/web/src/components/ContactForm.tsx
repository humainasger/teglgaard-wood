import { useState } from 'react'

type ProductType = 'trees' | 'greenery' | 'both' | null
type VolumeRange = 'under-1000' | '1000-5000' | '5000-10000' | '10000-50000' | '50000+' | null
type QualityPreference = 'premium' | 'mixed' | 'budget' | 'not-sure' | null

interface FormData {
  productType: ProductType
  country: string
  city: string
  volume: VolumeRange
  greeneryTons: string
  quality: QualityPreference
  deliveryMonth: string
  companyName: string
  contactName: string
  email: string
  phone: string
  message: string
}

const countries = [
  'Germany',
  'France',
  'United Kingdom',
  'Netherlands',
  'Belgium',
  'Denmark',
  'Austria',
  'Switzerland',
  'Poland',
  'Czech Republic',
  'Other',
]

const volumeOptions = [
  { value: 'under-1000', label: 'Under 1,000 trees' },
  { value: '1000-5000', label: '1,000 - 5,000 trees' },
  { value: '5000-10000', label: '5,000 - 10,000 trees' },
  { value: '10000-50000', label: '10,000 - 50,000 trees' },
  { value: '50000+', label: '50,000+ trees' },
]

const qualityOptions = [
  { value: 'premium', label: 'Premium only' },
  { value: 'mixed', label: 'Mixed grades' },
  { value: 'budget', label: 'Budget-focused' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const months = [
  'October',
  'November - Early',
  'November - Late',
  'December - Week 1',
  'December - Week 2',
  'December - Week 3',
  'Multiple deliveries',
]

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    productType: null,
    country: '',
    city: '',
    volume: null,
    greeneryTons: '',
    quality: null,
    deliveryMonth: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    message: '',
  })

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, 5))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.productType !== null
      case 2:
        return formData.country !== ''
      case 3:
        if (formData.productType === 'greenery') {
          return formData.greeneryTons !== ''
        }
        return formData.volume !== null
      case 4:
        return formData.deliveryMonth !== ''
      case 5:
        return (
          formData.companyName !== '' &&
          formData.contactName !== '' &&
          formData.email !== '' &&
          formData.phone !== ''
        )
      default:
        return false
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // For now, just simulate a submission
    // In production, this would POST to an API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Log to console for development
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      alert('There was an error submitting your request. Please try calling us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you!</h3>
        <p className="text-gray-600 mb-6">
          We've received your quote request. Our team will be in touch within 24 hours.
        </p>
        <p className="text-gray-600">
          In the meantime, feel free to call us at{' '}
          <a href="tel:+4540737078" className="text-primary-600 font-medium hover:underline">
            +45 40 73 70 78
          </a>
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                s === step
                  ? 'bg-primary-600 text-white'
                  : s < step
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              {s < step ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Product Type */}
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What do you need?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: 'trees', label: 'Christmas Trees' },
              { value: 'greenery', label: 'Decorative Greenery' },
              { value: 'both', label: 'Both' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => updateField('productType', option.value as ProductType)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  formData.productType === option.value
                    ? 'border-primary-600 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <span className="font-medium text-gray-900">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Location */}
      {step === 2 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Where do you need delivery?</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                value={formData.country}
                onChange={(e) => updateField('country', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City / Region</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => updateField('city', e.target.value)}
                placeholder="e.g., Munich, Bavaria"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Volume */}
      {step === 3 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {formData.productType === 'greenery'
              ? 'How much greenery do you need?'
              : 'How many trees are you looking for?'}
          </h3>
          
          {formData.productType !== 'greenery' && (
            <div className="space-y-3">
              {volumeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateField('volume', option.value as VolumeRange)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                    formData.volume === option.value
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <span className="font-medium text-gray-900">{option.label}</span>
                </button>
              ))}
            </div>
          )}

          {(formData.productType === 'greenery' || formData.productType === 'both') && (
            <div className={formData.productType === 'both' ? 'mt-6' : ''}>
              {formData.productType === 'both' && (
                <p className="text-sm text-gray-600 mb-3">And for greenery:</p>
              )}
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estimated greenery (tons)
              </label>
              <input
                type="text"
                value={formData.greeneryTons}
                onChange={(e) => updateField('greeneryTons', e.target.value)}
                placeholder="e.g., 5 tons"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          )}
        </div>
      )}

      {/* Step 4: Quality & Timing */}
      {step === 4 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality and timing</h3>
          
          {formData.productType !== 'greenery' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Quality preference</label>
              <div className="grid grid-cols-2 gap-3">
                {qualityOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateField('quality', option.value as QualityPreference)}
                    className={`p-3 rounded-lg border-2 text-sm transition-all ${
                      formData.quality === option.value
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              When do you need delivery?
            </label>
            <select
              value={formData.deliveryMonth}
              onChange={(e) => updateField('deliveryMonth', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select timing</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 5: Contact Details */}
      {step === 5 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your contact details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company name *</label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => updateField('companyName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact name *</label>
              <input
                type="text"
                value={formData.contactName}
                onChange={(e) => updateField('contactName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional message (optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                rows={3}
                placeholder="Any specific requirements or questions?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-3 text-gray-700 font-medium hover:text-gray-900"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 5 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canProceed()}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              canProceed()
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              canProceed() && !isSubmitting
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        )}
      </div>
    </div>
  )
}
