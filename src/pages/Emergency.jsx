import React, { useState, useEffect } from 'react';
import { ShieldAlert, Navigation, Phone, Car, Activity, ShieldCheck, HeartPulse, Hospital, Clock, Flame, Shield, Siren } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

// Constants & Locations (Lagos)
const userPos = [6.5244, 3.3792];
const ambulanceStart = [6.4800, 3.3600];

// Dynamic map logic 
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
          map.setView([6.50, 3.38], 13, { animate: true });
          step++;
        } else {
          clearInterval(interval);
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, [dispatchStatus, map, setAmbulancePos]);

  return null;
}

export default function Emergency({ emergencyType }) {
  const [dispatchStatus, setDispatchStatus] = useState('locating'); // locating, dispatching, en-route
  const etaTimer = 8;
  const [ambulancePos, setAmbulancePos] = useState(ambulanceStart);

  useEffect(() => {
    const timer1 = setTimeout(() => setDispatchStatus('dispatching'), 2000);
    const timer2 = setTimeout(() => setDispatchStatus('en-route'), 4500);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [emergencyType]); // Restart timers if type changes

  // Dynamic configuration based on type
  const config = {
    medical: {
      color: 'var(--danger-color)', // #e11d48
      colorHex: '#e11d48',
      colorLight: '#ffe4e6',
      iconUrl: '🚑',
      destinationIcon: '🏥',
      destinationName: 'General Hospital Ikeja',
      destinationTitle: 'Facility Readiness:',
      destinationIconComponent: HeartPulse,
      facilityFeatures: ['Level 1 Trauma Center', 'Blood Bank', 'ER Capacity'],
      unitTitle: 'JARVIS Unit L-042 Route',
      unitName: 'Unit L-042',
      unitType: 'Basic Life Support',
      timeline1: 'Health profile #A294 transmitted.',
      timeline2: 'Referral confirmed based on critical needs.'
    },
    fire: {
      color: '#ea580c', // Orange
      colorHex: '#ea580c',
      colorLight: '#ffedd5',
      iconUrl: '🚒',
      destinationIcon: '🧯',
      destinationName: 'Lagos Fire Service, Alausa',
      destinationTitle: 'Station Readiness:',
      destinationIconComponent: Flame,
      facilityFeatures: ['Heavy Rescue Truck', 'Water Tanker Active', 'Hazmat Available'],
      unitTitle: 'Engine Co. 5 Route',
      unitName: 'Engine Co. 5',
      unitType: 'Rapid Response Fire Engine',
      timeline1: 'Fire emergency alert logged.',
      timeline2: 'Station notified based on proximity and scale.'
    },
    police: {
      color: '#0284c7', // Blue
      colorHex: '#0284c7',
      colorLight: '#e0f2fe',
      iconUrl: '🚓',
      destinationIcon: '🏢',
      destinationName: 'Police Precinct Area F',
      destinationTitle: 'Precinct Status:',
      destinationIconComponent: Shield,
      facilityFeatures: ['Armed Response Available', 'K9 Unit Standby', 'Traffic Control Active'],
      unitTitle: 'Patrol Unit 8 Route',
      unitName: 'Patrol Unit 8',
      unitType: 'Armed Escort & Security',
      timeline1: 'Urgent Police SOS broadcasted.',
      timeline2: 'Precinct assigned to active threat location.'
    }
  };

  const theme = config[emergencyType] || config.medical;

  // Custom marker icons using dynamic colors
  const userIcon = new L.DivIcon({
    html: `<div style="width: 24px; height: 24px; background-color: ${theme.color}; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px ${theme.colorHex}80; animation: pulse-danger 2s infinite;"></div>`,
    className: '',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  const destinationIcon = new L.DivIcon({
    html: `<div style="width: 30px; height: 30px; background-color: ${theme.color}; border: 3px solid white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px ${theme.colorHex}80;">${theme.destinationIcon}</div>`,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  const vehicleIcon = new L.DivIcon({
    html: `<div style="width: 32px; height: 32px; background-color: white; border: 3px solid ${theme.color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 15px rgba(255,255,255,0.8); font-size: 16px;">${theme.iconUrl}</div>`,
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  return (
    <div className="main-content" style={{ padding: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#f1f5f9', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Warning Banner */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: theme.color, color: 'white', padding: '0.75rem', textAlign: 'center', fontWeight: 700, letterSpacing: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: `0 4px 20px ${theme.colorHex}80` }}>
        <ShieldAlert size={20} className="animate-pulse-danger" style={{ borderRadius: '50%' }} />
        {emergencyType.toUpperCase()} EMERGENCY ACTIVE — SOS DISPATCH COORDINATED
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
          {/* Dark-mode Carto tiles */}
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          
          <Marker position={userPos} icon={userIcon}>
            <Popup>Your Alert Location</Popup>
          </Marker>
          
          {/* Use slightly shifted coordinates for destination to show a route */}
          <Marker position={[6.4530, 3.3958]} icon={destinationIcon}>
            <Popup>Destination: {theme.destinationName}</Popup>
          </Marker>

          <Polyline positions={[userPos, [6.4530, 3.3958]]} color={theme.color} weight={4} dashArray="10, 10" opacity={0.7} />

          {/* Incoming Vehicle Route */}
          {dispatchStatus !== 'locating' && (
            <>
              <Marker position={ambulancePos} icon={vehicleIcon} zIndexOffset={1000}>
                <Popup>{theme.unitTitle}</Popup>
              </Marker>
              <Polyline positions={ambulancePath} color={theme.color} weight={4} opacity={0.4} />
              <Polyline positions={[ambulanceStart, ambulancePos]} color={theme.color} weight={5} />
              <AnimationUpdater setAmbulancePos={setAmbulancePos} dispatchStatus={dispatchStatus} />
            </>
          )}
        </MapContainer>
        
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.18) 100%)', zIndex: 1 }} />
      </div>

      {/* UI Overlay */}
      <div style={{ position: 'relative', zIndex: 10, padding: '5rem 2.5rem 2.5rem 2.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
        
        {/* ETA Display */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', pointerEvents: 'auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '1.5rem', padding: '2rem 3rem', display: 'flex', alignItems: 'center', gap: '2rem', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>
                {dispatchStatus === 'locating' ? 'Calculating ETA...' : (dispatchStatus === 'dispatching' ? 'Responder Assigned' : 'Responder Arriving In')}
              </p>
              {dispatchStatus === 'en-route' ? (
                <h1 style={{ fontSize: '4.5rem', color: theme.color, margin: 0, lineHeight: 1, display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  {etaTimer} <span style={{ fontSize: '2rem', color: 'var(--text-muted)', fontWeight: 500 }}>mins</span>
                </h1>
              ) : (
                <div style={{ height: '4.5rem', display: 'flex', alignItems: 'center' }}>
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: theme.color, borderRadius: '50%', margin: '0.5rem' }} />
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: theme.color, borderRadius: '50%', margin: '0.5rem', animationDelay: '0.2s' }} />
                  <div className="animate-pulse-danger" style={{ width: '15px', height: '15px', backgroundColor: theme.color, borderRadius: '50%', margin: '0.5rem', animationDelay: '0.4s' }} />
                </div>
              )}
            </div>
            
            {dispatchStatus === 'en-route' && (
              <div style={{ borderLeft: '1px solid #e5e7eb', paddingLeft: '2rem' }}>
                <p style={{ color: '#111827', margin: 0, fontSize: '1.125rem', fontWeight: 700 }}>{theme.unitName}</p>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                   {emergencyType === 'police' ? <Siren size={14} color={theme.color}/> : <Activity size={14} color={theme.color}/>} 
                   {theme.unitType}
                </p>
                <button className="btn" style={{ backgroundColor: theme.color, color: 'white', marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.875rem', pointerEvents: 'auto' }}>
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
              <Clock color={theme.color} /> Live Response Status
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '11px', width: '2px', backgroundColor: '#e5e7eb', zIndex: 0 }} />
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: 1 }}>
                <div style={{ backgroundColor: theme.color, padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px' }}>
                  <ShieldCheck size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>Distress Signal Received</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>{theme.timeline1}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: dispatchStatus !== 'locating' ? 1 : 0.4 }}>
                <div style={{ backgroundColor: dispatchStatus !== 'locating' ? theme.color : '#9ca3af', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px' }}>
                   <Hospital size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: '#111827' }}>Coordinating Destination</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>{theme.timeline2}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', position: 'relative', zIndex: 1, opacity: dispatchStatus === 'en-route' ? 1 : 0.4 }}>
                <div style={{ backgroundColor: dispatchStatus === 'en-route' ? theme.color : '#9ca3af', padding: '4px', borderRadius: '50%', border: '4px solid white', marginTop: '2px', boxShadow: dispatchStatus === 'en-route' ? `0 0 10px ${theme.colorHex}80` : 'none' }}>
                  <Car size={12} color="white" />
                </div>
                <div>
                  <h4 style={{ margin: 0, color: dispatchStatus === 'en-route' ? theme.color : '#111827' }}>Responder En-Route</h4>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>Keep pathways clear. Have ID ready.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hospital Selection Reasoning Card */}
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', borderTop: `4px solid ${theme.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, color: '#111827', fontSize: '1.25rem' }}>{theme.destinationName}</h3>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Navigation size={14} /> Computed optimal match (1.2km)
                </p>
              </div>
              <div style={{ backgroundColor: theme.colorLight, color: theme.color, padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700 }}>
                Matched
              </div>
            </div>
            
            <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 'var(--radius-md)', padding: '1.25rem', marginTop: '1.5rem' }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <theme.destinationIconComponent size={16} /> {theme.destinationTitle}
              </h4>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {theme.facilityFeatures.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem', color: '#111827', fontWeight: 500 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: theme.color, borderRadius: '50%' }} />
                      {feature}
                    </span>
                    <span style={{ color: theme.color, fontSize: '0.75rem' }}>Confirmed</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
