function showHotels() {
  let type = document.getElementById("hotelType").value;

  document.getElementById("domesticHotels").classList.add("hidden");
  document.getElementById("internationalHotels").classList.add("hidden");

  if (type === "domestic") {
    document.getElementById("domesticHotels").classList.remove("hidden");
  } else if (type === "international") {
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
