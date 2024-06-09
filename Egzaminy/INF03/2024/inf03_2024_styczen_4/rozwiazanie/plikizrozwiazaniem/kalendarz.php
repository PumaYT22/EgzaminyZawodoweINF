<!DOCTYPE HTML > 
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
