import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('');
  const navigate=useNavigate();
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    navigate(itemName);
    // Perform any additional functionality here based on the selected item
  };

  return (
    <aside className=" w-54 bg-gray-200 h-full fixed mt-16 overflow-y-auto">
      <div className="p-4">
        <ul>
          <li
            className={`cursor-pointer mb-2 ${
              activeItem === '' ? 'font-bold' : ''
            }`}
            onClick={() => handleItemClick('')}
          >
            Contact List
          </li>
          <li
            className={`cursor-pointer ${
              activeItem === 'maps-chart' ? 'font-bold' : ''
            }`}
            onClick={() => handleItemClick('maps-chart')}
          >
            Map and Chart
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;