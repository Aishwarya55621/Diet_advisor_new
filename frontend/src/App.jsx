import { useEffect, useState } from "react";
import { MealCard } from "./components/MealCard";
import { CalendarView } from "./components/CalendarView";
import { ProfileView } from "./components/ProfileView";

export default function App() {
  const [meals, setMeals] = useState([]);

  // 🌿 Temporary sample data (replace with backend fetch later)
  useEffect(() => {
    setMeals([
      {
        type: "Breakfast",
        name: "Avocado Toast with Eggs",
        calories: 320,
        cost: 4.5,
        protein: "12g",
        carbs: "30g",
        fat: "15g",
        time: "8:00 AM",
        description: "Whole-grain toast topped with smashed avocado and poached eggs.",
        color: "from-yellow-100 to-orange-100",
      },
      {
        type: "Lunch",
        name: "Grilled Chicken Salad",
        calories: 450,
        cost: 6.2,
        protein: "32g",
        carbs: "20g",
        fat: "10g",
        time: "1:00 PM",
        description: "Healthy salad with lean chicken, mixed greens, and vinaigrette.",
        color: "from-green-100 to-lime-100",
      },
      {
        type: "Dinner",
        name: "Salmon with Quinoa",
        calories: 520,
        cost: 7.0,
        protein: "35g",
        carbs: "40g",
        fat: "18g",
        time: "8:00 PM",
        description: "Pan-seared salmon served with quinoa and steamed broccoli.",
        color: "from-blue-100 to-cyan-100",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 overflow-y-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">
          Hello, Sarah! 👋
        </h1>
        <p className="text-gray-600 text-lg">Here’s your personalized AI meal plan</p>
      </header>

      {/* Meal Plan Section */}
      <section>
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          🍽️ Today's Meal Plan
        </h2>

        {meals.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal, index) => (
              <MealCard key={index} meal={meal} />
            ))}
          </div>
        )}
      </section>

      {/* Calendar View */}
      <section className="mt-10">
        <h2 className="text-xl font-medium text-gray-700 mb-4">📅 Meal Calendar</h2>
        <CalendarView />
      </section>

      {/* Profile View */}
      <section className="mt-10">
        <ProfileView />
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        AI Diet Advisor © 2025 | Powered by Smart Nutrition Intelligence 🧠
      </footer>
    </div>
  );
}
