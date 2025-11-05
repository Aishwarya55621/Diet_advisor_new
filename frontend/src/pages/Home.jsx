import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default function Home(){
  const [meals, setMeals] = useState([]);
  useEffect(()=> {
    // sample fetch to AI endpoint
    axios.post('http://localhost:4000/api/ai/meal-plan', {
      age: 30, weight: 70, height: 175, activity_level: 'moderate', goal: 'weight loss'
    }).then(r=> setMeals(r.data.meals || [])).catch(()=>{});
  },[]);
  return (
    <div className='max-w-3xl mx-auto'>
      <h1 className='text-2xl font-semibold mb-4'>Hello, Sarah! 👋</h1>
      <div className='grid gap-4'>
        <div className='p-4 rounded-xl shadow-sm bg-white/80'>
          <h2 className='font-medium'>Today's Meal Plan</h2>
          {meals.length === 0 && <p className='text-sm text-gray-500'>Loading...</p>}
          <ul className='mt-3 space-y-2'>
            {meals.map((m,i)=> (
              <li key={i} className='p-3 rounded-lg border'>
                <div className='flex justify-between'>
                  <div>
                    <div className='font-semibold'>{m.name}</div>
                    <div className='text-sm text-gray-500'>{m.type} • {m.calories} kcal</div>
                  </div>
                </div>
                <div className='text-sm mt-2'>{m.recipe || ''}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
