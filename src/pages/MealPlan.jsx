import React from 'react';
import { Apple, Coffee, UtensilsCrossed, Droplet, ArrowLeft, CherryIcon, Info } from 'lucide-react';

export default function MealPlan() {
  const plan = [
    {
      time: "Breakfast (8:00 AM)",
      calories: "450 kcal",
      icon: Coffee,
      color: "#f59e0b",
      meal: "Oatmeal with Spinach and Boiled Egg",
      image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Protein: 18g", "Iron: 4mg", "Folate: 15% DV"],
      highlights: [
        "Provides steady energy and prevents morning sickness spikes",
        "Rich in Iron for baby's brain development",
        "Calcium-fortified milk for skeletal growth"
      ]
    },
    {
      time: "Mid-Morning Snack (11:00 AM)",
      calories: "200 kcal",
      icon: Apple,
      color: "#ef4444",
      meal: "Fresh Fruit Bowl with Walnuts",
      image: "https://images.unsplash.com/photo-1490474504059-1ed4e99f19fa?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Vitamin C: 80% DV", "Omega-3: High", "Fiber: 6g"],
      highlights: [
        "High Vitamin C for optimal iron absorption",
        "Hydrating properties from fresh tropical fruits",
        "Omega-3 fatty acids for baby's neural development"
      ]
    },
    {
      time: "Lunch (1:30 PM)",
      calories: "600 kcal",
      icon: UtensilsCrossed,
      color: "#10b981",
      meal: "Grilled Chicken Breast with Brown Rice",
      image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&q=80&w=600",
      nutrients: ["Protein: 35g", "Carbs: 45g", "Calcium: 10% DV"],
      highlights: [
        "Lean protein for rapid maternal tissue repair",
        "Complex carbohydrates for sustained daily energy",
        "Dietary fiber to prevent third-trimester constipation"
      ]
    },
    {
      time: "Hydration Goal",
      calories: "0 kcal",
      icon: Droplet,
      color: "#3b82f6",
      meal: "Drink at least 2.5 Liters of water daily",
      image: "https://images.unsplash.com/photo-1548657685-6136709971bc?auto=format&fit=crop&q=80&w=600",
      nutrients: ["H2O: 2.5 Liters", "Electrolytes: Balanced"],
      highlights: [
        "Maintains vital amniotic fluid levels",
        "Reduces foot and ankle swelling",
        "Combats mid-afternoon pregnancy fatigue"
      ]
    }
  ];

  return (
    <div className="main-content" style={{ backgroundColor: 'var(--bg-color)' }}>
      <header className="page-header" style={{ marginBottom: '2rem' }}>
        <h1 className="page-greeting" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: 0 }}>
          <Apple color="#f472b6" /> Your Week 24 Meal Plan
        </h1>
        <p className="page-subtitle" style={{ fontSize: '1.125rem', marginTop: '0.5rem' }}>Personalized nutritional advice to ensure you and your baby get the optimal nutrients.</p>
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

        <div style={{ position: 'sticky', top: '2rem', alignSelf: 'start', backgroundColor: '#fff1f2', border: '2px solid #fda4af', borderRadius: 'var(--radius-lg)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
           <h2 style={{ fontSize: '1.5rem', color: '#881337', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info color="#fda4af" /> Vital Insights
           </h2>
           <p style={{ color: '#be123c', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
             Your second trimester demands extra iron to support your baby's rapid growth. JARVIS automatically monitors your macronutrient history and suggests combinations that enhance iron absorption, like pairing Vitamin C rich fruits with spinach.
           </p>
           
           <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #fecdd3' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#881337', fontSize: '1rem' }}>Avoid These Today:</h4>
              <ul style={{ color: '#be123c', margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                 <li>Caffeine directly after meals (blocks iron absorption)</li>
                 <li>Raw or undercooked seafood</li>
                 <li>Excessive sodium (to manage your swelling)</li>
              </ul>
           </div>
           
           <button className="btn btn-outline" style={{ borderColor: '#fca5a5', color: '#e11d48' }}>
             Download PDF Grocery List
           </button>
        </div>
      </div>
    </div>
  );
}
