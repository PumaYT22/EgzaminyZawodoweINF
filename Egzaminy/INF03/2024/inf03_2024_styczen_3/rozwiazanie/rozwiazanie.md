---

# Rozwiązanie arkusza INF 03 styczeń 2024 - 3


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - Index.html
    - Uslugi.html
    - Kontakt.html
    - Styl.css
3. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę i animację oraz stronę internetową z wskazanym html,css,js.
</blockquote>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="index.html">
      
### Index.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Firma IT</title>
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="logo.png">
</head>
<body>
    <div class="container">
        <header>
            <section class="logo">
                <img src="logo.png" alt="firma it">
            </section>
            <nav class="menu">
                <a href="index.html">Strona Główna</a>
                <a href="uslugi.html">Usługi</a>
                <a href="kontakt.html">Kontakt</a>
            </nav>
        </header>
        <section class="banner">
            <img src="animacja.gif" alt="Usługi informatyczne">
        </section>
        <main>
            <h2>Firma IT</h2>
            <p>Jesteśmy firmą z wieloletnim doświadczeniem w zakresie IT.</p>
            <hr>
        </main>
        <footer>
            <p>Autor strony: <strong>NaukaOdZera</strong></p>
        </footer>
    </div>
</body>
</html>

```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera sekcję nagłówkową z logiem i menu, sekcje banner z animacją i sekcję main o czym jest firma oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="uslugi.html">
      
### Uslugi.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Firma IT</title>
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="logo.png">
</head>
<body>
    <div class="container">
        <header>
            <section class="logo">
                <img class="obrazek" src="logo.png" alt="firma it">
            </section>
            <nav class="menu">
                <a href="index.html">Strona Główna</a>
                <a href="uslugi.html">Usługi</a>
                <a href="kontakt.html">Kontakt</a>
            </nav>
        </header>
        <section class="banner">
            <img src="animacja.gif" alt="Usługi informatyczne">
        </section>
        <main>
            <h2>Oferta</h2>
            <ol>
                <li>Outsourcing IT</li>
                <li>Konfiguracja komputerów</li>
                <li>Sprzęt komputerowy</li>
                <li>Strony internetowe</li>
            </ol>
            <hr>
        </main>
        <footer>
            <p>Autor strony: <strong>123456</strong></p>
        </footer>
    </div>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony usługi.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera sekcję nagłówkową z logiem i menu, sekcje banner z animacją i sekcję main z oferatmi oraz stopkę.
    
</CodeGroupItem>   
<CodeGroupItem title="kontakt.html">
      
### Kontakt.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Firma IT</title>
    <link rel="stylesheet" href="styl.css">
    <link rel="icon" href="logo.png">
</head>
<body>
    <div class="container">
        <header>
            <section class="logo">
                <img src="logo.png" alt="firma it">
            </section>
            <nav class="menu">
                <a href="index.html">Strona Główna</a>
                <a href="uslugi.html">Usługi</a>
                <a href="kontakt.html">Kontakt</a>
            </nav>
        </header>
        <section class="banner">
            <img src="animacja.gif" alt="Usługi informatyczne">
        </section>
        <main>
            <h2>Kontakt</h2>
            <form id="kontaktForm" action="#" method="post">
                <table>
                    <tr>
                        <td>Imię: </td>
                        <td><input type="text" id="imie" name="imie"></td>
                    </tr>
                    <tr>
                        <td>Nazwisko: </td>
                        <td><input type="text" id="nazwisko" name="nazwisko"></td>
                    </tr>
                    <tr>
                        <td>E-mail: </td>
                        <td><input type="email" id="email" name="email"></td>
                    </tr>
                    <tr>
                        <td>Zgłoszenie </td>
                        <td><textarea id="zgloszenie" name="zgloszenie" rows="10" cols="40"></textarea></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="checkbox" id="regulamin" name="regulamin"> Zapoznałam/em się z regulaminem</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="reset">Resetuj</button>
                            <button type="button" id="przeslij">Prześlij</button>
                        </td>
                    </tr>
                </table>
            </form>
            <hr>
            <p id="komunikat"></p>
        </main>
        <footer>
            <p>Autor strony: <strong>123456</strong></p>
        </footer>
    </div>


    <script>
        document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('przeslij').addEventListener('click', przetworzFormularz);
    });

    function przetworzFormularz() {
        const imie = document.getElementById('imie').value.trim().toUpperCase();
        const nazwisko = document.getElementById('nazwisko').value.trim().toUpperCase();
        const zgloszenie = document.getElementById('zgloszenie').value.trim();
        const regulamin = document.getElementById('regulamin').checked;
        const komunikat = document.getElementById('komunikat');

        if (!regulamin) {
            komunikat.textContent = "Musisz zapoznać się z regulaminem";
            komunikat.style.color = "red";
        } else {
            komunikat.innerHTML = `${imie} ${nazwisko}<br>Treść Twojej sprawy: ${zgloszenie}`;
            komunikat.style.color = "Navy";
        }
    }

    </script>
</body>
</html>
```

**Wyjaśnienie:**
- Plik HTML dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
- Skrypt JavaScript `przetworzFormularz` jest używany do wyświetlania wypełnionych danych w elemencie `<p>` o id `komunikat`.
    
</CodeGroupItem>   
<CodeGroupItem title="styl.css">

### Styl.css

```css
/* Styl CSS */
body {
    background-color: #EEEEEE;
    font-family: Helvetica, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    width: 90%;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo , header .menu {
    background-color: LightBlue;
    height: 100px;
    width: 50%;
    padding: 10px 0;
    box-sizing: border-box;
}





nav.menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

section.banner {
    background-color: #DDDDDD;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

main {
    color: Navy;
    margin: 50px;
    height: 400px;
}

footer {
    text-align: right;
    background-color: LightBlue;
    padding: 10px;
}

button {
    background-color: LightBlue;
    color: Navy;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    opacity: 0.8;
}

nav.menu a {
    color: Navy;
    font-size: 150%;
    font-weight: bold;
    text-decoration: none;
    margin: 10px;
    padding: 5px;
}

nav.menu a:hover {
    border: 1px solid Navy;
}

```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

</CodeGroupItem>
</CodeGroup>


<blockquote className="warning">
                <strong>UWAGA: Załączanie skryptu</strong>
                Upewnij się, że poprawnie dołączasz skrypt do swoich plików. Możesz to zrobić, dodając go jako zewnętrzny plik za pomocą
                 <code> &lt;script src="skrypt.js"&gt;&lt;/script&gt;</code> albo umieszczając skrypt bezpośrednio w treści strony. W tym przypadku, najlepiej umieścić skrypt na końcu dokumentu, tuż przed zamykającym znacznikiem <code>&lt;/body&gt;</code>.
    </blockquote>

---

## Podsumowanie

🎉 **Gratulacje!** Udało Ci się stworzyć stronę internetową z grafiką i animacją oraz formularzem kontaktowym.

#### Przydatne zasoby:
- [HTML Odwołanie](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Odwołanie](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JS Odwołanie](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [PHP Odwołanie](https://phpkurs.pl/)

<blockquote className="danger">
                <strong>UWAGA: Egzamin zawodowy INF03</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu inf03. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*
