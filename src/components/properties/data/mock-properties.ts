import type { Property } from "../types/property-types";

export const mockProperties: Property[] = [
  // ACTIVE PROPERTIES (with avatars, no alert)
  {
    id: 'SHL-001',
    name: 'Souma Hotel Lima',
    type: 'Hotel',
    city: 'Lima, Peru',
    status: 'active',
    occupancy: 92,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    avatars: [11, 5],
    extras: 4,
    alert: null
  },
  {
    id: 'UNN-002',
    name: 'Urban Neo NYC',
    type: 'Hotel',
    city: 'New York, USA',
    status: 'active',
    occupancy: 88,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    avatars: [3, 7],
    extras: 2,
    alert: null
  },
  {
    id: 'ERM-003',
    name: 'Elysian Reef Maui',
    type: 'Resort',
    city: 'Maui, Hawaii',
    status: 'active',
    occupancy: 96,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    avatars: [9, 12],
    extras: 3,
    alert: null
  },
  {
    id: 'ASM-004',
    name: 'Azure Sands Miami',
    type: 'Hotel',
    city: 'Miami, FL',
    status: 'active',
    occupancy: 91,
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80',
    avatars: [15, 22],
    extras: 2,
    alert: null
  },
  {
    id: 'TBI-005',
    name: 'Terra Blanca Ibiza',
    type: 'Boutique',
    city: 'Ibiza, Spain',
    status: 'active',
    occupancy: 79,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80',
    avatars: [14, 21],
    extras: 1,
    alert: null
  },
  {
    id: 'SVK-006',
    name: 'Sakura View Kyoto',
    type: 'Hotel',
    city: 'Kyoto, Japan',
    status: 'active',
    occupancy: 85,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    avatars: [20, 25],
    extras: 3,
    alert: null
  },
  {
    id: 'CHC-007',
    name: 'Cape Horizon',
    type: 'Hotel',
    city: 'Cape Town, SA',
    status: 'active',
    occupancy: 74,
    image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600&q=80',
    avatars: [1, 8],
    extras: 2,
    alert: null
  },
  {
    id: 'SWP-008',
    name: 'Sameer weds Padmashri',
    type: 'Venue',
    city: 'Udaipur, India',
    status: 'active',
    occupancy: 100,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    avatars: [4, 6],
    extras: 5,
    alert: 'Venue setup in progress'  
  },
  {
    id: 'NFO-009',
    name: 'Nordic Fjord Oslo',
    type: 'Hotel',
    city: 'Oslo, Norway',
    status: 'active',
    occupancy: 68,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80',
    avatars: [16, 30],
    extras: 1,
    alert: null
  },
  {
    id: 'DBD-010',
    name: 'Desert Bloom Dubai',
    type: 'Resort',
    city: 'Dubai, UAE',
    status: 'active',
    occupancy: 93,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    avatars: [18, 28],
    extras: 4,
    alert: null
  },

  // MAINTENANCE PROPERTIES (with alerts)
  {
    id: 'GPR-011',
    name: 'Grand Peak Resort',
    type: 'Resort',
    city: 'Aspen, CO',
    status: 'maintenance',
    occupancy: 45,
    image: 'https://images.unsplash.com/photo-1548286978-f218023f8d18?w=600&q=80',
    avatars: [2, 10],
    extras: 2,
    alert: 'Elevator servicing in progress'
  },
  {
    id: 'VRA-012',
    name: 'Volta Riverfront',
    type: 'Hotel',
    city: 'Accra, Ghana',
    status: 'maintenance',
    occupancy: 32,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    avatars: [13, 17],
    extras: 1,
    alert: 'Renovation work ongoing'
  },
  {
    id: 'PLB-013',
    name: 'Pines Lodge Banff',
    type: 'Hotel',
    city: 'Banff, Canada',
    status: 'maintenance',
    occupancy: 20,
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80',
    avatars: [23, 27],
    extras: 1,
    alert: 'Seasonal closure maintenance'
  },

  // INACTIVE PROPERTIES
  {
    id: 'RSC-014',
    name: 'Riviera Suite Cannes',
    type: 'Hotel',
    city: 'Cannes, France',
    status: 'inactive',
    occupancy: 0,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    avatars: [19, 24],
    extras: 0,
    alert: null
  }
];

export const statsData = {
  total: 14,
  newCount: 2,
  active: 10,
  activeChange: '+1',
  maintenance: 3,
  maintenanceChange: '+1',
  avgOccupancy: 84,
  occupancyChange: '+3%'
};