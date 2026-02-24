import type { PropertyStatus } from "../types/property-types";

export const STATUS_CONFIG: Record<PropertyStatus, { badgeClass: string; label: string; color: string }> = {
  active: { badgeClass: 'badge-active-pill', label: 'Active', color: '#10B981' },
  maintenance: { badgeClass: 'badge-maint-pill', label: 'Maintenance', color: '#F59E0B' },
  inactive: { badgeClass: 'badge-inactive-pill', label: 'Inactive', color: '#64748B' }
};

export const OCCUPANCY_BAR_HEIGHTS = [0.45, 0.6, 0.5, 0.75, 0.65, 0.8, 1.0];

export const SECTION_CONFIG = {
  active: { label: 'Active', color: '#10B981' },
  maintenance: { label: 'In Maintenance', color: '#F59E0B' },
  inactive: { label: 'Inactive', color: '#64748B' }
};

export const getOccupancyColor = (pct: number, status: PropertyStatus): string => {
  if (status === 'inactive') return '#334155';
  if (pct >= 80) return '#3B82F6';
  if (pct >= 50) return '#F59E0B';
  return '#64748B';
};