<?php

include('authentication.php');
include('includes/header.php');
?>
<!-- Add this script to show the notification -->
<script>
    // Wait until the page is fully loaded
    window.addEventListener("load", function() {
        // Check if the notification permission is granted
        if (Notification.permission === "granted") {
            // If granted, create the notifications loop
            var messages = [
                {
                    title: "Welcome!",
                    body: "With each breath, bring your focus to the present moment and let go of any worries about the future or regrets about the past.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 2",
                    body: "Happiness is not something ready made. It comes from your own actions.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 3",
                    body: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 4",
                    body: "In the end, it's not the years in your life that count. It's the life in your years.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 5",
                    body: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 6",
                    body: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 7",
                    body: "Your time is limited, don't waste it living someone else's life.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 8",
                    body: "Be the change that you wish to see in the world.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 9",
                    body: "It does not matter how slowly you go as long as you do not stop.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 10",
                    body: "In three words I can sum up everything I've learned about life: it goes on.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 11",
                    body: "When you feel overwhelmed or stressed, take a break and practice mindfulness techniques like deep breathing or meditation. These can help you feel more centered and focused.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 12",
                    body: "Take small steps each day towards better health. It's not about perfection, but progress.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 13",
                    body: "Try to focus on the positive aspects of managing your diabetes, such as feeling more energized and in control of your health.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 14",
                    body: "Take time to do things that bring you joy and help you relax, whether it's spending time with loved ones, going for a walk in nature, or practicing a hobby you enjoy.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 15",
                    body: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 16",
                    body: "Remember that every small step you take towards better health is an achievement. Celebrate your progress and keep moving forward.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 17",
                    body: "With every breath, feel a sense of gratitude for your body and all the ways it supports you every day.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 18",
                    body: "Be kind to yourself and treat your body with compassion. Remember that small changes can make a big difference in your health.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 19",
                    body: "As you go about your day, notice your thoughts and feelings without judgment. Allow yourself to experience them fully, but remember that you are not defined by them.",
                    icon: "diatracker-logo.png"
                },
                {
                    title: "Message 20",
                    body: "Practice gratitude for the things in your life that bring you joy and happiness. Even in difficult times, there is always something to be grateful for",
                    icon: "diatracker-logo.png"
                }
            ];
            
            var currentMessageIndex = 0;
            var notification = new Notification(messages[currentMessageIndex].title, {
                body: messages[currentMessageIndex].body,
                icon: messages[currentMessageIndex].icon
            });
            setInterval(function() {
                // Show the next message
                currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                notification.close();
                notification = new Notification(messages[currentMessageIndex].title, {
                    body: messages[currentMessageIndex].body,
                    icon: messages[currentMessageIndex].icon
                });
            }, 30000); // Show the next message every 30 seconds
        } else if (Notification.permission !== "denied") {
            // If not granted and not denied, ask for permission
            Notification.requestPermission().then(function(permission) {
                // If granted, create the notifications loop
                if (permission === "granted") {
                    // ...
                }
            });
        }
    });
</script>

<h1>Home Page</h1>
<a href="logout.php" class="btn btn-danger">Logout</a>
<?php
if(isset($_SESSION['status']))
{
    echo "<h4 class='alert alert-success'>".$_SESSION['status']."</h4>";
    unset($_SESSION['status']);
}
?>



<?php
 include('includes/footer.php');
?>