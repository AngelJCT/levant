/**
 * @component WineSheet
 * @description Displays detailed information about wines
 * @param {Object} props - Component props
 * @param {Object} props.wine - Wine object containing details
 */
import { useState } from 'react';

const WineSheet = ({ wine }) => {
  // Add state to track if the wine details are expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle function to expand/collapse wine details
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
      {/* Wine header with name, winery, region, year, and price */}
      <div 
        className="flex justify-between items-start cursor-pointer" 
        onClick={toggleExpand}
      >
        <div>
          <h3 className="text-xl font-semibold mb-1 text-amber-800 flex items-center">
            {wine.name}
            <span className="ml-2 text-amber-600">
              {isExpanded ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg> : 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
            </span>
          </h3>
          <p className="text-amber-600 font-medium mb-3">
            {wine.winery}, {wine.region} • {wine.year}
          </p>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold text-amber-800">${wine.price}</span>
          <p className="text-sm text-amber-600">Glass</p>
        </div>
      </div>
      
      {/* Collapsible content */}
      {isExpanded && (
        <div className="border-t border-amber-200 my-4 pt-4">
          {/* Wine details section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-amber-800 mb-2">Grapes</h4>
              <p className="text-amber-700 mb-4">{wine.grapes}</p>
              
              {wine.nose && (
                <>
                  <h4 className="font-medium text-amber-800 mb-2">Nose</h4>
                  <p className="text-amber-700 mb-4">{wine.nose}</p>
                </>
              )}
              
              {wine.palate && (
                <>
                  <h4 className="font-medium text-amber-800 mb-2">Palate</h4>
                  <p className="text-amber-700 mb-4">{wine.palate}</p>
                </>
              )}
            </div>
            
            <div>
              <h4 className="font-medium text-amber-800 mb-2">Description</h4>
              <p className="text-amber-700">{wine.description}</p>
              
              {/* Legacy food pairing text display if foodPairings table is not available */}
              {wine.foodPairing && !wine.foodPairings && (
                <>
                  <h4 className="font-medium text-amber-800 mb-2 mt-4">Food Pairing</h4>
                  <p className="text-amber-700">{wine.foodPairing}</p>
                </>
              )}
            </div>
          </div>
          
          {/* Food pairing table - full width, below other content */}
          {wine.foodPairings && Array.isArray(wine.foodPairings) && wine.foodPairings.length > 0 ? (
            <div className="mt-6">
              <h4 className="font-medium text-amber-800 mb-3">Food Pairing Guide</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="border border-amber-300 px-4 py-2 text-left text-amber-800">Category</th>
                      <th className="border border-amber-300 px-4 py-2 text-left text-amber-800">Dishes</th>
                      <th className="border border-amber-300 px-4 py-2 text-left text-amber-800">Potential Pairing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wine.foodPairings.map((pairing, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                        <td className="border border-amber-300 px-4 py-2 text-amber-700">{pairing.category}</td>
                        <td className="border border-amber-300 px-4 py-2 text-amber-700">{pairing.dishes}</td>
                        <td className="border border-amber-300 px-4 py-2 text-amber-700">{pairing.pairing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* Conclusion */}
          {wine.conclusion && (
            <div className="mt-6">
              <h4 className="font-medium text-amber-800 mb-3">Conclusion</h4>
              <p className="text-amber-700">{wine.conclusion}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WineSheet;
