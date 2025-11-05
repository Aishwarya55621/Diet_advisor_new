import { Calendar } from "lucide-react";

export function CalendarView() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200 text-center">
      <div className="flex justify-center mb-3">
        <Calendar className="text-blue-600" size={28} />
      </div>
      <h2 className="text-gray-800 text-lg font-semibold mb-1">
        Weekly Calendar
      </h2>
      <p className="text-gray-600 text-sm">
        View your weekly meals and calorie goals (coming soon!)
      </p>
    </div>
  );
}
