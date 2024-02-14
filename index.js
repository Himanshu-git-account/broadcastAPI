const channel = new BroadcastChannel("wkrp");

const initializeChannel = () => {
  channel.addEventListener("message", gotMessage);
};

//send the message on the broadcast
const sendMessage = () => {
  let msg = document.getElementById("messageBox").value;

  if (msg) {
    channel.postMessage({ message: msg });
    let message = document.getElementById("messageBox");
    message.value = "";
  }
};

//receive the message on the broadcast
const gotMessage = (event) => {
  if (event && event.data) {
    document.getElementById(
      "messageList"
    ).innerHTML += `<h4>Message Received: ${event.data.message}</h4>`;
  }
};

document.addEventListener("DOMContentLoaded", initializeChannel);
