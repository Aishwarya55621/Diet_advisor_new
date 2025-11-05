import { Sparkles, DollarSign, Flame } from "lucide-react";
import { MealCard } from "./MealCard";

export function MealPlanView() {
  const userProfile = {
    name: "Sarah",
    occupation: "Software Engineer",
    budget: "$15/day",
    goal: "Weight Loss",
    calorieTarget: 1800,
  };

  const meals = [
    {
      type: "Breakfast",
      name: "Avocado Toast with Poached Eggs",
      calories: 420,
      cost: 4.5,
      protein: "18g",
      carbs: "32g",
      fat: "24g",
      time: "8:00 AM",
      description:
        "Whole grain toast topped with mashed avocado, poached eggs, and seeds.",
      color: "from-yellow-100 to-orange-100",
    },
    {
      type: "Lunch",
      name: "Grilled Chicken Quinoa Bowl",
      calories: 580,
      cost: 6.2,
      protein: "42g",
      carbs: "48g",
      fat: "18g",
      time: "1:00 PM",
      description:
        "Grilled chicken breast with quinoa, roasted vegetables, and tahini dressing.",
      color: "from-green-100 to-emerald-100",
    },
    {
      type: "Dinner",
      name: "Baked Salmon with Sweet Potato",
      calories: 650,
      cost: 7.8,
      protein: "38g",
      carbs: "52g",
      fat: "28g",
      time: "7:00 PM",
      description:
        "Herb-crusted salmon fillet with roasted sweet potato wedges and broccoli.",
      color: "from-blue-100 to-indigo-100",
    },
    {
      type: "Snack",
      name: "Greek Yogurt & Berries",
      calories: 150,
      cost: 2.5,
      protein: "12g",
      carbs: "18g",
      fat: "4g",
      time: "4:00 PM",
      description: "Greek yogurt with mixed berries and honey.",
      color: "from-pink-100 to-rose-100",
    },
  ];

  const totalCalories = meals.reduce((sum, m) => sum + m.calories, 0);
  const totalCost = meals.reduce((sum, m) => sum + m.cost, 0);

  return (
    <div className="px-4 pt-6 pb-4">
      <h1 className="text-gray-800 text-2xl font-bold mb-2">
        Hello, {userProfile.name}! 👋
      </h1>
      <p className="text-gray-600 mb-6">
        Your AI-optimized meal plan for today
      </p>

      {/* Profile Summary */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 mb-6 border border-purple-200">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-purple-600" size={20} />
          <span className="text-purple-900 font-medium">
            Personalized Nutrition Summary
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/70 rounded-xl p-3 text-center">
            <p className="text-purple-700 text-xs mb-1">Goal</p>
            <p className="text-purple-900">{userProfile.goal}</p>
          </div>
          <div className="bg-white/70 rounded-xl p-3 text-center">
            <p className="text-purple-700 text-xs mb-1">Calorie Target</p>
            <p className="text-purple-900">{userProfile.calorieTarget}</p>
          </div>
        </div>
      </div>

      {/* Daily Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-4 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="text-orange-600" size={20} />
            <span className="text-orange-900 text-xs">Total Calories</span>
          </div>
          <p className="text-orange-900">
            {totalCalories} / {userProfile.calorieTarget}
          </p>
          <div className="mt-2 h-2 bg-white/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full"
              style={{
                width: `${(totalCalories / userProfile.calorieTarget) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-4 border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="text-green-600" size={20} />
            <span className="text-green-900 text-xs">Daily Cost</span>
          </div>
          <p className="text-green-900">${totalCost.toFixed(2)}</p>
          <p className="text-green-700 text-xs mt-2">Within budget ✓</p>
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-4 mb-6">
        <h2 className="text-gray-800 font-medium mb-2">Today's Meals</h2>
        {meals.map((meal, i) => (
          <MealCard key={i} meal={meal} />
        ))}
      </div>
    </div>
  );
}
