<?php
// Database configuration
define('DB_HOST', 'localhost'); // Database host
define('DB_USER', 'root'); // Database username
define('DB_PASS', ''); // Database password
define('DB_NAME', 'GoPass'); // Database name
define('SQL_FILE', 'gopass.sql'); // Path to the SQL file

// Create a connection to the MySQL server
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS);

// Check the server connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the database exists
$db_selected = $conn->select_db(DB_NAME);
if (!$db_selected) {
    // If the database doesn't exist, create it
    $sql = "CREATE DATABASE " . DB_NAME;
    if ($conn->query($sql) === TRUE) {
        echo "Database " . DB_NAME . " created successfully.<br>";
    } else {
        die("Error creating database: " . $conn->error);
    }

    // Select the newly created database
    $conn->select_db(DB_NAME);

    // Run the SQL file to set up the tables
    if (file_exists(SQL_FILE)) {
        $sql_commands = file_get_contents(SQL_FILE);

        // Execute the SQL commands
        if ($conn->multi_query($sql_commands)) {
            echo "Database tables created successfully.<br>";
        } else {
            die("Error creating tables: " . $conn->error);
        }

        // Ensure all queries are processed
        while ($conn->next_result()) {;}
    } else {
        die("SQL file not found: " . SQL_FILE);
    }
} else {
    echo "Database " . DB_NAME . " already exists.<br>";
}

// Switch to the database for further operations
$conn->select_db(DB_NAME);
?>
