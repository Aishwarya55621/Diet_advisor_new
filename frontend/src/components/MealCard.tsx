import { Clock, Flame, DollarSign, Dumbbell } from "lucide-react";

export function MealCard({ meal }: { meal: any }) {
  return (
    <div
      className={`bg-gradient-to-br ${meal.color} rounded-2xl shadow-md border border-white/40 p-5 hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{meal.type}</h3>
        <span className="text-sm text-gray-600 flex items-center gap-1">
          <Clock size={14} /> {meal.time}
        </span>
      </div>

      <h2 className="text-gray-900 text-xl font-bold mb-2">{meal.name}</h2>
      <p className="text-gray-700 text-sm mb-3">{meal.description}</p>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-1 text-orange-700">
          <Flame size={14} /> {meal.calories} cal
        </div>
        <div className="flex items-center gap-1 text-green-700">
          <DollarSign size={14} /> {meal.cost.toFixed(2)}
        </div>
        <div className="flex items-center gap-1 text-blue-700">
          <Dumbbell size={14} /> {meal.protein} protein
        </div>
        <p className="text-gray-600">Carbs: {meal.carbs}</p>
      </div>
    </div>
  );
}
