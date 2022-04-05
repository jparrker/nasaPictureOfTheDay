//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const userChoice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?&date=${userChoice}&api_key=heJ5aigFAdLJPv29wZn0EGro7Qmaaiai1IwlJ7ya`
  


  fetch(url) 
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('#name_result').innerText = data.title
    document.querySelector('#description_result').innerText = data.explanation
    document.querySelector('img').src = data.hdurl
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}