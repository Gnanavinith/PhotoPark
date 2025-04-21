import React from 'react'
import Customize from '../Components/HomePageComponents/Customize'
import CustomizeSteps from '../Components/HomePageComponents/CustomizeSteps'
import { 
  UserSquare, 
  Image as ImageIcon, 
  Square, 
  Heart, 
  Hexagon, 
  Circle, 
  ChevronRight 
} from 'lucide-react';

const shapeData = [
  { 
    name: 'Portrait', 
    icon: <UserSquare className="w-12 h-12 sm:w-14 sm:h-14 text-blue-600" /> 
  },
  { 
    name: 'Landscape', 
    icon: <ImageIcon className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" /> 
  },
  { 
    name: 'Square', 
    icon: <Square className="w-12 h-12 sm:w-14 sm:h-14 text-purple-600" /> 
  },
  { 
    name: 'Love', 
    icon: <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-pink-600" /> 
  },
  { 
    name: 'Hexagon', 
    icon: <Hexagon className="w-12 h-12 sm:w-14 sm:h-14 text-yellow-600" /> 
  },
  { 
    name: 'Round', 
    icon: <Circle className="w-12 h-12 sm:w-14 sm:h-14 text-red-600" /> 
  }
];

const steps = ["Select Shape", "Upload Image", "Place Order"];

const CustomizePage = () => {
  return (
    <div>
    <CustomizeSteps/>
    </div>
  )
}

export default CustomizePage