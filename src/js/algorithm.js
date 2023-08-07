export default function (pyramid = []) {
  if (pyramid && pyramid.length === 0) return 0

  // tally array will be used to store the calculated outputs as we flatten the pyramid; prime with the initial values from bottom of the pyramid
  const tally = [...pyramid[pyramid.length - 1]]

  // commence our loop from the penultimate tier; then further loop/iterate each target value in that tier
  for (let y = pyramid.length - 2; y >= 0; y--) {
    for (let x = 0, l = pyramid[y + 1].length - 1; x < l; x++) {
      // calculate the lowest sum in this segment and commit to tallying array; overwriting any previous state
      tally[x] = pyramid[y][x] + Math.min(tally[x], tally[x + 1])
    }
  }

  return tally[0]
}
