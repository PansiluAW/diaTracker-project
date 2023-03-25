import React from "react";
import diatraclogo from "./diatraclogo.png";
import "./SettingsPane.css";
import "bootstrap/dist/css/bootstrap.css";

export default function SettingsPane() {
  const [value1, setValue1] = React.useState("English");
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [value2, setValue2] = React.useState("Enabled");

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const [value3, setValue3] = React.useState("Disabled");

  const handleChange3 = (event) => {
    setValue3(event.target.value);

    if (value3 === "Enabled") {

        // If granted, create the notifications loop
        var messages = [
            {
                title: "New Notification!",
                body: "With each breath, bring your focus to the present moment and let go of any worries about the future or regrets about the past.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Happiness is not something ready made. It comes from your own actions.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "In the end, it's not the years in your life that count. It's the life in your years.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Your time is limited, don't waste it living someone else's life.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Be the change that you wish to see in the world.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "It does not matter how slowly you go as long as you do not stop.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "In three words I can sum up everything I've learned about life: it goes on.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "When you feel overwhelmed or stressed, take a break and practice mindfulness techniques like deep breathing or meditation.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Take small steps each day towards better health. It's not about perfection, but progress.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Try to focus on the positive aspects of managing your diabetes, such as feeling more energized and in control of your health.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Take time to do things that bring you joy and help you relax, whether it's spending time with loved ones,or practicing a hobby you enjoy.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Remember that every small step you take towards better health is an achievement. Celebrate your progress and keep moving forward.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "With every breath, feel a sense of gratitude for your body and all the ways it supports you every day.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Be kind to yourself and treat your body with compassion. Remember that small changes can make a big difference in your health.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "As you go about your day, notice your thoughts and feelings without judgment. Allow yourself to experience them fully.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Practice gratitude for the things in your life that bring you joy and happiness.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Take a deep breath and notice the present moment.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Remember that every day is a new opportunity to take care of yourself.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Take a break when you need it and prioritize self-care.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Acknowledge any negative thoughts and try to let them go.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Take a few moments to reflect on your accomplishments and strengths.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Set realistic goals and celebrate progress, no matter how small.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Let go of perfectionism and embrace imperfection as a natural part of life.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Find ways to reduce stress and manage anxiety, such as deep breathing or visualization.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Practice good sleep hygiene and prioritize restful sleep.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Cultivate self-compassion and treat yourself with kindness.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Connect with nature and appreciate the beauty around you.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Practice mindfulness meditation to cultivate inner peace and calm.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Take care of your mental health and seek professional help if needed.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Slow down and savor your meals, noticing each flavor and texture.",
                icon: "diatracker-logo.png"
            },
            {
                title: "New Notification!",
                body: "Remember that you are not defined by your diabetes, and that you are capable of living a full and meaningful life.",
                icon: "diatracker-logo.png"
            }
            
        ];
        
        var currentMessageIndex = Math.floor(Math.random() * messages.length);
        var notification = new Notification(messages[currentMessageIndex].title, {
            body: messages[currentMessageIndex].body,
            icon: messages[currentMessageIndex].icon
        });
        setInterval(function() {
            // Show a random message
            var randomIndex = Math.floor(Math.random() * messages.length);
            while (randomIndex === currentMessageIndex) {
                randomIndex = Math.floor(Math.random() * messages.length);
            }
            currentMessageIndex = randomIndex;
            notification.close();
            notification = new Notification(messages[currentMessageIndex].title, {
                body: messages[currentMessageIndex].body,
                icon: messages[currentMessageIndex].icon
            });
        }, 600000); // Show the next message every 30 seconds
    }
  }

  return (
    <div className="SettingsPane text-wrap text-left pt-5">
      <table className="table mx-4 table-responsive">
        <tr>
          <td>
            <label>Select Language</label>
          </td>
          <td>
            <select value={value1} onChange={handleChange1}>
              <option value="English">English</option>

              <option value="Sinhala">Sinhala</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Enable Medication Reminder</label>
          </td>
          <td>
            <select value={value2} onChange={handleChange2}>
              <option value="Enabled">Enabled</option>

              <option value="Disabled">Disabled</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>Enable Mindfulness Notification</label>
          </td>
          <td>
            <select value={value3} onChange={handleChange3}>
              <option value="Enabled">Enabled</option>

              <option value="Disabled">Disabled</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label>App Version</label>
          </td>
          <td>V1.0.0</td>
        </tr>

        <tr>
          <td>
            <label>Developer Info</label>
          </td>
          <td>Team Aspire</td>
        </tr>

        <tr>
          <td>
            <label>Privacy Policy</label>
          </td>
          <td>View Privacy Policies</td>
        </tr>
      </table>
      <div className="pt-5 mt-5 pb-1 logo mx-auto">
        <img src={diatraclogo} className="" alt="Diatrac logo" />
      </div>
      <div className="py-4 pb-5 copyRightSt text-center">
        DiaTracker Copyright &copy; 2022 - 2023 Team Aspire. All rights
        reserved.
      </div>
    </div>
  );
}
