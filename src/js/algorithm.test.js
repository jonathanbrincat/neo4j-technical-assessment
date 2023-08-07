import { expect, test } from 'vitest'
import { example1, example2, example3 } from './examples'
import { mapStringToArray } from './utils'
import getFastestSlideDown from './algorithm'

test('Solution to example 1', () => {
  expect(getFastestSlideDown(mapStringToArray(example1))).toBe(14)
})

test('Solution to example 2', () => {
  expect(getFastestSlideDown(mapStringToArray(example2))).toBe(16)
})

test('Solution to example 3', () => {
  expect(getFastestSlideDown(mapStringToArray(example3))).toBe(447)
})
