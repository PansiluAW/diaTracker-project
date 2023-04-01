import React , {useState} from "react";
import diatraclogo from "./diatraclogo.png";
import "./SettingsPane.css";
import "bootstrap/dist/css/bootstrap.css";


export default function SettingsPane() {
  const [value1, setValue1] = useState("English");
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [value3, setValue3] = useState(localStorage.getItem("notificationEnabled") || "");

  const handleChange3 = (event) => {
    setValue3(event.target.value);

    if (event.target.value === "Enabled") {
      localStorage.setItem("notificationEnabled", "Enabled");
    } else if (event.target.value === "Disabled") {
      localStorage.setItem("notificationEnabled", "Disabled");
    }
  }

  // If granted, create the notifications loop
  if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission();
  }
      // If granted, create the notifications loop--
  if (Notification && Notification.permission === "granted") {
      var messages = [
        {
          title: "New Notification!",
          body: "Diabetes is not a death sentence, it's a life sentence to a lifetime of healthy eating and exercise.",
          
        },
        {
          title: "New Notification!",
          body: "Happiness is not something ready made. It comes from your own actions.",
          
        },
        {
          title: "New Notification!",
          body: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          
        },
        {
          title: "New Notification!",
          body: "In the end, it's not the years in your life that count. It's the life in your years.",
          
        },
        {
          title: "New Notification!",
          body: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
          
        },
        {
          title: "New Notification!",
          body: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          
        },
        {
          title: "New Notification!",
          body: "Your time is limited, don't waste it living someone else's life.",
          
        },
        {
          title: "New Notification!",
          body: "Be the change that you wish to see in the world.",
          
        },
        {
          title: "New Notification!",
          body: "It does not matter how slowly you go as long as you do not stop.",
          
        },
        {
          title: "New Notification!",
          body: "In three words I can sum up everything I've learned about life: it goes on.",
          
        },
        {
          title: "New Notification!",
          body: "When you feel overwhelmed or stressed, take a break and practice mindfulness techniques like deep breathing or meditation.",
          
        },
        {
          title: "New Notification!",
          body: "Take small steps each day towards better health. It's not about perfection, but progress.",
          
        },
        {
          title: "New Notification!",
          body: "Try to focus on the positive aspects of managing your diabetes, such as feeling more energized and in control of your health.",
          
        },
        {
          title: "New Notification!",
          body: "Take time to do things that bring you joy and help you relax, whether it's spending time with loved ones,or practicing a hobby you enjoy.",
          
        },
        {
          title: "New Notification!",
          body: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          
        },
        {
          title: "New Notification!",
          body: "Remember that every small step you take towards better health is an achievement. Celebrate your progress and keep moving forward.",
          
        },
        {
          title: "New Notification!",
          body: "With every breath, feel a sense of gratitude for your body and all the ways it supports you every day.",
          
        },
        {
          title: "New Notification!",
          body: "Be kind to yourself and treat your body with compassion. Remember that small changes can make a big difference in your health.",
          
        },
        {
          title: "New Notification!",
          body: "As you go about your day, notice your thoughts and feelings without judgment. Allow yourself to experience them fully.",
          
        },
        {
          title: "New Notification!",
          body: "Practice gratitude for the things in your life that bring you joy and happiness.",
          
        },
        {
          title: "New Notification!",
          body: "Take a deep breath and notice the present moment.",
          
        },
        {
          title: "New Notification!",
          body: "Remember that every day is a new opportunity to take care of yourself.",
          
        },
        {
          title: "New Notification!",
          body: "Take a break when you need it and prioritize self-care.",
          
        },
        {
          title: "New Notification!",
          body: "Acknowledge any negative thoughts and try to let them go.",
          
        },
        {
          title: "New Notification!",
          body: "Take a few moments to reflect on your accomplishments and strengths.",
          
        },
        {
          title: "New Notification!",
          body: "Set realistic goals and celebrate progress, no matter how small.",
          
        },
        {
          title: "New Notification!",
          body: "Let go of perfectionism and embrace imperfection as a natural part of life.",
         
        },
        {
          title: "New Notification!",
          body: "Find ways to reduce stress and manage anxiety, such as deep breathing or visualization.",
          
        },
        {
          title: "New Notification!",
          body: "Practice good sleep hygiene and prioritize restful sleep.",
          
        },
        {
          title: "New Notification!",
          body: "Cultivate self-compassion and treat yourself with kindness.",
          
        },
        {
          title: "New Notification!",
          body: "Connect with nature and appreciate the beauty around you.",
          
        },
        {
          title: "New Notification!",
          body: "Practice mindfulness meditation to cultivate inner peace and calm.",
        },
        {
          title: "New Notification!",
          body: "Take care of your mental health and seek professional help if needed.",
          
        },
        {
          title: "New Notification!",
          body: "Slow down and savor your meals, noticing each flavor and texture.",
          
        },
        {
          title: "New Notification!",
          body: "Remember that you are not defined by your diabetes, and that you are capable of living a full and meaningful life.",
          
        },
      ];
      
      setTimeout(function() {
        if (value3 === "Enabled" && Notification && Notification.permission === "granted") {
          var randomIndex = Math.floor(Math.random() * messages.length);
          var notification = new Notification(messages[randomIndex].title, {
            body: messages[randomIndex].body
          });
        }
      }, 600000);
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
