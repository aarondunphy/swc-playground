const button = document.querySelector('button')
let counter = 0

const handleButtonClick = () => {
  counter++
  const output = document.querySelector('#output')
  if (!output) {
    return
  }
  output.innerHTML = counter.toString()
}

if (button) {
  button.addEventListener('click', handleButtonClick)
}
