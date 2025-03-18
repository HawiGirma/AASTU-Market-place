<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "shop";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT name FROM categories";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | Shop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="container">
        <div class="sidebar">
            <ul>
                <?php 
                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<li>" . htmlspecialchars($row['name']) . "</li>";
                    }
                } else {
                    echo "<li>No categories available</li>";
                }
                ?>
            </ul>
        </div>

        <div class="banner">
            <div class="banner-content">
                <img src="apple-logo.png" alt="Apple Logo" class="logo">
                <h2>iPhone 14 Series</h2>
                <p class="discount">Up to 10% off Voucher</p>
                <a href="#" class="shop-now">Shop Now &rarr;</a>
                <div class="dots">
                    <span></span>
                    <span class="active"></span>
                    <span></span>
                </div>
            </div>
            <img src="iphone.png" alt="iPhone 14" class="banner-image">
        </div>
    </div>

</body>
</html>

<?php
$conn->close();
?>
