const saveFormData = () => {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Save the entire form data as a single object in local storage

  localStorage.setItem("formData", JSON.stringify(formData));
}
// Function to load form data from local storage and pre-fill the form
  const loadFormData = () => {
    const formData = JSON.parse(localStorage.getItem(“formData”));
    if (FormData) {
      document.getElementById(“name”).value = formData.name || “”;
      document.getElementById(“email”).value = formData.email || “”;
      document.getElementById(“message”).value = formData.message || “”;
    }
  };
// Add event listeners to save data on input change and load data on page load
const contactform = document.querySelector(“.contact-form”);
contactform.addEventListener(‘input’, saveFormData);
window.addEventListener(‘load’, loadFormData)
