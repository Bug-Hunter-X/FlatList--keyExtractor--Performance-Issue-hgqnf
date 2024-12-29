# React Native FlatList `keyExtractor` Bug

This repository demonstrates a common performance issue in React Native's FlatList component caused by incorrect usage of the `keyExtractor` prop.  The bug is that using index as a key, leads to incorrect re-rendering and performance issues. The solution uses a unique identifier for each item. 

## Bug

The `bug.js` file shows an example of how using the index as the key in `keyExtractor` can lead to problems.

## Solution

The `bugSolution.js` file demonstrates the correct way to use `keyExtractor`, using a unique identifier for each item.