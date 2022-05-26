let counter: number = 0;

const handleButtonClick = () => {
  counter++;
  document.querySelector("#output").innerHTML = counter.toString();
}

document.querySelector("button").addEventListener("click", handleButtonClick)