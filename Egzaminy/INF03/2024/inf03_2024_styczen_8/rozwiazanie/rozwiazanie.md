---

# Rozwiązanie arkusza INF 03 styczeń 2024 - 8


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - index.html
    - fryzura.html
    - styl8.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było zrobić stronę internetową z wskazanym HTML, CSS, JS.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT imie, nazwisko, stanowisko FROM kadra WHERE stanowisko="fryzjer" OR stanowisko="stylista";</code></pre>
            Ta kwerenda wybiera kolumny <code>imie</code>, <code>nazwisko</code> oraz <code>stanowisko</code> z tabeli <code>kadra</code> dla osób, które pracują jako fryzjer lub stylista.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT COUNT(nazwa), MAX(cena) FROM uslugi WHERE rodzaj=2;</code></pre>
            Ta kwerenda używa funkcji agregujących:
            <ul>
                <li>
                    <code>COUNT(nazwa)</code> liczy liczbę rekordów w kolumnie <code>nazwa</code> spełniających warunek <code>rodzaj=2</code>.
                </li>
                <li>
                    <code>MAX(cena)</code> znajduje maksymalną wartość w kolumnie <code>cena</code> dla rekordów spełniających ten sam warunek.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT nazwa, imie FROM uslugi JOIN kadra ON kadra_id=kadra.id WHERE rodzaj>1;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>uslugi</code> z tabelą <code>kadra</code> na podstawie klucza obcego <code>kadra_id</code> odpowiadającego kolumnie <code>id</code> w tabeli <code>kadra</code>.
                </li>
                <li>
                    Wynik zawiera kolumny <code>nazwa</code> i <code>imie</code> dla rekordów, gdzie <code>rodzaj</code> jest większy niż 1.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>ALTER TABLE USLUGI ADD opinia TEXT;</code></pre>
            Ta kwerenda dodaje nową kolumnę <code>opinia</code> typu <code>TEXT</code> do tabeli <code>USLUGI</code>.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
KWERENDA 1:
SELECT imie, nazwisko, stanowisko FROM kadra WHERE stanowisko="fryzjer" OR stanowisko="stylista";
KWERENDA 2:
SELECT COUNT(nazwa), MAX(cena) FROM uslugi WHERE rodzaj=2;
KWERENDA 3:
SELECT nazwa, imie FROM uslugi JOIN kadra ON kadra_id= kadra.id WHERE rodzaj>1;
KWERENDA 4:
ALTER TABLE USLUGI ADD opinia TEXT;
```

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fryzjerstwo</title>
    <link rel="stylesheet" href="styl8.css">
</head>
<body>
    <div id="container">
        <div id="lewy1">
            <h1><a href="index.html">SALON FRYZJERSKI</a></h1>
        </div>
        <div id="prawy1">
            <h4> <a href="fryzura.html">Ceny strzyżenia</a></h4>
            <table>
                <tr>
                    <td>Długość włosów</td>
                    <td>Cena</td>
                </tr>
                <tr>
                    <td>Krótkie</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>Średnie</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Półdługie</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>Długie</td>
                    <td>50</td>
                </tr>
            </table>
        </div>
        <div id="lewy2">
            <img src="obraz2.jpg" alt="Strzyżenie">
        </div>
        <div id="prawy2">
            <img src="obraz1.jpg" alt="Fryzjerka">
        </div>
        <div id="lewy3">
            <p>Witaj! Miło nam, że odwiedziłeś nasz salon. Sprawdź promocje!</p>
            <h4>Kontakt: 444 555 666</h4>
        </div>
        <div id="stopka">
            <p>Autor: NaukaOdZera</p>
        </div>
    </div>
</body>
</html>
```

**Wyjaśnienie:**
- Ten plik HTML definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów i ikony.
- Struktura strony zawiera baner z animacją, menu nawigacyjne, trzy sekcje z treścią oraz stopkę.

</CodeGroupItem>
<CodeGroupItem title="fryzura.html">
      
### Fryzura.html

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fryzjerstwo</title>
    <link rel="stylesheet" href="styl8.css">
