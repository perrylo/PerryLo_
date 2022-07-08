export default function difference(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return []

  const diff = []
  arr1.forEach(v => {
    if (!arr2.includes(v)) {
      diff.push(v)
    }
  })
  return diff
}