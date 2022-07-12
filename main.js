
const submitForm = async () => {
  var formData = new FormData(document.querySelector('.signup'))
  if (!formData) {
    throw new Error('Please fill the form')
  }

  const res = null
  try {
    const result = await fetch('/signupAPI', { method: 'POST' })
    res = result
  } catch (err) {
    throw new Error('Couldnt create user, please try again')
  }
}

function User(firstName, lastName, discountCard) {
  this.firstName = firstName;
  this.lastName = lastName
  this.discountCard = discountCard
}

const User1 = User("Elion", "Rrahmani", 2123)
const User2 = User("Filan", "Fisteku", 2189)
const User3 = User("Name", "Surname", 5345)

const delivery = (order1, order2) => {
  if (isNaN(order1) && isNan(order2)) return null
  const deliverFirst = Math.max(order1.price, order2.price)
  const deliveryExpenses = deliverFirst.price.toExponential(0.2)
  const message = "Dergesa u nis dhe kushton " + deliverFirst.toString()
  return {deliverFirst, deliveryExpenses, message}
}

window.todaysOffer = "Pizza"
window.offerTime = '1 day'

const checkEmail = (email) => {
  const hasAtSymbol = email.match(/@/)
  const endsWithCom = email.match(/com\b/)
  const hasGmailorYahoo = email.match(/gmail|yahoo/)
}