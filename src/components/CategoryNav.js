import { categories } from './menuData';

/**
 * @component CategoryNav
 * @description Navigation component for selecting menu categories
 * @param {Object} props - Component props
 * @param {string} props.currentCategory - Currently selected category
 * @param {function} props.onCategoryChange - Callback for category change
 */
const CategoryNav = ({ currentCategory, onCategoryChange }) => {
  return (
    <nav className="bg-amber-700 p-2 shadow-md">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-3 py-1 rounded-md ${
              currentCategory === category.id 
                ? 'bg-amber-900 text-amber-50' 
                : 'bg-amber-600 text-amber-50 hover:bg-amber-500'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
