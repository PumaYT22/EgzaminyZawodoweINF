---

# Rozwiązanie arkusza EE09 styczeń 2023 - 3


---

## Spis Treści

1. Wprowadzenie
2. Kod na Stronę Internetową
    - informacje.html
    - Styl3.css
3. Podsumowanie

---

## Wprowadzenie!

<blockquote class="introduction">
                <strong>Cel arkuszu: Co trzeba było wykonać</strong>
                W tym arkuszu trzeba było wykonać grafikę (przeskalować) oraz stronę internetową z wskazanym html,css,js.
</blockquote>

---

## Kod na Stronę Internetową

<blockquote className="info">
    <strong>Wskazówka: Korzystanie z Emmet w Visual Studio Code</strong>
    Visual Studio Code posiada wbudowane wiele przydatnych funkcji, takich jak IntelliSense czy Emmet, które znacznie przyspieszają pracę programistów. Przy edycji plików HTML możemy szybko generować szablony strony, wpisując skrótowe komendy, jak na przykład `!` - wykrzyknik.
</blockquote>

<CodeGroup>
    <CodeGroupItem title="informacje.html">
      
### informacje.html
      
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gazeta</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <header>
        <h1>Gazeta codzienna</h1>
    </header>
    <main>
        <section id="articles">
        <button onclick="showArticle(1)">Sekcja wiadomości z kraju</button>
        <article>
            <h2>Szczepimy seniorów</h2>
            <p> Od pi�tku osoby powy�ej 80 lat mog� zarejestrowa� si� na szczepienie przeciw COVID-19. Do wyboru maj� niemal sze�� tysi�cy przychodni, w kt�rych od 25 stycznia b�d� odbywa� si� szczepienia. Termin mo�na zarezerwowa� telefonicznie, przez internet lub w punkcie szczepie�. Na szczepienie przeciw COVID-19 od pi�tku mog� si� umawia� seniorzy powy�ej 80. roku �ycia, a tydzie� p�niej rusz� zapisy dla os�b, kt�re uko�czy�y 70 lat. Szczepienia dla senior�w rozpoczn� si� 25 stycznia.</p>
        </article>
        <button onclick="showArticle(2)">Sekcja sportowa</button>
        <article>
            <h2>Stoch i Kubacki na podium w Bischofshofen</h2>
            <p>
                W �rod� w Bischofshofen odb�dzie si� ostatni konkurs 69. Turnieju Czterech Skoczni. Po trzech zawodach prowadzi Kamil Stoch z du�� przewag� nad Dawidem Kubackim i Norwegiem Halvorem Egnerem Granerudem. Skocznia im. Paula Ausserleitnera w Bischofshofen, gdzie tradycyjnie ko�czy si� TCS, jest szcz�liwa dla reprezentant�w Polski, kt�rzy wygrali tu trzy z ostatnich czterech konkurs�w - Stoch w 2017 i 2018, a Kubacki - w ubieg�ym roku.</p>
        </article>
        <button onclick="showArticle(3)">Sekcja aktualności</button>
        <article>
            <h2>Dzie� Babci 2021. Pomys�y na prezent i historia �wi�ta w Polsce</h2>
            <p>Dzie� Babci to wyj�tkowe �wi�to, w kt�rym zewsz�d p�yn� �yczenia skierowane w�a�nie w stron� bab�. Najm�odsi w�asnor�cznie lub z drobn� pomoc� wykonuj� pi�kne laurki, a nieco starsze wnucz�ta z pewno�ci� maj� przygotowany niejeden prezent. Tego dnia w szko�ach cz�sto przygotowywane s� tak�e r�ne przedstawienia, a oryginalne scenariusze cz�sto wywo�uj� u dziadk�w �zy wzruszenia.</p>
        </article>
        <button onclick="showArticle(4)">Sekcja ogłoszeń</button>
        <article>
            <h2>Zaginione / znalezione</h2>
            <p> W O�awie, na ulicy Lipowej w pi�tek wieczorem znalaz�am czarnego ma�ego kotka. Jest zadbany i ufny, ma czerwon� obr�k�. Telefon 600100200.</p>
        </article>
    </section>
    <section id="redakcja">
        <blockquote>Pierwszym obowi�zkiem dziennikarza jest nie nudzi�. Drugim: nie ba� si�. Trzecim: niczego nie wyrzuca�.</blockquote>
        <img src="obraz.jpg" alt="redaktor naczelny">
        <h5>Jan Nowak<br>Redaktor naczelny gazety codziennej</h5>
        <h3>Zespół</h3>
        <table>
            <tr><td>Ewa</td><td>wiadomości z kraju</td></tr>
            <tr><td>Krzysiek</td><td>sport</td></tr>
            <tr><td>Ewelina</td><td>aktualności</td></tr>
            <tr><td>Robert</td><td>ogłoszenia</td></tr>
        </table>
        <a href="http://dziennikarz.pl/" target="_blank">Więcej artykułów</a>
        <p>Stronę gazety codziennej przygotował: PESEL_NUMBER</p>
    </section>
    </main>
    
    <script>
        function showArticle(articleIndex) {
            var articles = document.getElementsByTagName('article');
            for (var i = 0; i < articles.length; i++) {
                articles[i].style.display = (i === articleIndex - 1) ? 'block' : 'none';
            }
        }

        window.onload = function() {
            var articles = document.getElementsByTagName('article');
            for (var i = 0; i < articles.length; i++) {
                articles[i].style.display = 'none';
            }
        }

    </script>
</body>
</html>

```

**Wyjaśnienie:**
- Ten plik PHP definiuje strukturę strony głównej.
- W sekcji `<head>` znajdują się meta dane strony oraz odwołania do arkusza stylów.


</CodeGroupItem> 
<CodeGroupItem title="styl3.css">

### Styl3.css

```css
body {
    font-family: Georgia;
    background-color: AliceBlue;
}

header {
    background-color: #A00037;
    color: white;
    text-align: center;
    font-size: 150%;
    padding: 3px;
}

main{
   display: flex;
   justify-content: space-around;
}

#articles {
    width: 70%;
}

button {
    background-color: #D81B60;
    color: white;
    padding: 15px;
    margin: 20px 0;
    width: 100%;
}

#redakcja {
    background-color: #D81B60;
    color: white;
    width: 20%;
    padding: 5px;
    margin: 10px;
    box-shadow: 15px 15px 12px DimGray;
}

#redakcja h5, #redakcja blockquote {
    font-style: italic;
    text-align: center;
    margin: 0;
}

img {
    width: 100%;
    height: max-content;
}

table {
    margin: auto;
    width: 95%;
    border: 1px solid AliceBlue;
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
