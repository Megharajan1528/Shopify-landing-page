fetch("http://localhost:5000/content")
  .then(response => response.json())
  .then(data => {
    const featureDiv = document.getElementById("features");
    data.features.forEach(feature => {
      const p = document.createElement("p");
      p.textContent = feature;
      featureDiv.appendChild(p);
    });
  })
  .catch(error => {
    console.error("Error fetching content:", error);
  });
