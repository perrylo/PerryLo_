export default function dropRight(arr, size=1) {
  if (!Array.isArray(arr) || size<1) return arr

  return arr.slice(0, arr.length-size)
}