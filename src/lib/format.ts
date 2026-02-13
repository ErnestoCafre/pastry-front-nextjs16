function isValidPrice(price: unknown): price is number {
  return typeof price === 'number' && !isNaN(price) && price >= 0
}

export function formatPrice(
  price: unknown,
  options: {
    symbol?: string
    decimals?: number
    fallback?: string
  } = {}
): string {
  const { symbol = '$', decimals = 0, fallback = 'N/A' } = options

  if (!isValidPrice(price)) return fallback
  return `${symbol}${price.toLocaleString('es-AR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`
}
