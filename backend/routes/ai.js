const express = require('express');
const router = express.Router();
const axios = require('axios');

// AI endpoint: generate a meal plan suggestion.
// This is a simple template using OpenAI REST API; you can replace with your own model.
router.post('/meal-plan', async (req, res) => {
  const { age, weight, height, activity_level, goal } = req.body;
  // TODO: server-side validation
  const prompt = `Create a one-day meal plan for a person:
Age: ${age}
Weight: ${weight}
Height: ${height}
Activity: ${activity_level}
Goal: ${goal}
Return JSON array of meals with fields: name, type (breakfast/lunch/snack/dinner), calories, recipe (short).`;
  try {
    if (!process.env.OPENAI_API_KEY) {
      // fallback simple heuristic
      const simple = [
        { name: "Avocado Toast with Poached Eggs", type:"breakfast", calories:420, recipe:"Avocado on toast + 2 poached eggs" },
        { name: "Grilled Chicken Quinoa Bowl", type:"lunch", calories:500, recipe:"Grilled chicken, quinoa, salad" },
        { name: "Greek Yogurt & Berries", type:"snack", calories:150, recipe:"200g yogurt + mixed berries" },
        { name: "Baked Salmon with Sweet Potato", type:"dinner", calories:650, recipe:"Roasted salmon + sweet potato" }
      ];
      return res.json({ source: 'fallback', meals: simple });
    }
    const resp = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [{ role:'user', content: prompt }],
      max_tokens: 800
    }, {
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
    });
    // Expect the model to return JSON - best effort parse
    const text = resp.data.choices?.[0]?.message?.content || '';
    let meals = [];
    try { meals = JSON.parse(text); } catch(e){
      // attempt to extract json block
      const m = text.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
      if (m) meals = JSON.parse(m[0]);
      else meals = [{ name: text, calories: 0 }];
    }
    res.json({ source: 'openai', meals });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ error: 'AI error', details: err?.message });
  }
});

module.exports = router;
