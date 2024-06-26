---

# Rozwiązanie arkusza INF 03 czerwiec 2022 - 1


---

## Spis Treści

1. Wprowadzenie
2. Operacje na Bazie Danych
3. Kod na Stronę Internetową
    - wedkuj.php
    - styl_1.css
4. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować),sql oraz stronę internetową z wskazanym html,css,php.
</blockquote>

---

## Operacje na Bazie Danych

<blockquote className="info">
    <strong>Wskazówka: Praca z kwerendami SQL</strong>
    Poniżej znajdują się przykładowe kwerendy SQL oraz krótkie wyjaśnienie kluczowych komend:
    <ul>
        <li>
            <strong>Kwerenda 1:</strong>
            <pre><code>SELECT id, nazwa, wystepowanie FROM ryby WHERE styl_zycia=1;</code></pre>
            Ta kwerenda wybiera kolumny <code>id</code>, <code>nazwa</code> i <code>wystepowanie</code> z tabeli <code>ryby</code> dla rekordów, gdzie <code>styl_zycia</code> jest równy 1.
        </li>
        <li>
            <strong>Kwerenda 2:</strong>
            <pre><code>SELECT Ryby_id, wymiar_ochronny FROM okres_ochronny WHERE wymiar_ochronny < 30;</code></pre>
            Ta kwerenda wybiera kolumny <code>Ryby_id</code> i <code>wymiar_ochronny</code> z tabeli <code>okres_ochronny</code> dla rekordów, gdzie <code>wymiar_ochronny</code> jest mniejszy niż 30.
        </li>
        <li>
            <strong>Kwerenda 3:</strong>
            <pre><code>SELECT nazwa, akwen, wojewodztwo FROM ryby JOIN lowisko ON ryby.id = lowisko.Ryby_id WHERE rodzaj = 3;</code></pre>
            Ta kwerenda demonstruje jak łączyć tabele:
            <ul>
                <li>
                    <code>JOIN</code> łączy tabelę <code>ryby</code> z tabelą <code>lowisko</code> na podstawie klucza obcego <code>Ryby_id</code>, odpowiadającego kolumnie <code>id</code> w tabeli <code>ryby</code>.
                </li>
                <li>
                    Wynik zawiera kolumny <code>nazwa</code>, <code>akwen</code> i <code>wojewodztwo</code> dla rekordów, gdzie <code>rodzaj</code> jest równy 3.
                </li>
            </ul>
        </li>
        <li>
            <strong>Kwerenda 4:</strong>
            <pre><code>ALTER TABLE ryby ADD dobowy_limit TINYINT UNSIGNED;</code></pre>
            Ta kwerenda dodaje nową kolumnę <code>dobowy_limit</code> typu <code>TINYINT UNSIGNED</code> do tabeli <code>ryby</code>.
        </li>
    </ul>
</blockquote>

### kwerendy.txt

```sql
KWERENDA 1:
SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis ASC;
KWERENDA 2:
SELECT cel, dataWyjazdu FROM wycieczki WHERE dostepna=0;
KWERENDA 3:
SELECT wycieczki.cel, wycieczki.cena, zdjecia.podpis FROM wycieczki JOIN zdjecia ON wycieczki.zdjecia_id=zdjecia.id WHERE cena > 1300; 
KWERENDA 4:
DROP TABLE uzytkownik;
```

---


## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="wedkuj.php">
      
### wedkuj.php
      
