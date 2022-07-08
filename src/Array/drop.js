export default function drop(arr, size=1) {
  if (!Array.isArray(arr) || size<1) return arr

  return arr.slice(size)
}