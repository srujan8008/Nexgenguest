import React, { useEffect, useRef } from "react";
import type { PropertyCardProps } from "./types/property-types";
import { STATUS_CONFIG, OCCUPANCY_BAR_HEIGHTS, getOccupancyColor } from "./constants/property-constants";

const PropertyCard = ({ property, delay }: PropertyCardProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const statusConfig = STATUS_CONFIG[property.status];
  const occupancyColor = getOccupancyColor(property.occupancy, property.status);

  useEffect(() => {
    if (chartRef.current) {
      const litCount = Math.round(property.occupancy / 100 * OCCUPANCY_BAR_HEIGHTS.length);
      const bars = OCCUPANCY_BAR_HEIGHTS.map((h, i) => {
        const isLit = i < litCount;
        return `<div class="occ-bar ${isLit ? 'lit' : 'dim'}" style="height:${Math.round(h * 32)}px;background:${occupancyColor};flex-shrink:0;"></div>`;
      }).join('');
      chartRef.current.innerHTML = bars;
    }
  }, [property, occupancyColor]);

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    const menu = document.getElementById('ctxMenu');
    if (menu) {
      const x = e.clientX;
      const y = e.clientY;
      
      menu.style.left = Math.min(x - 170, window.innerWidth - 200) + 'px';
      menu.style.top = Math.min(y, window.innerHeight - 250) + 'px';
      
      menu.classList.add('open');
      
      const event = new CustomEvent('showContextMenu', { 
        detail: { left: menu.style.left, top: menu.style.top } 
      });
      document.dispatchEvent(event);
    }
  };

  const handleViewDetails = () => {
    console.log('View details for:', property.name);
  };

  const occupancyDisplay = property.occupancy > 0 ? property.occupancy + '%' : '—';
  const nameOpacity = property.status === 'inactive' ? 'opacity-60' : '';

  return (
    <div 
      className={`prop-card ${property.status === 'inactive' ? 'inactive' : ''} fade-up group`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image Container */}
      <div className="relative h-[164px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/5 to-[#020617]/78"></div>
        
        {/* Status Badge */}
        <span className={`absolute top-3 left-3 text-[0.625rem] font-extrabold tracking-wider uppercase px-2 py-1 rounded-full flex items-center gap-1 ${statusConfig.badgeClass}`}>
          <span className="w-[5px] h-[5px] rounded-full bg-white/85"></span>
          {statusConfig.label}
        </span>

        {/* Three Dots Button */}
        <button 
          onClick={handleMoreClick}
          className="absolute top-3 right-3 w-[30px] h-[30px] rounded-full bg-[#0F172A]/75 backdrop-blur-sm border border-[#1E2D42] flex items-center justify-center text-[#94A3B8] cursor-pointer opacity-0 group-hover:opacity-100 transition-all hover:bg-[#3B82F6]/30 hover:border-[#3B82F6] hover:text-white z-5"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
            <circle cx="12" cy="5" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="19" r="1" fill="currentColor" />
          </svg>
        </button>

        {/* Bottom overlay text */}
        <div className="absolute bottom-0 left-0 right-0 p-3.5 pb-3">
          <div className={`text-[1.0625rem] font-extrabold text-[#F1F5F9] tracking-tight leading-tight drop-shadow-lg ${nameOpacity}`}>
            {property.name}
          </div>
          <div className="text-[0.75rem] text-[#F1F5F9]/65 mt-1 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-2.5 h-2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {property.city}
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 pb-5 flex flex-col gap-3.5 flex-1">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[0.625rem] font-bold tracking-wider uppercase text-[#475569] mb-1">Avg. Occupancy</div>
            <div className="text-[1.625rem] font-extrabold text-[#F1F5F9] tracking-tight leading-none">{occupancyDisplay}</div>
          </div>
          <div ref={chartRef} className="flex items-end gap-[3px] h-8"></div>
        </div>

        {/* Footer with conditional rendering */}
        <div className="flex items-center justify-between border-t border-[#1E2D42] pt-3.5">
          {property.alert ? (
            // Show Alert Message (when alert exists)
            <>
              <div className="flex items-center gap-1.5">
                <div className="text-[#F59E0B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <span className="text-[0.75rem] text-[#94A3B8]">{property.alert}</span>
              </div>
              <button onClick={handleViewDetails} className="text-[0.8125rem] font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-colors whitespace-nowrap">
                View Details →
              </button>
            </>
          ) : (
            // Show Avatars (when alert is null/undefined)
            <>
              <div className="flex items-center">
                {property.avatars.map((imgNum, i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/40?img=${imgNum}`} 
                    className={`w-[26px] h-[26px] rounded-full object-cover border-2 border-[#0F172A] ${i > 0 ? '-ml-1.5' : ''}`}
                    alt=""
                  />
                ))}
                {property.extras > 0 && (
                  <div className="w-[26px] h-[26px] rounded-full bg-[#1E293B] border-2 border-[#0F172A] -ml-1.5 text-[0.625rem] font-bold text-[#94A3B8] flex items-center justify-center">
                    +{property.extras}
                  </div>
                )}
              </div>
              <button onClick={handleViewDetails} className="text-[0.8125rem] font-bold text-[#3B82F6] hover:text-[#60A5FA] transition-colors whitespace-nowrap">
                View Details →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;