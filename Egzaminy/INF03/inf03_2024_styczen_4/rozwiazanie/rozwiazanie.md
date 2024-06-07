# Rozwiązanie arkusza INF 03 styczeń 2024 - 4

W tym arkuszu trzeba było wykonać grafikę i animację oraz stronę internetową z wskazanym html, css, php.

## Kod na Stronę Internetową

**index.html**

```php
﻿<!DOCTYPE HTML > 
	<html lang="pl"> 
		<head> 
			<meta charset="utf-8">
			<title>Zadania na lipiec</title>
			<link rel='stylesheet' href='styl6.css'>
		</head>
	<body>
		<div id="box">
			<div id="ban-1">
			<img src="logo1.png" alt="lipiec">
			</div>
			<div id="ban-2">
			
			<h1>TERMINARZ</h1>
			<p>najbliższe zadania:</p>
<?php
	$conn = mysqli_connect('localhost', 'root', '', 'terminarz');
	$q = "SELECT DISTINCT wpis from zadania WHERE dataZadania BETWEEN '2020-07-01' AND '2020-07-07' AND wpis!=''";

	$result = mysqli_query($conn, $q);
	
	while($row = mysqli_fetch_assoc($result))
			
		{
			echo $row['wpis'].'; ';
		}
?>
			
			</div>
			<div id="tresc">
<?php
				
	$q = "SELECT dataZadania, wpis from zadania where miesiac='lipiec'";

	$result = mysqli_query($conn, $q);
	
	while($row = mysqli_fetch_assoc($result))
			
		{
			echo"<div class='blok'>";
			
			echo "<h6>".$row['dataZadania']."</h6>";
			echo "<p>".$row['wpis']."</p>";
			echo"</div>";
		}
		mysqli_close($conn);
				?>
			</div>
			<div id="stopka">
			<a href="sierpien.html">Terminarz na sierpień</a> 
			<p>Stronę wykonał: NaukaOdZera</p>
			</div>
		</div>
		
		
	</body>
</html>
```
**sierpien.html**

```html
﻿<!DOCTYPE HTML > 
	<html lang="pl"> 
		<head> 
			<meta charset="utf-8">
			<title>Zadania na lipiec</title>
			<link rel='stylesheet' href='styl6.css'>
		</head>
	<body>
		<p>strona w trakcie budowy</p>		
	</body>
</html>
```
**styl6.css**
```css
*
{
	font-family: Verdana;
}

#ban-1, #ban-2
{
	background-color: #6F79A8; 
	color: #fff;
	height: 140px;
	float: left;
}

#ban-1
{
	width: 30%;
}

#ban-2
{
	width: 70%;
}
#tresc
{
	clear: both;
}

.blok{
	background-color: #9FA8DA;
	width: 160px;
	height: 85px;
	margin: 5px;
	border: 1px solid #6F79A8;
	overflow: hidden;
	float: left;
}

.blok:hover
{
	background-color: #6F79A8;
	color: white;
}

#stopka
{
	background-color: #6F79A8;
	color: white;
	padding: 5px;
	text-align: right;
	clear: both;
}

h6
{
	text-align: center;
}
```

