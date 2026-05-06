// Arrays for hotels
const domesticHotels = [
  "Nairobi Serena",
  "Sarova Stanley",
  "Voyager Beach Resort",
];

const internationalHotels = [
  "Hilton Paris",
  "Marriott New York",
  "Burj Al Arab Dubai",
];

// Function to populate dropdown
function populateDropdown(selectId, hotels) {
  let select = document.getElementById(selectId);
  select.innerHTML = ""; // clear previous options

  hotels.forEach((hotel) => {
    let option = document.createElement("option");
    option.text = hotel;
    option.value = hotel;
    select.appendChild(option);
  });
}

function showHotels() {
  let type = document.getElementById("hotelType").value;

  document.getElementById("domesticHotels").classList.add("hidden");
  document.getElementById("internationalHotels").classList.add("hidden");

  if (type === "domestic") {
    populateDropdown("domesticSelect", domesticHotels);
    document.getElementById("domesticHotels").classList.remove("hidden");
  } else if (type === "international") {
    populateDropdown("internationalSelect", internationalHotels);
    document.getElementById("internationalHotels").classList.remove("hidden");
  }
}

function bookHotel() {
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (!checkin || !checkout) {
    document.getElementById("message").innerText = "Please select both dates.";
    return;
  }

  if (checkin >= checkout) {
    document.getElementById("message").innerText =
      "Check-out must be after check-in.";
    return;
  }

  document.getElementById("message").innerText = "Booking successful! 🎉";
}
