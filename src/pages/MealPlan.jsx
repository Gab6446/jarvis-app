import React from 'react';
import { Apple, Coffee, UtensilsCrossed, Droplet, Heart, Info } from 'lucide-react';

export default function MealPlan() {
  const plan = [
    {
      time: "Breakfast (8:00 AM)",
      calories: "420 kcal",
      icon: Coffee,
      color: "#f59e0b",
      meal: "Oatmeal with Banana and Boiled Egg",
      image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Protein: 15g", "Fiber: 6g", "Potassium: 400mg"],
      highlights: [
        "Slow-release oats stabilize blood sugar throughout the morning",
        "Potassium in banana supports healthy blood pressure",
        "Egg protein keeps you satiated and fuels daily activity"
      ]
    },
    {
      time: "Mid-Morning Snack (11:00 AM)",
      calories: "180 kcal",
      icon: Apple,
      color: "#ef4444",
      meal: "Mixed Nuts and Greek Yogurt",
      image: "https://images.unsplash.com/photo-1490474504059-1ed4e99f19fa?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Protein: 12g", "Healthy Fats: 14g", "Probiotics: High"],
      highlights: [
        "Probiotics in yogurt support gut and immune health",
        "Mixed nuts provide heart-healthy omega-3 fatty acids",
        "High satiety prevents afternoon energy crashes"
      ]
    },
    {
      time: "Lunch (1:30 PM)",
      calories: "580 kcal",
      icon: UtensilsCrossed,
      color: "#10b981",
      meal: "Grilled Salmon with Steamed Vegetables",
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Protein: 38g", "Omega-3: Very High", "Vitamin D: 80% DV"],
      highlights: [
        "Omega-3 reduces inflammation and supports heart health",
        "High-quality protein supports muscle repair and immunity",
        "Vitamin D from salmon helps regulate calcium for bone health"
      ]
    },
    {
      time: "Hydration Goal",
      calories: "0 kcal",
      icon: Droplet,
      color: "#3b82f6",
      meal: "Drink at least 2.0 Liters of water daily",
      image: "https://images.unsplash.com/photo-1548657685-6136709971bc?auto=format&fit=crop&q=80&w=600",
      nutrients: ["H2O: 2.0 Liters", "Electrolytes: Balanced"],
      highlights: [
        "Hydration maintains healthy blood pressure and kidney function",
        "Reduces risk of urinary tract infections",
        "Improves cognitive performance and energy levels"
      ]
    },
    {
      time: "Dinner (7:00 PM)",
      calories: "520 kcal",
      icon: Heart,
      color: "#8b5cf6",
      meal: "Brown Rice, Lentil Soup & Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Fiber: 14g", "Iron: 6mg", "Folate: 30% DV"],
      highlights: [
        "Lentils are one of the richest plant-based iron sources",
        "Brown rice provides complex carbs for overnight recovery",
        "Raw salad greens deliver antioxidants that reduce cell damage"
      ]
    }
  ];

  return (
    <div className="main-content" style={{ backgroundColor: 'var(--bg-color)' }}>
      <header className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
          <Apple color="#f472b6" /> Nutrition & Wellness
        </h1>
        <p className="page-subtitle" style={{ fontSize: '1.125rem', marginTop: '0.5rem' }}>A balanced daily nutrition guide for a healthy, active life. Good nutrition supports your emergency resilience too.</p>
      </header>

      <div className="grid grid-cols-2">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {plan.map((item, idx) => (
            <div key={idx} className="card glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0, opacity: 0, animation: `slideUp 0.5s ease forwards ${idx * 0.1}s` }}>
              
              {/* Image Banner */}
              <div style={{ width: '100%', height: '160px', position: 'relative' }}>
                <img src={item.image} alt={item.meal} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, color: item.color, display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
                  <item.icon size={14} /> {item.time}
                </div>
              </div>

              {/* Content Block */}
              <div style={{ padding: '1.5rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#2d3748', fontWeight: 700, maxWidth: '75%', lineHeight: 1.3 }}>{item.meal}</h3>
                  <span style={{ fontSize: '0.8rem', backgroundColor: `${item.color}15`, color: item.color, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>
                    {item.calories}
                  </span>
                </div>
                
                {/* Nutrient Badges */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                  {item.nutrients.map((nut, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', backgroundColor: '#f1f5f9', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', fontWeight: 600, border: '1px solid #e2e8f0' }}>
                      {nut}
                    </span>
                  ))}
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {item.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.color, marginTop: '0.35rem', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.4 }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div style={{ position: 'sticky', top: '2rem', alignSelf: 'start', backgroundColor: '#f0fdf4', border: '2px solid #86efac', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
           <h2 style={{ fontSize: '1.5rem', color: '#14532d', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info color="#86efac" /> Wellness Insights
           </h2>
           <p style={{ color: '#166534', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
             A balanced mix of lean proteins, complex carbs, healthy fats, and micronutrients is your best defense against chronic disease. Consistency beats perfection — try to hit your daily fiber and protein targets.
           </p>
           
           <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#14532d', fontSize: '1rem' }}>Minimize These:</h4>
              <ul style={{ color: '#166534', margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                 <li>Ultra-processed foods and refined sugar</li>
                 <li>Excessive sodium (target under 2,300mg/day)</li>
                 <li>Alcohol and excessive caffeine</li>
              </ul>
           </div>
           
           <button className="btn btn-outline" style={{ borderColor: '#86efac', color: '#15803d' }}>
             Download PDF Meal Planner
           </button>
        </div>
      </div>
    </div>
  );
}
