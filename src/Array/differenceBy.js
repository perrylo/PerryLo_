export default function differenceBy(arr1, arr2, modFn) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || typeof modFn !== 'function' ) return []

  const arr2Modified = arr2.map(modFn)

  const diff = []
  arr1.forEach(v => {
    if (!arr2Modified.includes(modFn(v))) {
      diff.push(v)
    }
  })
  return diff
}