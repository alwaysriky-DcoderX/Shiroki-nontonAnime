// JIKA SUDAH LOGIN, LEWATI HALAMAN LOGIN
if (window.location.pathname.includes("login.html")) {
    if (localStorage.getItem("shiroki_user")) {
        window.location.href = "index.html";
    }
}

// PROTEKSI WEBSITE
if (!window.location.pathname.includes("login.html")) {
    if (!localStorage.getItem("shiroki_user")) {
        window.location.href = "login.html";
    }
}

// LOGIN ACTION
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    if (!loginBtn) return;

    loginBtn.addEventListener("click", () => {
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;

        if (!user || !pass) {
            alert("Username & Password wajib diisi!");
            return;
        }

        localStorage.setItem("shiroki_user", user);
        window.location.href = "index.html";
    });
});
