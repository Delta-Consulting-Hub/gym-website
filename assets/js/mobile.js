document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("subject").value.trim(); // Used for mobile number
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !mobile || !message) {
      alert("Please fill in all fields!");
      return;
    }

    const entry = {
      name,
      email,
      mobile,
      message,
      timestamp: new Date().getTime()
    };

    let leads = JSON.parse(localStorage.getItem("gymLeads")) || [];
    leads.push(entry);
    localStorage.setItem("gymLeads", JSON.stringify(leads));

    alert("Submitted successfully!");
    form.reset();
  });
});
