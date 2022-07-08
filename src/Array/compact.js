export default function compact(arr) {
  if (!Array.isArray) return arr

  return arr.filter(e => !!e)
}