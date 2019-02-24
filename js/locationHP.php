<html>
<head>
<?php
	$con = mysqli_connect("localhost","root","24e3c07d541eb314");
	if (!$con) {
		die('Could not connect: ' . mysqli_connect_error());
	}
?>
	<title>Food Truck Tracker - Map</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/lib/w3.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> <!-- 3 KB -->
	<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->
	<link rel="shortcut icon" type="image/png" href="favicon.png">
 

</head>
<style type="text/css">
	body{
		background-image:url(background.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
<body>
	<div class="container">
		<div class="row">
			<div class="col-lg-12 col-xs-12 col-md-12">
				<img src="foodTruck.jpg" width="1140px" height="200px">
			</div>
			
			<div class="col-lg-12 col-md-12 col-xs-12">
				<nav class="navbar navbar-inverse">
				  <div class="container-fluid">
					<ul class="nav navbar-nav">
					 <li><a href="HomePageUL.php">Home</a></li>
					  <li><a href="#">About Us</a></li>
					  <li><a href="FoodTruckUL.php">Food Trucks</a></li>
					  <li><a href="#">Contact Us</a></li>
					  <li class="active"><a href="LocationUL.php">Map</a></li>
					</ul>
				  </div>
				</nav>
				
				<div class="row nav_row">
				<div class="col-lg-offset-8 col-lg-4 col-sm-offset-8 col-sm-4 col-xs-12">
					<a href="SignUpPage.php" class="btn btn-default" id="button"><span class="glyphicon glyphicon-user"></span> Sign Up</a>
					<a href="UserLogin.html" class="btn btn-default" id="button"><span class="glyphicon glyphicon-log-in"></span> Login</a>
					<a href="AdminLogin.html" class="btn btn-default" id="button"><span class="glyphicon glyphicon-wrench"></span> Owner Login</a>>
				</div>
		</div>
		</div>
		
		<div class="col-lg-12 col-sm-12 col-xs-12" style="height:20px;"></div>

		<div class="row">
				<div class="col-lg-offset-2 col-lg-8 col-sm-offset-2 col-sm-8 col-xs-12">
					<?php
						$servername = "localhost";
						$username = "root";
						$password = "24e3c07d541eb314";
						$dbname = "FoodTruckTracker";
						$con = new mysqli($servername, $username, $password, $dbname);
						
						$search = $_POST['search']; 
						echo "<h4>Search result for <b>$search</b></h4><hr></br>";
						
						$search_exploded = explode (" ", $search);
						$x = 0;
						$construct = "";
						
						foreach($search_exploded as $search_each)
						{
							$x++;
							if($x==1)
								$construct .="SearchKeywords LIKE '%$search_each%'";
							else
								$construct .="OR SearchKeywords LIKE '%$search_each%'";
						}
						 
						$sql ="SELECT * FROM searchengine WHERE $construct";
						$result = mysqli_query($con, $sql);
						 
						$foundnum = mysqli_num_rows($result);
						 
						if ($foundnum==0)
						echo "Sorry, there are no matching result for <b>$search</b>.</br></br>
							Please try another keywords or check your spelling.</br>";
						else
						{
							echo "$foundnum results found !<p></br>";
							 
							while($rows = mysqli_fetch_assoc($result))
							{
								$title = $rows['searchTitle'];
								$desc = $rows['searchDescription'];
								$url = $rows['searchURL'];
								 
								echo "<a href='$url'><b>$title</b></a><br>
									$desc<br>
									<a href='$url'>$url</a></p></br>";
							}
						}
					 
					?>
					</br>
			</div>
		</div>	
		
<script>
</body>
</html>						
			