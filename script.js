// Functionalities

//  Heart Icons----->

const heartCountElement = document.getElementById("heart_count");
const heartIcons = document.querySelectorAll(".heart-icon");

let heartCount = 0;

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        heartCount++; 
        heartCountElement.innerText = heartCount; 
    });
}


// Call ,History,Copy Function---->


  let coins = 100;
  let copyCount = 0;

  const callHistory = document.getElementById("history-list");
  const countElement = document.getElementById("count");
  const clearHistoryButton = document.getElementById("clear-history");
  const copyCountText = document.querySelector(".text-white");

  function handleCall(button) {
    const card = button.closest(".card");
    const serviceName = card.querySelector("h1").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    if (coins >= 20) {
      coins -= 20;
      countElement.textContent = coins;

      const currentTime = new Date().toLocaleTimeString();
      const historyItem = document.createElement("li");
      historyItem.classList.add(
        "bg-white",
        "p-3",
        "rounded-xl",
        "shadow-md",
        "flex",
        "justify-between",
        "items-center"
      );
      historyItem.innerHTML = `
        <div>
          <p class="font-bold text-[18px]">${serviceName}</p>
          <p class="text-[16px] text-gray-500">${serviceNumber}</p>
        </div>
        <p class="text-[14px] text-gray-400">${currentTime}</p>
      `;
      callHistory.appendChild(historyItem);

      alert(`Calling ${serviceName} at ${serviceNumber}`);
    } else {
      alert("আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে");
    }
  }

  function handleCopy(button) {
    const card = button.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;

    navigator.clipboard.writeText(serviceNumber).then(() => {
      copyCount++;
      copyCountText.textContent = `${copyCount} Copy`;
      alert(`নাম্বার কপি হয়েছে: ${serviceNumber}`);
    });
  }

  function initializeApp() {
    document.querySelectorAll(".call-button").forEach(button => {
      button.addEventListener("click", () => handleCall(button));
    });

    document.querySelectorAll(".fa-copy").forEach(icon => {
      const copyDiv = icon.closest("div");
      copyDiv.addEventListener("click", () => handleCopy(icon));
    });

    clearHistoryButton.addEventListener("click", () => {
      callHistory.innerHTML = "";
    });
  }

  document.addEventListener("DOMContentLoaded", initializeApp);

