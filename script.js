const urlparams = new URLSearchParams(window.location.search);
const selectedCountry = urlParams.get("country");

// Hardcoded data for destinations
const destinationData = {
  japan: {
    name: "Japan",
    capital: "Tokyo",
    distance: "5,968 km from India",
    language: "Japanese",
    description:
      "Japan is a captivating blend of ancient traditions and cutting-edge modernity.",
  },
  norway: {
    name: "Norway",
    capital: "Oslo",
    distance: "6,700 km from India",
    language: "Norwegian",
    description:
      "Norway is a land of stunning fjords, vibrant cities, and rich cultural heritage.",
  },
  // Add more destinations as needed
};

// Populate the page
if (selectedCountry && destinationData[selectedCountry]) {
  const data = destinationData[selectedCountry];
  document.querySelector(
    ".lefthalf .capital"
  ).textContent = `CAPITAL: ${data.capital}`;
  document.querySelector(
    ".lefthalf .distance"
  ).textContent = `DISTANCE: ${data.distance}`;
  document.querySelector(
    ".lefthalf .language"
  ).textContent = `LANGUAGE: ${data.language}`;
  document.querySelector(".righthalf h1").textContent = data.name;
  document.querySelector(".righthalf .description").textContent =
    data.description;
} else {
  document.body.innerHTML = `<p>Destination not found. <a href="index.html">Return to homepage</a></p>`;
}
