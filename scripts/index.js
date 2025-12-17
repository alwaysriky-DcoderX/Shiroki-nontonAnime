document.addEventListener("DOMContentLoaded", () => {
    const userArea = document.getElementById("user-area");
    const usernameText = document.getElementById("header-username");
    const logoutBtn = document.getElementById("logout-btn");

    const currentUser = localStorage.getItem("shiroki_user");

    if (currentUser) {
        userArea.style.display = "flex";
        usernameText.textContent = "👤 " + currentUser;
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("shiroki_user");
            window.location.href = "/login.html";
        });
    }
});
