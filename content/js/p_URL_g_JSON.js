gotJsonInfo = JSON.parse(sessionStorage.getItem("jsonGetInfo"));
sendOpeningMessage();

function sendOpeningMessage() {
  const presentationMessages = ["It's good to see you again.","Hey, how it's everything going?","Wanna do something later?", "hey, how's your day going?"];
  document.querySelector(".openingMessage > div:nth-child(1) h2").innerText = `Hello ${gotJsonInfo[0][0]}!`;
  document.querySelector(".openingMessage > div:nth-child(1) p").innerText = presentationMessages[Math.floor(Math.random() * presentationMessages.length)];
  document.querySelector(".openingMessage img").src = `${gotJsonInfo[0][3]}`;
  document.querySelector(".coursesCompleted p:nth-child(1)").innerText = gotJsonInfo[1].completed;
  document.querySelector(".coursesProgress p:nth-child(1)").innerText = gotJsonInfo[1].progress;
  document.querySelector(".userInfo img").src = `${gotJsonInfo[0][2]}`;
}
