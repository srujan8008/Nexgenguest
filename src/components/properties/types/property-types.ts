export type PropertyStatus = 'active' | 'maintenance' | 'inactive';
export type FilterType = 'all' | 'active' | 'maintenance' | 'inactive';
export type SortMode = 0 | 1 | 2 | 3;

export interface Property {
  id: string;
  name: string;
  type: string;
  city: string;
  status: PropertyStatus;
  occupancy: number;
  image: string;
  avatars: number[];
  extras: number;
  alert: string | null;
}

export interface StatsData {
  total: number;
  newCount: number;
  active: number;
  activeChange: string;
  maintenance: number;
  maintenanceChange: string;
  avgOccupancy: number;
  occupancyChange: string;
}

export interface PropertyCardProps {
  property: Property;
  delay: number;
}

export interface ToolbarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  sortMode: SortMode;
  sortModes: string[];
  onSortCycle: () => void;
  totalCounts: {
    all: number;
    active: number;
    maintenance: number;
    inactive: number;
  };
}