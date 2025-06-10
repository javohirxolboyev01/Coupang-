import React from 'react';
import {
  LiaFemaleSolid, LiaMaleSolid
} from 'react-icons/lia';
import {
  PiGenderIntersexThin
} from 'react-icons/pi';
import {
  PiPantsThin
} from 'react-icons/pi';
import {
  PiSneakerThin
} from 'react-icons/pi';
import {
  PiBagSimpleThin
} from 'react-icons/pi';
import {
  PiBasketballThin
} from 'react-icons/pi';
import {
  PiBabyThin
} from 'react-icons/pi';
import {
  PiStorefrontThin
} from 'react-icons/pi';
import {
  PiBuildingsThin
} from 'react-icons/pi';

const categories = [
  { icon: <LiaFemaleSolid size={60} />, label: '여성' },        
  { icon: <LiaMaleSolid size={60} />, label: '남성' },           
  { icon: <PiGenderIntersexThin size={60} />, label: '남녀공용' },
  { icon: <PiPantsThin size={60} />, label: '속옷·잠옷' },        
  { icon: <PiSneakerThin size={60} />, label: '신발' },        
  { icon: <PiBagSimpleThin size={60} />, label: '가방·잡화' }, 
  { icon: <PiBasketballThin size={60} />, label: '스포츠' },   
  { icon: <PiBabyThin size={60} />, label: '유아동' },           
  { icon: <PiBuildingsThin size={60} />, label: 'C.에비뉴' },     
  { icon: <PiStorefrontThin size={60} />, label: 'C.STREET' },    
];
const CategoryPage = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      {/* Category Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-5 gap-y-8 gap-x-2 text-center">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="text-3xl text-gray-700  transform transition-transform duration-300 hover:scale-105 cursor-pointer">{cat.icon}</div>
            <div className="mt-2 text-xl font-semibold text-gray-800">{cat.label}</div>
          </div>
        ))}
      </div>

      {/* Trend Focus Text */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl mt-20 font-bold">Trend Focus</h2>
      </div>

   
    </div>
  );
};

export default CategoryPage