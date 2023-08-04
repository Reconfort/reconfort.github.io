const saveFormData = () => {
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Save the entire form data as a single object in local storage

  localStorage.setItem("formData", JSON.stringify(formData));
}