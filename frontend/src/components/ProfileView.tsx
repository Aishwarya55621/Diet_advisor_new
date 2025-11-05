import { Target, Briefcase, Wallet, TrendingUp, Edit2 } from "lucide-react";

export function ProfileView() {
  return (
    <div className="px-4 pt-6 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-gray-800 text-xl font-bold">Your Profile</h1>
        <button className="p-2 bg-purple-100 rounded-full text-purple-600 hover:bg-purple-200 transition-colors">
          <Edit2 size={18} />
        </button>
      </div>

      {/* Avatar */}
      <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 mb-6 border border-purple-200 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
          👤
        </div>
        <h2 className="text-gray-900 text-lg font-semibold mb-1">
          Sarah Johnson
        </h2>
        <p className="text-gray-600 text-sm">sarah.j@example.com</p>
      </div>

      {/* Info Cards */}
      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-xl">
            <Briefcase className="text-blue-600" size={18} />
          </div>
          <div>
            <p className="text-gray-600 text-xs">Occupation</p>
            <p className="text-gray-900">Software Engineer</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-center gap-3">
          <div className="p-2 bg-green-100 rounded-xl">
            <Wallet className="text-green-600" size={18} />
          </div>
          <div>
            <p className="text-gray-600 text-xs">Budget</p>
            <p className="text-gray-900">$15/day</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-xl">
            <TrendingUp className="text-purple-600" size={18} />
          </div>
          <div>
            <p className="text-gray-600 text-xs">Goal</p>
            <p className="text-gray-900">Weight Loss</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-purple-100 flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-xl">
            <Target className="text-orange-600" size={18} />
          </div>
          <div>
            <p className="text-gray-600 text-xs">Calorie Target</p>
            <p className="text-gray-900">1800 cal/day</p>
          </div>
        </div>
      </div>
    </div>
  );
}
