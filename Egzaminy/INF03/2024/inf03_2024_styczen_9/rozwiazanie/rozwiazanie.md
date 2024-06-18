# Rozwiązanie arkusza INF 03 styczeń 2024 - 9

W tym arkuszu trzeba było wykonać grafikę i animację oraz stronę internetową z wskazanym html, css, js.

## Kod na Stronę Internetową

**Index.html**

```html
!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="favicon.png">
    <title>Komputery</title>
</head>
<body>
    <div id="container" >
        <div id="baner">

            <img src="animacja.gif" alt="Pogotowie komputerowe">
        </div>
        <div id="menu">

            <a href="index.html">Strona Główna</a>
            <a href="kontakt.html">Kontakt</a>
        </div>
        <div id="glowny1">
            <h3>Kim Jesteśmy?</h3>
            <p>Jesteśmy firmą z wieloletnim doświadczeniem w zakresie IT.</p>
        </div>
        <div id="glowny2">
            <h3>Co robimy?</h3>
            <ul>
                <li>naprawa komputerów</li>
                <li>odzyskiwanie danych</li>
                <li>wirusy</li>
                <li> konfiguracja LAN</li>
            </ul>
        </div>
        <div id="glowny3">
            <h3>Jaki jest nasz znak?</h3>
            <img src="favicon.png" alt="Doświadczenie i niezawodność">
        </div>
        <div id="stopka">
            Autor: <em>NaukaOdZera</em>
        </div>
    </div>
</body>
</html>
```
**kontakt.html**
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="favicon.png">
    <title>Komputery</title>
</head>
<body>
    <div id="container" >
        <div id="baner">

            <img src="animacja.gif" alt="Pogotowie komputerowe">
        </div>
        <div id="menu">

            <a href="index.html">Strona Główna</a>
            <a href="kontakt.html">Kontakt</a>
        </div>
        <div id="glowny1">
        </div>
        <div id="glowny2">
            <h2>Kontakt</h2>
            <form>
            <table>
                <tr>
                    <td>Imię: </td>
                    <td> <input type="text" name="imie" id="imie"> </td>
                </tr>
                <tr>
                    <td>Nazwisko: </td>
                    <td> <input type="text" name="nazwisko" id="nazwisko"> </td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td> <input type="text" name="email" id="email"></td>
                </tr>
                <tr>
                    <td>Zgłoszenie: </td>
                    <td> 
                        <select name="lista" id="lista">
                            <option value="naprawa komputerów">naprawa komputerów</option>
                            <option value="odzyskiwanie danych">odzyskiwanie danych</option>
                            <option value="wirusy">wirusy</option>
                            <option value="konfiguracja LAN">konfiguracja LAN</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" checked>Wyślij kopię wiadomości
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button type="reset">Czyść</button>
                        
                        <button type="button" onclick="wyslijFormularz()">Wyślij</button>
                    </td>
                </tr>
            </table>
        </form>
            <hr>
            <p id="paragraf"> </p>
        </div>
        <div id="glowny3">
        </div>
        <div id="stopka">
            Autor: <em>NaukaOdZera</em>
        </div>
    </div>
    <script>
        function wyslijFormularz() {
            var imie = document.getElementById('imie').value;
            var nazwisko = document.getElementById('nazwisko').value.toLowerCase();
            var email = document.getElementById('email').value;
            var lista = document.getElementById('lista').value;
            
            var wiadomosc = `
                ${imie} 
                ${nazwisko} <br>
                ${email} <br>
                Usługa: ${lista}
            `;
            
            document.getElementById('paragraf').innerHTML = wiadomosc;
        }
    </script>
</body>
</html>
```
**styl.css**
```css
body {
    background-color: #E0F7FA;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
#container{
    width: 95%;
    margin: auto;
}
#baner{
    background-color: #00838F;
    height: 200px;
}
#menu{
    background-color: #006064;
    padding: 15px;
}
#menu a{
    color: white;
    text-decoration: none;
    font-size: 150%;
}

#glowny1, #glowny2, #glowny3{
    float: left;
    height: 350px;
    width: 33%;
}
#stopka{
    clear: both;
    background-color: #006064;
    color: white;
    text-align: right;
    padding: 10px;
}
ul{
    text-align: left;
}
button{
    background-color: #00838F;
    color:white;
}
button:hover{
    color:#80DEEA;
}
```
