/*# JavaScriptPractice-CodeChallenges
Challenges and Practice that I've completed from Codecademy Pro and Linked Learning. */

// Create a book class, Properties: Title, Author, ISBN, numCopies
class Book {
  constructor (title, author, isbn, numCopies = 0) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.numCopies = numCopies
  }
  get title () {
    return `${this.title}`
  }
  get author () {
    return `${this.author}`
  }
  get isbn () {
    return `${this.isbn}`
  }
  get availability () {
    let status
    if (this.numCopies !== 0) {
      return this.numCopies > 10
        ? `${this.numCopies} in stock`
        : `${this.numCopies} in stock`
    } else {
      return 'out of stock'
    }
  }
  sell (numSold) {
    if (numSold > this.numCopies) {
      let remainingSales = this.numCopies % numSold
      let numberOfBooksSold = numSold - remainingSales
      this.numCopies -= numberOfBooksSold
      return `You sold ${numberOfBooksSold}\nYou still have ${remainingSales} orders of ${this.title} `
    }
    this.numCopies -= numSold
    return `You sold ${numSold} of ${this.title}`
  }
  restock (numToStock = 500) {
    if (this.numCopies < 0) {
      let remainingSales = Math.abs(this.numCopies)
      this.numCopies += numToStock
      return `Pre-Orders Complete: ${remainingSales}\nTotal Copies Left: ${this.numCopies}`
    }
    this.numCopies += numToStock
    return `Total: ${this.numCopies}`
  }
}

let firstBook = new Book('myTestBook', 'alme', '1234567890', 2)

// Testing the Book Class by checking how many books, Selling, and restocking.
function testBookClassOne (instanceOfBook) {
  // returns the current amount of books available
  let returnAmtOfBooks = instanceOfBook.availability
  console.log(returnAmtOfBooks)
  console.log(instanceOfBook.sell(20))
  console.log(instanceOfBook.restock())
}

testBookClassOne(firstBook)