```php
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Wędkowanie</title>
    <link rel="stylesheet" href="styl_1.css">
</head>
<body>
    <section id="baner">
        <h1>Portal dla wędkarzy</h1>
    </section>
    <main>
        <section id="lewy">
            <section id="lewy1">
                <h3>Ryby zamieszkujące rzeki</h3>
                <ol>
                    <?php
                    // Skrypt 1
                    $conn = new mysqli('localhost', 'root', '', 'wedkowanie');
                    $query = "SELECT nazwa, akwen, wojewodztwo FROM ryby JOIN lowisko ON ryby.id = lowisko.Ryby_id WHERE rodzaj = 3;";
                    $result = $conn->query($query);

                    while ($row = $result->fetch_assoc()) {
                        echo "<li>{$row['nazwa']} pływa w rzece {$row['akwen']}, {$row['wojewodztwo']}</li>";
                    }

                    $conn->close();
                    ?>
                </ol>
            </section>
            <section id="lewy2">
                <h3>Ryby drapieżne naszych wód</h3>
                <table>
                    <tr>
                        <th>L.p.</th>
                        <th>Gatunek</th>
                        <th>Występowanie</th>
                    </tr>
                    <?php
                    // Skrypt 2
                    $conn = new mysqli('localhost', 'root', '', 'wedkowanie');
                    $query = "SELECT id, nazwa, wystepowanie FROM ryby WHERE styl_zycia=1;";
                    $result = $conn->query($query);
                
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>{$row['id']}</td>
                                <td>{$row['nazwa']}</td>
                                <td>{$row['wystepowanie']}</td>
                            </tr>"; 
                    }

                    $conn->close();
                    ?>
                </table>
            </section>
        </section>
        <section id="prawy">
            <img src="ryba1.jpg" alt="Sum">
            <br>
            <a href="kwerendy.txt">Pobierz kwerendy</a>
        </section>
    </main>
    <section id="stopka">
        <p>Stronę wykonał: NaukaOdZera</p>
    </section>
</body>
</html>

```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.
- Struktura strony zawiera sekcje nagłówek, main, dane oraz stopka.
- Skrypty PHP w sekcjach pobierają dane z bazy danych wedkowanie.

</CodeGroupItem>
<CodeGroupItem title="styl_1.css">

### Styl_1.css

```css
body {
    font-family: Helvetica, sans-serif;
}

#baner, #stopka {
    background-color: #00838F;
    color: white;
    padding: 5px;
    font-size: 130%;
    margin:0px;
    text-align: center;
}

main{
    display: flex;
}

#lewy{
    height: 450px;
    width: 55%;
    display: flex;
    flex-direction: column;
}

#lewy1, #lewy2 {
  
    background-color: #EFEFEF;
    width:100%;
}

#lewy1 {
   
    height: 150px;
}

#lewy2 {
    height: 300px;
}

#prawy {
    background-color: #4FB3BF;
    width: 45%;
    height: 450px;
    text-align: center;
}

img {
    box-shadow: 10px 10px 7px DimGray;
    margin: 20px;
}

table, th, td {
    border: 1px solid #4FB3BF;
    border-collapse: collapse;
    padding: 4px;
}

table {
    margin: auto;
    width: 80%;
}

tr:hover {
    background-color: #4FB3BF;
}
```
**Wyjaśnienie:**
- Arkusz stylów CSS definiuje wygląd strony.
- Kolory tła, czcionki oraz wygląd przycisków zostały ustawione, aby strona była estetyczna i spójna.
- Menu nawigacyjne oraz układ głównych sekcji są również zdefiniowane.

</CodeGroupItem>
</CodeGroup>


<blockquote className="warning">
    <strong>UWAGA: Załączanie skryptu PHP</strong>
    Upewnij się, że poprawnie dołączasz skrypt PHP do swoich plików. Możesz to zrobić, używając funkcji <code>include</code> lub <code>require</code> lub wstawić skrypt php w danej sekcji na stronie. Na przykład:
    <pre><code>&lt;?php include 'skrypt.php'; ?&gt;</code></pre>
    lub
    <pre><code>&lt;?php require 'skrypt.php'; ?&gt;</code></pre>
    Pamiętaj, że <code>require</code> zatrzyma wykonywanie skryptu w przypadku błędu, podczas gdy <code>include</code> tylko wyświetli ostrzeżenie i pozwoli na kontynuację. Upewnij się, że ścieżka do pliku jest poprawna     i plik jest dostępny.
    
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



