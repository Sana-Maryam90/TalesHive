<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
  
    <link rel="stylesheet" href="profile.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
</head>
<body>

    <div class="profile">
        <a href="#" class="profile-icon"><i class='bx bxs-user-circle'></i></a>

        <div class="profile-popup">
            <span class="username"></span>

            <div class="username-bar">
                <div></div>
                <h3>Your Name</h3>
            </div>
            <div class="profile-options">
                <div class="option">
                    <span class="icon"><i class='bx bxs-user-account' ></i></span>
                    <a href="#">View profile</a>
                </div>
                <div class="option">
                    <span class="icon"><i class='bx bxs-briefcase' ></i></span>
                    <a href="#">Your Workspace</a>
                </div class="option">
                <div class="option">
                    <span class="icon"><i class='bx bxs-log-out' ></i></span>
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <script src="profile.js"></script>

</body>
</html>