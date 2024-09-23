import React from 'react';

const FilterTabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="flex bg-white rounded-lg overflow-hidden w-full mt-4 shadow">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`flex-1 py-2 px-4 text-xs sm:text-sm ${
            activeTab === index
              ? 'text-blue-600 font-bold border-b-2 border-blue-600'
              : 'text-gray-600 border-b-2 border-gray-300'
          } text-center hover:bg-gray-100`}
          onClick={() => onTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

const SortByDropdown = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow-sm leading-tight focus:outline-none focus:shadow-outline text-xs sm:text-sm"
        value={selectedOption}
        onChange={(e) => onOptionSelect(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const SearchResults = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('Recommended');

  const tabs = ['Our top picks', 'Hotel and apartments', 'Residence', 'Resort', 'Shared Space'];
  const sortOptions = ['Recommended', 'Price', 'Rating'];

  return (
    <div className="p-3 max-w-4xl mx-auto">
      {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <SortByDropdown 
          options={sortOptions} 
          selectedOption={selectedOption} 
          onOptionSelect={setSelectedOption} 
        />
      </div> */}
      <FilterTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabClick={setActiveTab} 
      />
    </div>
  );
};


export default SearchResults;