</head>
<body>
    <div id="container">
        <div id="lewy1">
            <h1><a href="index.html">SALON FRYZJERSKI</a></h1>
        </div>
        <div id="prawy1">
            <h4> <a href="fryzura.html">Ceny strzyżenia</a></h4>
            <table>
                <tr>
                    <td>Długość włosów</td>
                    <td>Cena</td>
                </tr>
                <tr>
                    <td>Krótkie</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>Średnie</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>Półdługie</td>
                    <td>40</td>
                </tr>
                <tr>
                    <td>Długie</td>
                    <td>50</td>
                </tr>
            </table>
        </div>
        <div id="lewy2">
            <h2>PROMOCJA!</h2>
            <form>
                <input type="radio" name="wlosy" id="krotkie" value="25">Krótkie <br>
                <input type="radio" name="wlosy" id="srednie" value="30">Średnie <br>
                <input type="radio" name="wlosy" id="poldlugie" value="40">Półdługie <br>
                <input type="radio" name="wlosy" id="dlugie" value="50">Długie <br>
                <button type="button" onclick="wyswietlCene()">Odkryj promocję</button>
            </form>
            <p id="promocjaWynik"></p>
        </div>
        <div id="prawy2">
            <img src="obraz1.jpg" alt="Fryzjerka">
        </div>
        <div id="lewy3">
            <p>Witaj! Miło nam, że odwiedziłeś nasz salon. Sprawdź promocje!</p>
            <h4>Kontakt: 444 555 666</h4>
        </div>
        <div id="stopka">
            <p>Autor: NaukaOdZera</p>
        </div>
    </div>
    <script>
        function wyswietlCene() {
            var krotkie = document.getElementById("krotkie");
            var srednie = document.getElementById("srednie");
            var poldlugie = document.getElementById("poldlugie");
            var dlugie = document.getElementById("dlugie");
            var promocyjnaCena;

            if (krotkie.checked) {
                promocyjnaCena = krotkie.value - 10;
            } else if (srednie.checked) {
                promocyjnaCena = srednie.value - 10;
            } else if (poldlugie.checked) {
                promocyjnaCena = poldlugie.value - 10;
            } else if (dlugie.checked) {
                promocyjnaCena = dlugie.value - 10;
            }

            if (promocyjnaCena != undefined) {
                document.getElementById("promocjaWynik").innerText = `cena promocyjna: ${promocyjnaCena}`;
            }
        }
    </script>
</body>
</html>
```

**Wyjaśnienie:**
- Plik HTML dla strony kontaktowej zawiera formularz do wypełnienia przez użytkownika.
- W sekcji `<body>` znajduje się formularz z polami dla imienia, nazwiska, emaila oraz listy zgłoszeń.
- Skrypt JavaScript `wyswietlCene` jest używany do wyświetlania wypełnionych danych w elemencie `<p>` o id `promocjaWynik`.
    
</CodeGroupItem>   
<CodeGroupItem title="styl8.css">

### Styl8.css

```css
*{
    font-family: Garamond;
    text-align: center;
}
#lewy1{
    width: 72%;
    background-color: #795548;
    font-size: 170%;
    float: left;
}
#prawy1{
    float: right;
    background-color: #BCAAA4;
    color: #795548;
    height: 400px;
    width: 28%;
}
#lewy2{
    float: left;
    height: 400px;
    width: 72%;
}
#prawy2{
    float: right;
    background-color: #BCAAA4;
    color: #795548;
    height: 400px;
    width: 28%;
}
#lewy3{
    width: 72%;
    float: left;
}

#stopka{
    clear: both;
    background-color: #795548;
    color: white;
    padding: 20px;
}
table{
    margin: auto;
    width: 80%;
    border: solid 1px #795548;
}
tr:hover{
    background-color: sienna;
    color: white;
}
h4{
    font-size: 200%;
}
img{
    padding: 20px;
    border-radius: 40px;
}
a{
    color: white;
}
input[type="radio"] {
    margin: 7px;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.
- Input z [type="radio"] definiuje tylko elementy gdzie jest typ zaznaczania pojedynczego czyli radio

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
