const spots = [
    {
      name: "Olin Library",
      description: "The classic study spot. Quiet floors up top, group-friendly floors below. Plenty of natural light and outlets throughout.",
      noise: "silent",
      outdoor: false,
      outlets: true,
      group: false,
      hours: "Open until midnight most nights",
      openHour: 7,
      closeHour: 24,
      address: "Olin Library, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Whispers Cafe (Olin)",
      description: "A cozy cafe tucked inside Olin. Great for a lively atmosphere with coffee nearby. Gets busy between classes.",
      noise: "lively",
      outdoor: false,
      outlets: true,
      group: true,
      hours: "Open until 8pm",
      openHour: 8,
      closeHour: 20,
      address: "Whispers Cafe, Olin Library, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Tisch Park",
      description: "A beautiful open lawn great for reading or light studying on a nice day. Best when the weather is warm and sunny.",
      noise: "moderate",
      outdoor: true,
      outlets: false,
      group: false,
      hours: "Open during daylight hours",
      openHour: 7,
      closeHour: 20,
      address: "Tisch Park, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Lopata Hall",
      description: "Engineering and science students flock here. Lots of table space, collaborative energy, and outlets at most seats.",
      noise: "moderate",
      outdoor: false,
      outlets: true,
      group: true,
      hours: "Open until 10pm",
      openHour: 7,
      closeHour: 22,
      address: "Lopata Hall, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Sumers Welcome Center",
      description: "Modern, bright, and usually uncrowded. A hidden gem for solo work with a calm atmosphere.",
      noise: "silent",
      outdoor: false,
      outlets: true,
      group: false,
      hours: "Open until 6pm",
      openHour: 8,
      closeHour: 18,
      address: "Sumers Welcome Center, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Brookings Quad",
      description: "The iconic heart of campus. Perfect for studying outside when the weather is nice. Bring a blanket.",
      noise: "moderate",
      outdoor: true,
      outlets: false,
      group: false,
      hours: "Open during daylight hours",
      openHour: 7,
      closeHour: 20,
      address: "Brookings Quadrangle, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Earth & Planetary Sciences Library",
      description: "Small, quiet, and rarely crowded. Great for deep focus work without distractions.",
      noise: "silent",
      outdoor: false,
      outlets: true,
      group: false,
      hours: "Open until 5pm weekdays",
      openHour: 8,
      closeHour: 17,
      address: "Earth and Planetary Sciences Library, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "The Village",
      description: "Lively and social. Good for group work or if you want background noise and easy access to food.",
      noise: "lively",
      outdoor: false,
      outlets: true,
      group: true,
      hours: "Open 24 hours",
      openHour: 0,
      closeHour: 24,
      address: "The Village, Washington University in St. Louis, St. Louis, MO"
    },
    {
      name: "Simon Library",
      description: "The best hidden gem on campus. Quiet, spacious, and often overlooked. A perfect spot for focused study sessions.",
      noise: "silent",
      outdoor: false,
      outlets: true,
      group: false,
      hours: "Open until 6pm",
      openHour: 8,
      closeHour: 18,
      address: "Simon Hall, St. Louis, MO 63105"
    },
    {
      name: "Anheuser-Busch Hall (Law School)",
      description: "Sit down in the grand room and enjoy the quiet beauty of the architecture around. Depending on the time of day, you may have the whole place to yourself.",
      noise: "moderate",
      outdoor: false,
      outlets: false,
      group: false,
      hours: "Open 12:30pm onwards",
      openHour: 12.5,
      closeHour: 24,
      address: "Anheuser-Busch Hall, Washington University School of Law, St. Louis, MO"
    }
];

function isDaytime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 20;
}

function getCurrentTimeValue() {
    const now = new Date();
    return now.getHours() + now.getMinutes() / 60;
}

function getWeatherEmoji(weatherType) {
    if (weatherType.includes("CLEAR")) return "☀️";
    if (weatherType.includes("PARTLY")) return "⛅";
    if (weatherType.includes("CLOUD")) return "☁️";
    if (weatherType.includes("RAIN") || weatherType.includes("DRIZZLE")) return "🌧️";
    if (weatherType.includes("SNOW") || weatherType.includes("ICE")) return "❄️";
    if (weatherType.includes("STORM") || weatherType.includes("THUNDER")) return "⛈️";
    return "🌤️";
}

function getWeatherDescription(description, temp) {
    return `${temp}°F · ${description}`;
}

