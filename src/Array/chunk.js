export default function chunk(arr, size=1) {
  if (!Array.isArray(arr) || size < 2) return arr

  const newArr = []
  for (let i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size))
  }
  return newArr
}

