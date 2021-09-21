# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anacko/lotide`

**Require it:**

`const _ = require('@anacko/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: returns (object) how many times each letter appears in a string.
* `countOnly(allItems, itemsToCount)`: returns how many times each item in itemsToCount occurs in main list of all items.
* `eqArrays(a, b)`: compares if two arrays *a* and *b* are equal, by the element
* `eqObjects(object1, object2)`: compares if two objects are equal, by the element
* `findKey(obj, callback)`: returns the key from an object depending on defined criteria by a callback function
* `findKey(obj, val)`: returns the key from an object defined by its value
* `head(arr)`: gives the first element of an array
* `letterPositions(sentence)`: returns an object with the positions of each letter in a sentence
* `map(array, callback)`: returns an array with the result of the callback function applied on each element of the array
* `middle(arr)`: returns the midlle element of an array. If length is even, returns an array with the two elements in the middle.
* `tail(arr)`: returns the array without its first element
* `takeUntil(array, callback)`: returns the elements of an array from the beginning until the criteria defined by the callback is true
* `without(source, itemsToRemove)`: returns the source array without the items listed in itemsToRemove