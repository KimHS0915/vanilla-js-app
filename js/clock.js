const clock = document.querySelector("#clock");

const getClock = () => {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString("en-GB");
};

getClock();
setInterval(getClock, 1000);
