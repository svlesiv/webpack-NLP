export const handleSubmit = event => {
  event.preventDefault();

  const formUrlElementValue = document.getElementById("url").value;
  const polarityElement = document.getElementById("polarity");
  const subjectivityElement = document.getElementById("subjectivity");
  const polarityConfidenceElement = document.getElementById(
    "polarity_confidence"
  );
  const subjectivityConfidenceElement = document.getElementById(
    "subjectivity_confidence"
  );
  const textElement = document.getElementById("text");
  const loadingElement = document.getElementById("loading");
  const resultsElement = document.getElementById("results");
  const errorElement = document.getElementById("error");

  // URL validation
  const errorMessage = Client.validateURL(formUrlElementValue);
  if (errorMessage) {
    errorElement.innerHTML = errorMessage;
    window.setTimeout(() => (errorElement.innerHTML = ""), 2000);
    return;
  }

  // Display Loading text after form submission.
  loadingElement.innerHTML = "...Loading";

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/article", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: formUrlElementValue })
  })
    .then(res => res.json())
    .then(res => {
      const {
        polarity,
        subjectivity,
        polarity_confidence,
        subjectivity_confidence,
        text
      } = res;

      loadingElement.style.display = "none";
      resultsElement.style.display = "block";

      polarityElement.innerHTML = polarity;
      subjectivityElement.innerHTML = subjectivity;
      polarityConfidenceElement.innerHTML = polarity_confidence;
      subjectivityConfidenceElement.innerHTML = subjectivity_confidence;
      textElement.innerHTML = text;
      textElement.setAttribute("cite", formUrlElement);
    });
};
