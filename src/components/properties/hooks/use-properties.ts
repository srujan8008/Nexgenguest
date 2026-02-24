import { useState, useMemo } from "react";
import { mockProperties } from "../data/mock-properties";
import type { Property, FilterType, SortMode } from "../types/property-types";

export const useProperties = () => {
  const [properties] = useState<Property[]>(mockProperties);
  const [currentFilter, setCurrentFilter] = useState<FilterType>('all');
  const [sortMode, setSortMode] = useState<SortMode>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const sortModes = ['Name A–Z', 'Name Z–A', 'Occupancy ↓', 'Occupancy ↑'];

  const filteredProperties = useMemo(() => {
    // Filter by search
    let filtered = properties.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter by status
    if (currentFilter !== 'all') {
      filtered = filtered.filter(p => p.status === currentFilter);
    }

    // Sort
    switch(sortMode) {
      case 0: // Name A–Z
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 1: // Name Z–A
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 2: // Occupancy ↓
        filtered.sort((a, b) => b.occupancy - a.occupancy);
        break;
      case 3: // Occupancy ↑
        filtered.sort((a, b) => a.occupancy - b.occupancy);
        break;
    }

    return filtered;
  }, [properties, searchQuery, currentFilter, sortMode]);

  const setFilter = (filter: FilterType) => {
    setCurrentFilter(filter);
  };

  const cycleSort = () => {
    setSortMode(((sortMode + 1) % sortModes.length) as SortMode);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateProperty = () => {
    closeModal();
    setToastMessage('Property created successfully!');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return {
    properties,
    filteredProperties,
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
  };
};