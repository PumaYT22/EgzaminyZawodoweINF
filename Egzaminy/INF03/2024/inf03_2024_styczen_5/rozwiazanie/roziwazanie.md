# Rozwiązanie arkusza INF03 2024 Styczen 5

W tym arkuszu:
- Przeskalowanie grafik do odpowiednich wielkości
- Zapytania do bazdy danych
- Strona dwa html,css i js 

## Kod na Stronę Internetową

**index.html**
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Salon kosmetyczny</title>
    <link rel="stylesheet" href="styl7.css">
</head>
<body>


    <section id="container">
        <section id="lewy">
            <section id="lewy-1">
                <h2>Nasza oferta</h2>
                <ol>
                    <li><a href="twarz.html">Oczyszczanie twarzy</a>
                        <ul>
                            <li>Peeling</li>
                            <li>Maska</li>
                        </ul>
                    </li>
                    <li>Masaż</li>
                    <li>Makijaż</li>
                </ol>
                <a href="index.html">Strona główna</a>
            </section>
            <section id="lewy-2">
                <img src="obraz1.jpg" alt="Personel">
            </section>
        </section>
        <section id="prawy">
            <section id="prawy-1">
                <h1>Usługi kosmetyczne</h1>
            </section>
            <section id="prawy-2">
                <p>Witaj! Miło nam, że odwiedziłeś nasz salon. Zapoznaj się z ofertą lub skontaktuj się z nami.</p>
                <img src="obraz2.jpg" alt="Zrelaksuj się">
                <h3>Telefon: 111 222 333</h3>
            </section>
        </section>
        
    </section>
    <footer>
        <p>Autor: [Numer zdającego]</p>
    </footer>


    
</body>
</html>
```

**twarz.html**
```html
    <!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Salon kosmetyczny</title>
    <link rel="stylesheet" href="styl7.css">
</head>
<body>

    
    <section id="container">
        <section id="lewy">
            <section id="lewy-1">
                <h2>Nasza oferta</h2>
                <ol>
                    <li><a href="twarz.html">Oczyszczanie twarzy</a>
                        <ul>
                            <li>Peeling</li>
                            <li>Maska</li>
                        </ul>
                    </li>
                    <li>Masaż</li>
                    <li>Makijaż</li>
                </ol>
                <a href="index.html">Strona główna</a>
            </section>
            <section id="lewy-2">
                <img src="obraz1.jpg" alt="Personel">
            </section>
        </section>
        <section id="prawy">
            <section id="prawy-1">
                <h1>Usługi kosmetyczne</h1>
            </section>
            <section id="prawy-2">
                <h3>Kalkulator ceny wizyty</h3>
                <form>
                    <input  type="checkbox" id="peeling" name="peeling">
                    <label for="peeling">Peeling</label><br>
                    <input  type="checkbox" id="maska" name="maska">
                    <label for="maska">Maska</label><br>
                    <input  type="checkbox" id="masaz-twarzy" name="masaz-twarzy">
                    <label for="masaz-twarzy">Masaż twarzy</label><br>
                    <input  type="checkbox" id="makijaz" name="makijaz">
                    <label for="makijaz">Makijaż</label><br>
                    <button type="button" onclick="obliczCene()">Oblicz cenę</button>
                    <p id="wynik"></p>
                </form>
            </section>
        </section>
        
    </section>
    <footer>
        <p>Autor: [Numer zdającego]</p>
    </footer>



    
    
 

    <script>
        function obliczCene() {
            let suma = 0;
            if (document.getElementById('peeling').checked) suma += 45;
            if (document.getElementById('maska').checked) suma += 30;
            if (document.getElementById('masaz-twarzy').checked) suma += 20;
            if (document.getElementById('makijaz').checked) suma += 50;
            document.getElementById('wynik').innerHTML = 'Cena zabiegów: ' + suma + ' PLN';
        }

    </script>

</body>
</html>
```

**styl7.css**
```css
body {
    font-family: Cambria, serif;
}

#container{
    display: flex;
    flex-direction: row;
}

#lewy{
    display: flex;
    flex-direction: column;
    background-color: #E1BEE7;
    width: 25%;
   
}

#prawy{
    display: flex;
    flex-direction: column;
    width: 75%;
    font-size: 170%;
    text-align: center;
}

#prawy-1{
    background-color: #9C64A6;
    color:white;
    height: 150px;
    letter-spacing: 5px;
}

#prawy-2{
    color: indigo;
    height: 580px;
}

#lewy-1{
    height: 400px;
}

#lewy-2{
    height: 330px;
}

footer {
    background-color: #9C64A6;
    color: white;
    clear: both;
    padding: 10px;
    text-align: center;
}


h2 {
    text-align: center;
}

ul {
    list-style-type: circle;
}

img {
    padding: 4px;
    margin: 15px;
}

img:hover {
    padding: 3px;
    border: 1px dashed indigo;
}

a {
    padding: 25px;
}

```