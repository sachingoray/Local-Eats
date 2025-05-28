function showWelcomeAlert(pageName) {
    alert("Welcome to the " + pageName + " page of Local Eats!");
}

function openPopup(message) {
    const popup = window.open("", "_blank", "width=300,height=200");
    popup.document.write("<p style='font-family: Arial; padding: 20px;'>" + message + "</p>");
}
