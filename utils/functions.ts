export function addOrdinalSuffix(num: number): string {
  const j = num % 10
  const k = num % 100

  if (j === 1 && k !== 11) {
    return num.toLocaleString() + 'st'
  }
  if (j === 2 && k !== 12) {
    return num.toLocaleString() + 'nd'
  }
  if (j === 3 && k !== 13) {
    return num.toLocaleString() + 'rd'
  }
  return num.toLocaleString() + 'th'
}
