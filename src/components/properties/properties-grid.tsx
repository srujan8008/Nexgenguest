import React from "react";
import type { Property, FilterType } from "./types/property-types";
import { SECTION_CONFIG } from "./constants/property-constants";
import SectionLabel from "./section-label";
import PropertyCard from "./property-card";
import AddPropertyCard from "./add-property-card";
import EmptyState from "./empty-state";

interface PropertiesGridProps {
  properties: Property[];
  currentFilter: FilterType;
  onAddProperty: () => void;
  simpleLayout?: boolean; // Add this prop
}

const PropertiesGrid = ({ properties, currentFilter, onAddProperty, simpleLayout = false }: PropertiesGridProps) => {
  if (properties.length === 0) {
    return <EmptyState />;
  }

  let delay = 0;

  // SIMPLE LAYOUT - one grid with all cards + add card
  if (simpleLayout) {
    return (
      <div className="cards-grid">
        {properties.map(property => {
          const cardDelay = delay;
          delay += 0.04;
          return <PropertyCard key={property.id} property={property} delay={cardDelay} />;
        })}
        <AddPropertyCard onClick={onAddProperty} delay={delay} />
      </div>
    );
  }

  // FULL LAYOUT - grouped by status with section labels
  const statuses: Array<'active' | 'maintenance' | 'inactive'> = ['active', 'maintenance', 'inactive'];
  let hasActiveSection = false;

  const groupedContent = statuses.map(status => {
    const group = properties.filter(p => p.status === status);
    if (group.length === 0) return null;
    
    const config = SECTION_CONFIG[status];
    hasActiveSection = true;

    return (
      <React.Fragment key={status}>
        <SectionLabel label={config.label} color={config.color} count={group.length} />
        <div className="cards-grid">
          {group.map(property => {
            const cardDelay = delay;
            delay += 0.04;
            return <PropertyCard key={property.id} property={property} delay={cardDelay} />;
          })}
          {/* Add card only in 'all' view at end of active section */}
          {status === 'active' && currentFilter === 'all' && (
            <AddPropertyCard onClick={onAddProperty} delay={delay} />
          )}
        </div>
      </React.Fragment>
    );
  });

  // If filtered to non-active, show add card at end
  const showAddCardAtEnd = currentFilter !== 'all' && currentFilter !== 'active' && properties.length > 0;

  return (
    <div>
      {groupedContent}
      {showAddCardAtEnd && (
        <div className="cards-grid mt-6">
          <AddPropertyCard onClick={onAddProperty} delay={delay} />
        </div>
      )}
    </div>
  );
};

export default PropertiesGrid;