function isGoodOutdoorWeather(weatherType, temp) {
    const badOutdoorWeather =
      weatherType.includes("RAIN") ||
      weatherType.includes("DRIZZLE") ||
      weatherType.includes("SNOW") ||
      weatherType.includes("ICE") ||
      weatherType.includes("STORM") ||
      weatherType.includes("THUNDER");
    const comfortableTemp = temp >= 50 && temp <= 85;
    return !badOutdoorWeather && comfortableTemp && isDaytime();
}

const fallbackWorkQuotes = [
    { text: "Start with one focused minute; momentum will meet you there.", author: "StudySpot" },
    { text: "Good work gets easier once you give it your full attention.", author: "StudySpot" },
    { text: "Stay with the page, the problem, and the next small step.", author: "StudySpot" },
    { text: "The work does not need to be perfect to begin; it only needs your first honest try.", author: "StudySpot" },
    { text: "Focus now, and your future self gets to breathe a little easier.", author: "StudySpot" }
];

function pickRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function getDistanceMiles(startLat, startLng, endLat, endLng) {
    const earthRadiusMiles = 3958.8;
    const latDistance = toRadians(endLat - startLat);
    const lngDistance = toRadians(endLng - startLng);
    const a =
      Math.sin(latDistance / 2) ** 2 +
      Math.cos(toRadians(startLat)) *
      Math.cos(toRadians(endLat)) *
      Math.sin(lngDistance / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusMiles * c;
}

function getTravelEstimate(startLat, startLng, spotLocation) {
    if (!spotLocation) {
      return {
        distance: "unavailable",
        walkingTime: "unavailable"
      };
    }

    const distanceMiles = getDistanceMiles(startLat, startLng, spotLocation.lat, spotLocation.lng);
    const walkingSpeedMph = 3;
    const routeBuffer = 1.25;
    const minutes = Math.max(1, Math.round((distanceMiles / walkingSpeedMph) * 60 * routeBuffer));
    return {
      distance: `about ${distanceMiles.toFixed(1)} mi away`,
      walkingTime: `${minutes} min walk`
    };
}

function getPrimaryAddressName(address) {
    return address.split(",")[0].toLowerCase();
}

function getBestGeocodeResult(results, spot) {
    const addressName = getPrimaryAddressName(spot.address);
    return results.find(result => {
      const formattedAddress = result.formatted_address.toLowerCase();
      const componentNames = result.address_components.map(component => component.long_name.toLowerCase());
      return formattedAddress.includes(addressName) || componentNames.includes(addressName);
    }) || results[0];
}

async function getSpotLocation(spot) {
    if (spot.location) return spot.location;

    const geocodeResponse = await fetch(`https://cse2004.com/api/geocode?address=${encodeURIComponent(spot.address)}`);
    const geocodeData = await geocodeResponse.json();
    const bestResult = getBestGeocodeResult(geocodeData.results, spot);
    const location = bestResult.geometry.location;
    spot.location = location;
    return location;
}

function getStudySpotVisits() {
    return JSON.parse(localStorage.getItem("studySpotVisits")) || {};
}

function saveStudySpotVisits(visits) {
    localStorage.setItem("studySpotVisits", JSON.stringify(visits));
}

function recordStudySpotVisit(spot) {
    const visits = getStudySpotVisits();
    visits[spot.name] = (visits[spot.name] || 0) + 1;
    saveStudySpotVisits(visits);
    return visits[spot.name];
}

function isSpotOpenNow(spot, currentTime) {
    return currentTime >= spot.openHour && currentTime < spot.closeHour;
}

function filterSpots(preferences, outdoorOk, currentTime) {
    return spots.filter(spot => {
      if (!isSpotOpenNow(spot, currentTime)) return false;
      if (!outdoorOk && spot.outdoor) return false;
      if (spot.noise !== preferences.noise) return false;
      if (preferences.outlets && !spot.outlets) return false;
      if (preferences.group && !spot.group) return false;
      return true;
    });
}

function showError(message) {
    const errorDiv = document.getElementById("error-message");
    const errorText = document.getElementById("error-text");
    errorText.textContent = message;
    errorDiv.classList.remove("hidden");
}

function hideError() {
    document.getElementById("error-message").classList.add("hidden");
}

function setLoading(isLoading) {
    const loading = document.getElementById("loading");
    if (isLoading) {
      loading.classList.remove("hidden");
    } else {
      loading.classList.add("hidden");
    }
}

function getUserPosition() {
    return new Promise(resolve => {
      if (!navigator.geolocation) {
        resolve({ position: null, error: null });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => resolve({ position, error: null }),
        error => resolve({ position: null, error }),
        {
          maximumAge: 300000,
          timeout: 10000
        }
      );
    });
}

function animateResultCards() {
    document.querySelectorAll(".results-grid .card").forEach((card, index) => {
      card.classList.add("animate-on-scroll");
      card.classList.remove("visible");

      setTimeout(() => {
        card.classList.add("visible");
      }, index * 180);
    });
}

function displayResults(spot, spotLocation, weatherType, weatherDescription, temp, quote, travelEstimate, visitCount) {
    document.getElementById("weather-icon").textContent = getWeatherEmoji(weatherType);
    document.getElementById("weather-description").textContent = getWeatherDescription(weatherDescription, temp);

    document.getElementById("spot-name").textContent = spot.name;
    document.getElementById("spot-description").textContent = spot.description;
    document.getElementById("spot-hours").textContent = "🕐 " + spot.hours;
  
    const tagsDiv = document.getElementById("spot-tags");
    tagsDiv.innerHTML = "";
    if (spot.outdoor) tagsDiv.innerHTML += '<span class="tag">🌿 Outdoor</span>';
    else tagsDiv.innerHTML += '<span class="tag">🏠 Indoor</span>';
    if (spot.outlets) tagsDiv.innerHTML += '<span class="tag">🔌 Outlets</span>';
    if (spot.group) tagsDiv.innerHTML += '<span class="tag">👥 Group-friendly</span>';
    else tagsDiv.innerHTML += '<span class="tag">🙋 Solo-friendly</span>';
  
    const noiseLabels = { silent: "🤫 Silent", moderate: "🎧 Moderate", lively: "☕ Lively" };
    tagsDiv.innerHTML += `<span class="tag">${noiseLabels[spot.noise]}</span>`;
    tagsDiv.innerHTML += '<span class="tag">⏰ Good right now</span>';

    document.getElementById("spot-distance").textContent = "📍 Distance: " + travelEstimate.distance;
    document.getElementById("spot-travel-time").textContent = "🚶 Estimated walk: " + travelEstimate.walkingTime;
    document.getElementById("spot-visit-count").textContent = `📚 Recommended ${visitCount} time${visitCount === 1 ? "" : "s"} on this browser`;
    const mapQuery = spotLocation ? `${spotLocation.lat},${spotLocation.lng}` : spot.address;
    document.getElementById("spot-map-link").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  
    document.getElementById("quote-text").textContent = `"${quote.text}"`;
    document.getElementById("quote-author").textContent = quote.author === "StudySpot" ? "" : `— ${quote.author}`;
  
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    animateResultCards();
    hideError();
}

// main func
async function getRecommendation(preferences) {
    hideError();
    setLoading(true);
    document.getElementById("results").classList.add("hidden");
    let showedError = false;
  
    // geolocation API (browser):
    const locationResult = await getUserPosition();
    const position = locationResult.position;
  
    let lat, lng;
    if (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    } else {
      lat = 38.6488;
      lng = -90.3108;
      if (locationResult.error && locationResult.error.code === 1) {
        showError("Location access was denied, defaulting to WashU campus.");
        showedError = true;
      }
    }

    // weather API:
    let weatherType = "CLEAR";
    let weatherDescription = "Clear skies";
    let temp = 70;
    try {
      const weatherResponse = await fetch(
        `https://cse2004.com/api/weather?latitude=${lat}&longitude=${lng}`
      );
      const weatherData = await weatherResponse.json();
      if (weatherData.weatherCondition && weatherData.temperature) {
        weatherType = weatherData.weatherCondition.type;
        weatherDescription = weatherData.weatherCondition.description.text;
        temp = Math.round(weatherData.temperature.degrees);
      }
    } catch {
      // If weather fails, keep going with fallback weather without showing the location warning.
    }

    const quote = pickRandom(fallbackWorkQuotes);
  
    const currentTime = getCurrentTimeValue();
    const outdoorOk = isGoodOutdoorWeather(weatherType, temp);
    let matched = filterSpots(preferences, outdoorOk, currentTime);
  
    if (matched.length === 0) {
      matched = filterSpots({ ...preferences, outlets: false }, outdoorOk, currentTime);
    }
  
    if (matched.length === 0) {
      matched = spots.filter(spot => !spot.outdoor && isSpotOpenNow(spot, currentTime));
    }

    if (matched.length === 0) {
      matched = spots.filter(spot => !spot.outdoor);
    }
  
    const recommended = matched[0];
    let spotLocation = null;
    try {
      spotLocation = await getSpotLocation(recommended);
    } catch {
      // If geocoding fails, keep showing the recommendation without distance.
    }

    const travelEstimate = getTravelEstimate(lat, lng, spotLocation);
    const visitCount = recordStudySpotVisit(recommended);

    if (showedError) {
      await wait(500);
    }
  
    setLoading(false);
    displayResults(recommended, spotLocation, weatherType, weatherDescription, temp, quote, travelEstimate, visitCount);
}

document.getElementById("preferences-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const preferences = {
      noise: document.querySelector('input[name="noise"]:checked').value,
      group: document.querySelector('input[name="group"]:checked').value === "group",
      outlets: document.getElementById("outlets").checked
    };
  
    getRecommendation(preferences);
});

