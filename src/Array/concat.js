export default function concat(arr, ...values) {
  if (!Array.isArray(arr)) return arr

  const tmp = []
  values.forEach(v => {
    if (Array.isArray(v)) {
      tmp.push(...v)
    } else {
      tmp.push(v)
    }
  })
  return [...arr, ...tmp]
}