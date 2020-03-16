function handleSubmit(event) {
  event.preventDefault();

  const formUrl = document.getElementById("url").value;
  // TODO: url validation

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/article", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: formUrl })
  })
    .then(res => res.json())
    .then(res => console.log(res));
}

export { handleSubmit };