const pomodoroDurations = {
    focus: 25 * 60,
    break: 5 * 60
};
let pomodoroMode = "focus";
let pomodoroSeconds = pomodoroDurations[pomodoroMode];
let pomodoroInterval = null;

function updatePomodoroDisplay() {
    const minutes = Math.floor(pomodoroSeconds / 60).toString().padStart(2, "0");
    const seconds = (pomodoroSeconds % 60).toString().padStart(2, "0");
    document.getElementById("pomodoro-time").textContent = `${minutes}:${seconds}`;
    document.getElementById("pomodoro-mode").textContent = pomodoroMode === "focus" ? "Focus time" : "Break time";
    document.getElementById("pomodoro-switch").textContent = pomodoroMode === "focus" ? "Switch to break" : "Switch to focus";
}

function stopPomodoro() {
    clearInterval(pomodoroInterval);
    pomodoroInterval = null;
}

function startPomodoro() {
    if (pomodoroInterval) return;

    pomodoroInterval = setInterval(() => {
      if (pomodoroSeconds > 0) {
        pomodoroSeconds -= 1;
        updatePomodoroDisplay();
      } else {
        stopPomodoro();
      }
    }, 1000);
}

function resetPomodoro() {
    stopPomodoro();
    pomodoroSeconds = pomodoroDurations[pomodoroMode];
    updatePomodoroDisplay();
}

