# The Simplest Neural Network

## Overview

This is an example of a basic neural network that has only one neuron. It's purpose is to find the index required to convert kilometers to miles. It receives the target index as input. Generates a random number, compares it to the target index to calculate the error and adjusts the error by increasing or decreasing its value according to the error.

## Technical details

The Networks is consists of a single class. It receives the data in its constructor upon instantiating it:

`const network = new Network({ kilometers: 100, miles: 62.13  })`

It exposed getters for easier access to the data properties and the stats updated during execution - error, number of iterations etc.

- `get kilometers` - returns the data.kilometers property
- `get miles` - returns the data.miles property
- `get error` - returns the current error in comparison to the target index
- `get iterations` - returns the number of iterations it took so far to calculate the index

It has setters for the following properties:

- `set error` - sets the current error index
- `set iterations` - updates the number of iterations

### Running the network

You need to install [Node.js](https://nodejs.org/en/). The version used during development is 18.13.0, but ot should work with any version after 8.11.2.

Open a terminal and run:

`node neural_network.js`

The output should be a log with the result:

```
It took 1889 iterations to calculate the index needed to convert km to miles.
index is:  0.6212561614724255
Target is: 62.1371192
Result is:  62.13
```