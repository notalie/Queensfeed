<html>
<head>
<?php
	$con = mysqli_connect("localhost",“root",“24e3c07d541eb314");
	if (!$con) {
		die('Could not connect: ' . mysqli_connect_error());
	}
	session_start();
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
					  <li><a href="HomePageAL.php">Home</a></li>
					  <li><a href="aboutAL.php">About Us</a></li>
					  <li><a href="FoodTruckAL.php">Food Trucks</a></li>
					  <li><a href="contactAL.php">Contact Us</a></li>
					  <li class="active"><a href="LocationAL.php">Map</a></li>
					</ul>
				  </div>
				</nav>
				<script type="text/javascript">
							var now=new Date();
							var hour= now.getHours();
							if (hour<12)
								document.write("Good Morning, ");
							else if (hour<18)
								document.write("Good Afternoon, ");
							else if (hour<20)
								document.write("Good Evening, ");
							else
								document.write("Good Night, ");
				</script>
				<?php
				$name = $_SESSION['adminName'];
				echo $name . "" . '</br>';
				?>
		</div>
		
		<div class="col-lg-12 col-sm-12 col-xs-12" style="height:20px;"></div>

		<div class="col-lg-offset-4 col-lg-4 col-sm-offset-4 col-sm-4 col-xs-12">
				<form class="navbar-form navbar-left" action="locationAL1.php" method="post">
						<div class="input-group">
							<input type="text" name="search" class="form-control" placeholder="Search for..." required/>
							<span class="input-group-btn">
							<button class="btn btn-secondary" type="submit" value="Submit"><span class="glyphicon glyphicon-search"></span> Search</button>
							</span>
						</div>
				</form>
		</div>
		
		<div class="row nav_row">
				<div class="col-lg-offset-8 col-lg-4 col-sm-offset-8 col-sm-4 col-xs-12">
					<a href="HomePage.html" class="btn btn-default" id="button"><span class="glyphicon glyphicon-log-out"></span> Log Out</a>
				</div>
		</div>
		
		<div class="row">
		<div class="col-lg-offset-4 col-lg-4 col-sm-offset-4 col-sm-4 col-xs-12">
			<div id="googleMap" style="width:100%;height:400px;"></div>
		</div>
		</div>
		
<script>
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>		
</body>
</html>						
			