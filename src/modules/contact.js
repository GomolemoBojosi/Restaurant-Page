function contact() {
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('content-container');

  contactDiv.innerHTML = `
    <h3>NEED SOMETHING? GET IN TOUCH WITH US</h3>
    <p><i class="fas fa-phone"></i>   : 555-555-5555</p>
    <p><i class="fas fa-map-marker-alt"></i> : The Office</p>
  `;

  return contactDiv;
}

export default contact;