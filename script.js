const messageInput = document.querySelector("#messageInput");
const sendBtn = document.querySelector("#sendIcon");
const chatContent = document.querySelector("#chatContent");

window.addEventListener('DOMContentLoaded', function() {
  var chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display = "none";
});

function toggleChat() {
  var chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display = chatWindow.style.display === "none" ? "block" : "none";
  if(chatWindow.style.display === "block")
    messageInput.focus();
}


sendBtn.onclick = sendMessage()

messageInput.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
    sendMessage();
  }
})

function sendMessage(){
  if(messageInput.value === "") return ;
  const messageSent = document.createElement("div");
  messageSent.className = "message sent";
  const message = document.createElement("p");
  message.innerText = messageInput.value;
  messageSent.appendChild(message);
  chatContent.append(messageSent);  
  messageInput.value = "";
  chatContent.scrollBy(0,200);

  setTimeout(() => {
    getResponseMessage();
  }, 1000);

}




function getResponseMessage(){
  const responses  = [
    "sorry i'm unable to understand your request. please try again",
    "Service not available at this moment. Please try again",
    "Hello, we are happy to help you.",
    "cannot connect now !",
    "service unavailable",
    "Please try again",
    "please contact the administrator for futher details.",
    "Thank you for contacting us ! we will reach out to you soon !"
  ];
  const messageSent = document.createElement("div");
  messageSent.className = "message received";
  const message = document.createElement("p");
  message.innerText =  responses[Math.round(responses.length * Math.random())];
  messageSent.appendChild(message);
  chatContent.append(messageSent);  
  chatContent.scrollBy(0,200);

}