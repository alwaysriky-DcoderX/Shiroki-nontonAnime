const isLoginPage = window.location.pathname.includes("login.html");

// JIKA SUDAH LOGIN, JANGAN KE LOGIN LAGI
if (isLoginPage && localStorage.getItem("shiroki_user")) {
    window.location.href = "/";
}

// JIKA BELUM LOGIN, PAKSA KE LOGIN
if (!isLoginPage && !localStorage.getItem("shiroki_user")) {
    window.location.href = "/login.html";
}

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
        window.location.href = "/";
    });
});
