export default function dropRightWhile(arr, predicate) {
  if (!Array.isArray(arr) || typeof predicate !== 'function') return arr

  let i = arr.length-1
  while (predicate(arr[i], i, arr) && i > -1) {
    --i
  }
  ++i

  return arr.slice(0, i)
}