function login() {
        var password = document.getElementById('password').value;

        // Tablica przechowująca poprawne hasła
        var correctPasswords = ["Zp_6!d$Tq@v#Ln"]; // Możesz dodać więcej haseł tutaj

        // Sprawdzenie, czy wprowadzone hasło znajduje się w tablicy
        if (password === "") {
            alert("Proszę wprowadzić hasło.");
        } else if (correctPasswords.includes(password)) {
            // Jeśli hasło jest poprawne, przekierowanie na stronę
            window.location.href = 'index2.html';
        } else {
            // Jeśli hasło jest niepoprawne
            alert("Niepoprawne hasło.");
        }
    }
