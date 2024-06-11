# Rozwiązanie arkusza INF 03 styczeń 2024 - 8

W tym arkuszu trzeba było zrobić stronę internetową z wskazanym html, css, js.

## Kod na Stronę Internetową

**Index.html**

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
**fryzura.html**

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
**styl8.css**
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

