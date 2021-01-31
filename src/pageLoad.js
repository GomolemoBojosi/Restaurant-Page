const content = document.querySelector("#content");

const loadPage = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Page Loaded";

  return content.appendChild(h1);
}

export default loadPage;


