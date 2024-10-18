const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
    maximumFractionDigits: 10
  })
  
  export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number / 1000000000000000000)
  }