const hotels = {
  domestic: [
    { name: "Nairobi Serena", price: 20000 },
    { name: "Sarova Stanley", price: 28000 },
    { name: "Voyager Beach Resort", price: 30000 },
  ],
  international: [
    { name: "Hilton Paris", price: 60000 },
    { name: "Marriott New York", price: 75000 },
    { name: "Burj Al Arab Dubai", price: 150000 },
  ],
};

function updateHotels() {
  let type = document.getElementById("hotelType").value;
  let select = document.getElementById("hotelSelect");

  select.innerHTML = '<option value="">--Select a hotel--</option>';

  if (!type) return;

  let selectedHotels = hotels[type];

  selectedHotels.forEach((hotel) => {
    let option = document.createElement("option");
    option.value = hotel.name;
    option.text = `${hotel.name} - KSh ${hotel.price}`;
    option.dataset.price = hotel.price;
    select.appendChild(option);
  });
}

function bookHotel(event) {
  event.preventDefault();

  let type = document.getElementById("hotelType").value;

  let hotelSelect = document.getElementById("hotelSelect");
  let selectedOption = hotelSelect.options[hotelSelect.selectedIndex];

  let hotel = selectedOption.value;

  if (!selectedOption || !selectedOption.value) {
    document.getElementById("message").innerText = "Please select a hotel.";
    return;
  }

  let price = Number(selectedOption.dataset.price);
  let people = Number(document.getElementById("people").value);

  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  if (!hotel) {
    document.getElementById("message").innerText = "Please select a hotel.";
    return;
  }

  if (!people || people < 1) {
    document.getElementById("message").innerText = "Please enter a valid number of people.";
    return;
  }

  if (!checkin || !checkout) {
    document.getElementById("message").innerText = "Please select both dates.";
    return;
  }

  if (checkin >= checkout) {
    document.getElementById("message").innerText =
      "Check-out date must be after check-in date.";
    return;
  }

  let nights = Math.round(
    (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24),
  );

  let total = price * nights * people;

  document.getElementById("priceBreakdown").innerText =
    `Nights: ${nights}, People: ${people}, Total: KSh ${total}`;

  const booking = {
    type,
    hotel,
    price: Number(price),
    people,
    nights,
    checkin,
    checkout,
  };

  localStorage.setItem("booking", JSON.stringify(booking));

  document.getElementById("message").innerText =
    "Booking successful!";
}
