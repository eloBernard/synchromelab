<?php
session_start();

// Check if the user is already logged in
if (isset($_SESSION["username"])) {
    echo "<p>You are already logged in as: " . $_SESSION["username"] . "</p>";
    echo '<a href="logout.php">Logout</a>';
} else {
    echo '<form action="authenticate.php" method="post">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <input type="submit" value="Login">
        </form>';
}
?>
