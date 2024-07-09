---

# Rozwiązanie arkusza EE09 styczeń 2024 - 1


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - galeria.html
    - Styl2.css
3. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować,skadrować) oraz stronę internetową z wskazanym html,css,js.
</blockquote>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="galeria.html">
      
### galeria.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria</title>
    <link rel="stylesheet" href="styl2.css">
    <script src="script.js" defer></script>
</head>
<body>
    <section id="baner">
        <h1>Galeria obrazów</h1>
    </section>
    <main>
        <section id="lewy">
            <img src="zdjecie.jpg" alt="zdjęcie dnia">
            <h3>Zdjęcia opublikowali</h3>
            <table>
                <tr>
                    <td>Anna Porada</td>
                    <td>10 zdjęć</td>
                </tr>
                <tr>
                    <td>Krzysztof Wasilewski</td>
                    <td>12 zdjęć</td>
                </tr>
                <tr>
                    <td>Monika Kowalska</td>
                    <td>4 zdjęć</td>
                </tr>
            </table>
        </section>
        <section id="prawy">
            <button onclick="prev()">prev</button>
            <img id="activeImage" src="1.jpg" alt="galeria">
            <button onclick="next()">next</button>
            <hr>
            <img class="thumbnail" src="1.jpg" alt="miniatura" onclick="showImage(1)">
            <img class="thumbnail" src="2.jpg" alt="miniatura" onclick="showImage(2)">
            <img class="thumbnail" src="3.jpg" alt="miniatura" onclick="showImage(3)">
            <img class="thumbnail" src="4.jpg" alt="miniatura" onclick="showImage(4)">
            <img class="thumbnail" src="5.jpg" alt="miniatura" onclick="showImage(5)">
        </section>
    </main>
    <footer id="stopka">
        <a href="https://pixabay.com" target="_blank">Więcej obrazów</a>
        <p>Galerię wykonał: NaukaOdZera</p>
    </footer>

    <script>
        let activeImageIndex = 1;
            const totalImages = 5;

            function showImage(index) {
                activeImageIndex = index;
                document.getElementById('activeImage').src = `${index}.jpg`;
            }

            function next() {
                activeImageIndex = (activeImageIndex % totalImages) + 1;
                showImage(activeImageIndex);
            }

            function prev() {
                activeImageIndex = (activeImageIndex - 2 + totalImages) % totalImages + 1;
                showImage(activeImageIndex);
            }

    </script>
</body>
</html>

```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.


</CodeGroupItem> 
<CodeGroupItem title="styl.css">

### Styl2.css

```css
* {
    font-family: Garamond, serif;
    background-color: MistyRose;
    color: rgb(62, 39, 35);
    text-align: center;
}



#baner {
    width: 100%;
}

main{
    display: flex;
}

#lewy {
    width: 20%;
    height: 600px;
    margin: 30px;
    float: left;
    overflow:auto;
    box-shadow: 15px 15px 10px DimGray;
}

#prawy {
    width: 65%;
    height: 600px;
    float: left;
}

#lewy img {
    width: 100%;
}

.thumbnail {
    width: 140px;
    padding: 2px;
    border-radius: 5%;
    cursor: pointer;
}

.thumbnail:hover {
    border: 1px dotted black;
}

#activeImage {
    width: 500px;
    margin: 30px;
    box-shadow: 15px 15px 10px DimGray;
}

table {
    width: 100%;
    border: 1px dashed black;
    border-collapse: collapse;
}

#stopka {
    width: 100%;
    clear: both;
}

```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.


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
                <strong>UWAGA: Egzamin zawodowy EE09</strong>
                Upewnij się, że dokładnie zapoznałeś się z wymaganiami egzaminacyjnymi dotyczącymi przedmiotu EE09. Sprawdź najnowsze informacje na stronie Centralnej Komisji Egzaminacyjnej.
</blockquote>

Jeśli masz pytania lub znalazłeś błąd, nie wahaj się skontaktować! 😊

Autor: *NaukaOdZera*
