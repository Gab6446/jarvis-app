import React, { useState, useEffect } from 'react';
import { ShieldAlert, Navigation, Phone, Car, Activity, ShieldCheck, HeartPulse, Hospital, Clock } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

// Create custom colored icons for the map
const userIcon = new L.DivIcon({
  html: `<div style="width: 24px; height: 24px; background-color: var(--danger-color); border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px rgba(225,29,72,0.8); animation: pulse-danger 2s infinite;"></div>`,
  className: '',
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

const hospitalIcon = new L.DivIcon({
  html: `<div style="width: 30px; height: 30px; background-color: #10b981; border: 3px solid white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(16,185,129,0.5);">🏥</div>`,
  className: '',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const ambulanceIcon = new L.DivIcon({
  html: `<div style="width: 32px; height: 32px; background-color: white; border: 3px solid var(--accent-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(255,255,255,0.8); color: var(--accent-color);">🚑</div>`,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 16]
});

// Coordinates (Lagos, Nigeria area)
const userPos = [6.5244, 3.3792];
const hospitalPos = [6.4530, 3.3958]; // Lagos Island Maternity
const ambulanceStart = [6.4800, 3.3600];

// Simple straight line path for the ambulance animation
function interpolateLine(start, end, steps) {
  const line = [];
  for (let i = 0; i <= steps; i++) {
    line.push([
      start[0] + (end[0] - start[0]) * (i / steps),
      start[1] + (end[1] - start[1]) * (i / steps)
    ]);
  }
  return line;
}

const ambulancePath = interpolateLine(ambulanceStart, userPos, 100);

function AnimationUpdater({ setAmbulancePos, dispatchStatus }) {
  const map = useMap();
  
  useEffect(() => {
    if (dispatchStatus === 'en-route') {
      let step = 0;
      const interval = setInterval(() => {
        if (step < ambulancePath.length) {
          setAmbulancePos(ambulancePath[step]);
          // keep map centered slightly over the action
          map.setView([6.50, 3.38], 13, { animate: true });
          step++;
        } else {
          clearInterval(interval);
        }
      }, 300); // adjust speed
      return () => clearInterval(interval);
    }
  }, [dispatchStatus, map, setAmbulancePos]);

  return null;
}

export default function Emergency() {
  const [dispatchStatus, setDispatchStatus] = useState('locating'); // locating, dispatching, en-route
  const etaTimer = 8;
  const [ambulancePos, setAmbulancePos] = useState(ambulanceStart);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setDispatchStatus('dispatching');
    }, 2000);
    
    const timer2 = setTimeout(() => {
      setDispatchStatus('en-route');
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="main-content" style={{ padding: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#f1f5f9', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Warning Banner */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: 'var(--danger-color)', color: 'white', padding: '0.75rem', textAlign: 'center', fontWeight: 700, letterSpacing: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 4px 20px rgba(225,29,72,0.5)' }}>
        <ShieldAlert size={20} className="animate-pulse-danger" style={{ borderRadius: '50%' }} />
        EMERGENCY ACTIVE — SOS DISPATCH COORDINATED
      </div>

      {/* Interactive Leaflet Map Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <MapContainer 
          center={[6.50, 3.38]} 
          zoom={13} 
          style={{ width: '100%', height: '100%' }}
          zoomControl={true}
          attributionControl={false}
        >
          {/* Google Maps-style light tiles (Stadia Alidade Smooth) */}
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          
          <Marker position={userPos} icon={userIcon}>
            <Popup>Your Alert Location</Popup>
          </Marker>
          
          <Marker position={hospitalPos} icon={hospitalIcon}>
            <Popup>Destination: General Hospital</Popup>
          </Marker>

          {/* Draw route from User to Hospital */}
          <Polyline positions={[userPos, hospitalPos]} color="#10b981" weight={4} dashArray="10, 10" />

          {/* Draw incoming ambulance route */}
          {dispatchStatus !== 'locating' && (
            <>
              <Marker position={ambulancePos} icon={ambulanceIcon} zIndexOffset={1000}>
                <Popup>JARVIS Unit L-042 Route</Popup>
              </Marker>
              <Polyline positions={ambulancePath} color="var(--accent-color)" weight={4} opacity={0.5} />
              {/* Highlight route driven up to current point */}
              <Polyline positions={[ambulanceStart, ambulancePos]} color="var(--accent-color)" weight={5} />
              <AnimationUpdater setAmbulancePos={setAmbulancePos} dispatchStatus={dispatchStatus} />
            </>
          )}
        </MapContainer>
        
        {/* Subtle vignette for depth */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.18) 100%)', zIndex: 1 }} />
      </div>

      {/* UI Overlay - High contrast glass panels */}
      <div style={{ 
        position: 'relative', zIndex: 10, padding: '5rem 2.5rem 2.5rem 2.5rem', flex: 1, 
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        pointerEvents: 'none'
      }}>
        
        {/* Huge ETA Display */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', pointerEvents: 'auto' }}>
          <div style={{ 
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', 
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: '1.5rem',
            padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)'
          }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>
                {dispatchStatus === 'locating' ? 'Calculating ETA...' : (dispatchStatus === 'dispatching' ? 'Responder Assigned' : 'Responder Arriving In')}
              </p>
              {dispatchStatus === 'en-route' ? (
                <h1 style={{ fontSize: '4.5rem', color: 'white', margin: 0, lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  {etaTimer} <span style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 500 }}>mins</span>
                </h1>
              ) : (
                <div style={{ height: '4.5rem', display: 'flex', alignItems: 'center' }}>
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', margin: '0.5rem' }} />
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', margin: '0.5rem', animationDelay: '0.2s' }} />
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', margin: '0.5rem', animationDelay: '0.4s' }} />
                </div>
              )}
            </div>
            
            {dispatchStatus === 'en-route' && (
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                <p style={{ color: 'white', margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>Unit L-042</p>
                <p style={{ color: 'var(--accent-light)', margin: 0, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={14} /> Basic Life Support
                </p>
                <button className="btn" style={{ backgroundColor: 'white', color: 'black', marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.875rem', pointerEvents: 'auto' }}>
                  <Phone size={14} /> Contact Responder
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Cards: Process & Hospital Selection */}
        <div className="grid grid-cols-2" style={{ alignItems: 'flex-end', pointerEvents: 'auto', gap: '2rem' }}>
          
          {/* Dispatch Status Timeline Card */}
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <h2 style={{ fontSize: '1.25rem', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#111827' }}>
              <Clock color="var(--primary-color)" /> Live Response Status
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
              {/* Timeline Line */}
              <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '11px', width: '2px', backgroundColor: '#e5e7eb', zIndex: 0 }} />
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: 1 }}>
                <div style={{ backgroundColor: 'var(--accent-color)', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px' }}>
                  <ShieldCheck size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>Distress Signal Received</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Health profile #A294 transmitted.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: dispatchStatus !== 'locating' ? 1 : 0.4 }}>
                <div style={{ backgroundColor: dispatchStatus !== 'locating' ? 'var(--accent-color)' : '#9ca3af', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px' }}>
                   <Hospital size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>Locating Nearest Facility</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Referral confirmed based on critical needs.</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: dispatchStatus === 'en-route' ? 1 : 0.4 }}>
                <div style={{ backgroundColor: dispatchStatus === 'en-route' ? 'var(--danger-color)' : '#9ca3af', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px', boxShadow: dispatchStatus === 'en-route' ? '0 0 10px rgba(225,29,72,0.5)' : 'none' }}>
                  <Car size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: dispatchStatus === 'en-route' ? 'var(--danger-color)' : '#111827' }}>Responder En-Route</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Keep pathways clear. Have ID ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Selection Reasoning Card */}
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', borderTop: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, color: '#111827', fontSize: '1.25rem' }}>General Hospital Ikeja</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Navigation size={14} /> Mobolaji Bank Anthony (1.2km away)
                </p>
              </div>
              <div style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700 }}>
                Matched
              </div>
            </div>
            
            <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <HeartPulse size={16} /> Facility Readiness:
              </h4>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                    Level 1 Trauma Center
                  </span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>Confirmed</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                    Blood Bank
                  </span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>In Stock</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                    ER Capacity 
                  </span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>High Availability</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
