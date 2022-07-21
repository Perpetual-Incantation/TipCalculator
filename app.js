/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billinput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const people=document.getElementById('numberOfPeople')
const perpersonTotal=document.getElementById('perPersonTotal')
const taxInput=document.getElementById('taxInput')

// Get number of people from number of people div
let numberOfPeople=Number(people.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
   const bill=Number(billinput.value) 

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipper=Number(tipInput.value)/100

  const tax=Number(taxInput.value)/100
  const taxamt=bill*tax
  // get the total tip amount
  const tipamt=bill*tipper
  //console.log(tipamt)
  //console.log(taxamt)

  // calculate the total (tip amount + bill)
  const tot=tipamt+bill+taxamt
  //console.log(tot) 

  // calculate the per person total (total divided by number of people)
  const perPersonTotal=tot/numberOfPeople

  // update the perPersonTotal on DOM & show it to user
  perpersonTotal.innerText=`₹${perPersonTotal.toFixed(2).toLocaleString('en-India')}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople+=1


  // update the DOM with the new number of people
  people.innerText=numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(numberOfPeople<=1)
  return
  
  // decrement the amount of people
  numberOfPeople-=1

  // update the DOM with the new number of people
  people.innerText=numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()

}