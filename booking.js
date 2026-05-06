// hotel options
const hotels = {
  domestic: ["Nairobi Serena", "Sarova Stanley", "Voyager Beach Resort"],
  international: ["Hilton Paris", "Marriott New York", "Burj Al Arab Dubai"],
};

function updateHotels() {
  let type = document.getElementById("hotelType").value;
  let select = document.getElementById("hotelSelect");

  select.innerHTML = '<option value="">--Select a hotel--</option>';

  let selectedHotels = [];

  if (type === "domestic") {
    selectedHotels = hotels.domestic;
  } else if (type === "international") {
    selectedHotels = hotels.international;
  } else {
    return;
    populateDropdown("hotelSelect", hotels[type]);
  }

  selectedHotels.forEach((hotel) => {
    let option = document.createElement("option");
    option.value = hotel;
    option.text = hotel;
    select.appendChild(option);
  });
}

function bookHotel(event) {
event.preventDefault();

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

  document.getElementById("message").innerText = "Booking successful!";
}
