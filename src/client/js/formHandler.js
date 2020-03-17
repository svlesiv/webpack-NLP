function handleSubmit(event) {
  event.preventDefault();

  const formUrlElement = document.getElementById("url").value;
  const polarityElement = document.getElementById("polarity");
  const subjectivityElement = document.getElementById("subjectivity");
  const polarityConfidenceElement = document.getElementById("polarity_confidence");
  const subjectivityConfidenceElement = document.getElementById(
    "subjectivity_confidence"
  );
  const textBlockquoteElement = document.querySelector("#text > blockquote");

  // TODO: url validation

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/article", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: formUrlElement })
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
      
      polarityElement.innerHTML += ` ${polarity}`;
      subjectivityElement.innerHTML += ` ${subjectivity}`;
      polarityConfidenceElement.innerHTML += ` ${polarity_confidence}`;
      subjectivityConfidenceElement.innerHTML += ` ${subjectivity_confidence}`;
      textBlockquoteElement.innerHTML = text;
      textBlockquoteElement.setAttribute('cite', formUrlElement);
    });
}

export { handleSubmit };
