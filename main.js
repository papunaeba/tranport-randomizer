const type = document.getElementById("type");
const amount = document.getElementById("amount");

function chooseType() {
  const transportTypes = ["Ubahn", "Sbahn", "Bus"];
  const randomIndex = Math.floor(Math.random() * transportTypes.length);

  const randomString = transportTypes[randomIndex];
  alert(randomString);
}

function chooseAmount() {
  const randomAmount = Math.floor(Math.random() * 7) + 1;
  alert(randomAmount);
}
