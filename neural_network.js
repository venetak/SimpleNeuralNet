const data = {
    kilometers: 100,
    miles: 62.13
}

class Network {
    /**
     * Instantiate the neural network
     * @param {object} data - the data used for learning
     */
    constructor(data) {
        this.data = data
        this.errorCorrectionIdx = 0.0001
        this.allowedError = 0.001

        this.stats = {
            iterations: 0,
            error: 0
        }
    }

    get miles() {
        return this.data.miles
    }

    get kilometers() {
        return this.data.kilometers
    }

    get error() {
        return this.stats.error
    }

    set error(value) {
        this.stats.error = value
    }

    get iterations() {
        return this.stats.iterations
    }

    set iterations(value) {
        this.stats.iterations = value
    }

    /**
     * Initiates firing of neuron impulses
     * Logs the result using template literals
     */
    fire() {
        let index = Math.random()
        index = this.neuron(index)
        console.log(`It took ${this.iterations} iterations to calculate the index needed to convert km to miles.`)
        console.log('index is: ', index)
        console.log('Target is: 62.1371192   ')
        console.log('Result is: ', (index * this.kilometers).toFixed(2))
    }

    /**
     * Corrects the index according to the current error.
     * If the current result is bigger than the target - reduce it, if it is lesser - increase it
     * @param {number} index - the current index that the network has generated
     * @param {number} currentResult - the current miles value converted using the index
     * @returns {number} the updated index
     */
    adjustIndexToError(index, currentResult) {
        const multiplier = currentResult > this.miles ? -1 : 1;
        return index += multiplier * this.errorCorrectionIdx
    }

    /**
     * Calculates the index converting kilometers to miles by remembering and learning from the error
     * @param {number} index - the initial number to begin the calculation of the index
     * needed to convert kilometers to miles
     * @returns {number} the calculated index
     */
    neuron(index) {
        let currentResult = 0

        do {
            this.iterations += 1
            currentResult = Number((this.kilometers * index).toFixed(2))
            this.error = Math.abs(this.miles - currentResult)
            if (currentResult === this.miles) break
            index = this.adjustIndextoError(index, currentResult)
        } while (this.error > this.allowedError)

        return index
    }
}

const network = new Network(data)
network.fire()
