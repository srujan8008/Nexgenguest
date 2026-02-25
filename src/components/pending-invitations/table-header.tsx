import SearchFilter from "./search-filter";

interface TableHeaderProps {
  title: string;
  subtitle: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onFilterClick: () => void;
}

const TableHeader = ({ title, subtitle, searchQuery, onSearchChange, onFilterClick }: TableHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-7 py-4 border-b border-[#1E2D42]">
      <div>
        <div className="text-base font-bold text-[#F1F5F9] mb-1">{title}</div>
        <div className="text-[0.8125rem] text-[#64748B]">{subtitle}</div>
      </div>
      <SearchFilter 
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onFilterClick={onFilterClick}
      />
    </div>
  );
};

export default TableHeader;