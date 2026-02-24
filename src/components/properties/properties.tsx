import React, { useState, useMemo } from "react";
import Header from "./header";
import PageHeader from "./page-header";
import StatsCards from "./stats-cards";
import Toolbar from "./toolbar";
import PropertiesGrid from "./properties-grid";
import ContextMenu from "./context-menu";
import AddPropertyModal from "./add-property-modal";
import Toast from "./toast";
import { useProperties } from "./hooks/use-properties";
import { statsData } from "./data/mock-properties";
import type { Property, PropertyStatus } from "./types/property-types";

const Properties: React.FC = () => {
  const [showFullLayout, setShowFullLayout] = useState(true); // Toggle this
  
  const {
    properties: allProperties,
    filteredProperties: allFilteredProperties,
    currentFilter,
    sortMode,
    searchQuery,
    sortModes,
    isModalOpen,
    toastMessage,
    showToast,
    setFilter,
    setSearchQuery,
    cycleSort,
    openModal,
    closeModal,
    handleCreateProperty
  } = useProperties();

  // For simple layout - ONLY show 2 specific properties with modified status
  const simpleProperties = useMemo((): Property[] => {
    // Get the original properties
    const souma = allProperties.find(p => p.name === 'Souma Hotel Lima');
    const sameer = allProperties.find(p => p.name === 'Sameer weds Padmashri');
    
    if (!souma || !sameer) return [];
    
    // Create a MODIFIED version of Sameer for simple layout
    const modifiedSameer: Property = {
      ...sameer,
      status: 'maintenance' as PropertyStatus,
      occupancy: 45,
      alert: 'Venue setup in progress'
    };
    
    return [souma, modifiedSameer];
  }, [allProperties]);

  // Decide which properties to show based on layout
  const displayProperties = showFullLayout ? allFilteredProperties : simpleProperties;

  return (
    <div className="min-h-screen bg-[#020617] fixed inset-0 overflow-y-auto font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <Header />
      
      <main className="pt-[72px] bg-[#020617] p-10">
        {/* Page Header - Different for each layout */}
        {showFullLayout ? (
          <PageHeader onAddProperty={openModal} />
        ) : (
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="text-[0.6875rem] font-bold tracking-wider uppercase text-[#3B82F6] mb-1.5">
                Master Admin
              </div>
              <h1 className="text-[1.875rem] font-extrabold text-[#F1F5F9] tracking-tight">
                All Properties
              </h1>
              <p className="text-[0.9375rem] text-[#64748B] mt-1">
                Manage and monitor your NexGen hotel portfolio.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <button className="flex items-center gap-2 bg-transparent text-[#94A3B8] px-4 py-2.5 rounded-lg text-[0.8125rem] font-semibold border border-[#334155] hover:text-[#F1F5F9] hover:border-[#475569] hover:bg-[#1E2D42]/10 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </button>
              <button className="flex items-center gap-2 bg-transparent text-[#94A3B8] px-4 py-2.5 rounded-lg text-[0.8125rem] font-semibold border border-[#334155] hover:text-[#F1F5F9] hover:border-[#475569] hover:bg-[#1E2D42]/10 transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[15px] h-[15px]">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                  <line x1="10" y1="18" x2="14" y2="18" />
                </svg>
                Filter
              </button>
              <button
                onClick={openModal}
                className="flex items-center gap-2 bg-[#3B82F6] text-white px-5 py-2.5 rounded-lg text-[0.875rem] font-bold hover:bg-[#4F90F8] hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                New Property
              </button>
            </div>
          </div>
        )}

        {/* Stats Cards - Only in full layout */}
        {showFullLayout && <StatsCards stats={statsData} />}
        
        {/* Toolbar - Only in full layout */}
        {showFullLayout && (
          <Toolbar 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            currentFilter={currentFilter}
            onFilterChange={setFilter}
            sortMode={sortMode}
            sortModes={sortModes}
            onSortCycle={cycleSort}
            totalCounts={{
              all: allProperties.length,
              active: allProperties.filter(p => p.status === 'active').length,
              maintenance: allProperties.filter(p => p.status === 'maintenance').length,
              inactive: allProperties.filter(p => p.status === 'inactive').length
            }}
          />
        )}
        
        {/* Properties Grid - with simpleLayout prop */}
        <PropertiesGrid 
          properties={displayProperties}
          currentFilter={currentFilter}
          onAddProperty={openModal}
          simpleLayout={!showFullLayout}
        />
      </main>

      <ContextMenu />
      <AddPropertyModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onCreate={handleCreateProperty}
      />
      <Toast message={toastMessage} isVisible={showToast} />
    </div>
  );
};

export default Properties;