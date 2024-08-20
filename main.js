const rangeInput = document.getElementById("range");
rangeInput.addEventListener("change", updateDateTime);

function updateDateTime() {
  const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const now = new Date();
  const day = now.getDay();
  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  document.getElementById(
    "date"
  ).textContent = `${weeks[day]}, ${date} ${months[month]} ${year}`;

  // we will get this range from user
  const hourRange = rangeInput.value;
  let hour = now.getHours() % hourRange;
  if (hourRange === 12) {
    if (now.getHours() === 12 || now.getHours() === 24) {
      hour = 12;
    }
  } else {
    if (now.getHours() === 24) {
      hour = 0;
    } else if (now.getHours() === 12) {
      hour = 12;
    }
  }

  hour = hour < 10 ? "0" + hour : hour;

  const mins =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  const seconds =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  // dont laugh at this name
  const mode = now.getHours() > 11 ? "PM" : "AM";
  document.getElementById("time").textContent = `${hour} : ${mins} :
    ${seconds} ${hourRange === 24 ? "" : mode}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);
