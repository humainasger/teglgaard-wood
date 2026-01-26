// Shared types and utilities for Teglgaard Wood

export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  country: string
}

export interface Order {
  id: string
  customerId: string
  items: OrderItem[]
  status: OrderStatus
  createdAt: Date
  deliveryDate?: Date
}

export interface OrderItem {
  productId: string
  quantity: number
  grade: TreeGrade
  height: TreeHeight
  unitPrice: number
}

export type OrderStatus = 'draft' | 'confirmed' | 'in_production' | 'shipped' | 'delivered' | 'cancelled'

export type TreeGrade = 'premium' | 'a-grade' | 'standard'

export type TreeHeight = '100-125' | '125-150' | '150-175' | '175-200' | '200-225' | '225-250' | '250+'

export const TREE_GRADES: Record<TreeGrade, { name: string; description: string }> = {
  premium: {
    name: 'Premium',
    description: 'Top quality trees with perfect shape and dense foliage'
  },
  'a-grade': {
    name: 'A-Grade',
    description: 'Excellent quality trees with minimal imperfections'
  },
  standard: {
    name: 'Standard',
    description: 'Good quality trees suitable for general retail'
  }
}