function switchPomodoroMode() {
    stopPomodoro();
    pomodoroMode = pomodoroMode === "focus" ? "break" : "focus";
    pomodoroSeconds = pomodoroDurations[pomodoroMode];
    updatePomodoroDisplay();
}

document.getElementById("pomodoro-start").addEventListener("click", startPomodoro);
document.getElementById("pomodoro-pause").addEventListener("click", stopPomodoro);
document.getElementById("pomodoro-reset").addEventListener("click", resetPomodoro);
document.getElementById("pomodoro-switch").addEventListener("click", switchPomodoroMode);
updatePomodoroDisplay();

document.querySelectorAll(".tool-tile").forEach(tile => {
    tile.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", tile.dataset.tool);
      event.dataTransfer.effectAllowed = "move";
    });
});

const featureDropZone = document.getElementById("feature-drop-zone");
const featureDropMessage = document.getElementById("feature-drop-message");
const dashboardTools = document.getElementById("dashboard-tools");

function updateDropZoneVisibility() {
    const allToolsAdded = Array.from(document.querySelectorAll(".tool-tile")).every(tile =>
      dashboardTools.contains(document.getElementById(`${tile.dataset.tool}-tool`))
    );

    featureDropZone.classList.toggle("hidden", allToolsAdded);
}

function addToolToDashboard(toolName) {
    const tool = document.getElementById(`${toolName}-tool`);
    if (!tool || dashboardTools.contains(tool)) return;

    dashboardTools.append(tool);
    featureDropMessage.textContent = "Add another study tool here";

    const tile = document.querySelector(`[data-tool="${toolName}"]`);
    if (tile) {
      tile.setAttribute("draggable", "false");
      tile.classList.add("tool-tile-disabled");
    }

    updateDropZoneVisibility();
}

function setupChecklist() {
    const checklistForm = document.getElementById("checklist-form");
    const checklistInput = document.getElementById("checklist-input");
    const checklistItems = document.getElementById("checklist-items");

    checklistForm.addEventListener("submit", event => {
      event.preventDefault();
      const task = checklistInput.value.trim();
      if (!task) return;

      const item = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      const taskText = document.createElement("span");
      checkbox.type = "checkbox";
      taskText.textContent = task;
      label.append(checkbox, taskText);
      item.append(label);
      checklistItems.append(item);
      checklistInput.value = "";
    });
}

featureDropZone.addEventListener("dragover", event => {
    event.preventDefault();
    featureDropZone.classList.add("drag-over");
});

featureDropZone.addEventListener("dragleave", () => {
    featureDropZone.classList.remove("drag-over");
});

featureDropZone.addEventListener("drop", event => {
    event.preventDefault();
    const toolName = event.dataTransfer.getData("text/plain");
    featureDropZone.classList.remove("drag-over");

    if (toolName) {
      addToolToDashboard(toolName);
    }
});

setupChecklist();
 
