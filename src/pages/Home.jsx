import React from 'react'
import BottomNav from '../components/shared/BottomNav';
import Greetings from "../components/home/Greetings"
import MiniCard from "../components/home/MiniCard"
import { BsCashCoin } from 'react-icons/bs';
import { GrInProgress } from 'react-icons/gr';
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';

const Home = () => {
  return (
    <section className="bg-[#1a1a1a] min-h-screen pb-24 md:pb-8 flex flex-col lg:flex-row gap-6 p-4 lg:p-6 text-white">
      {/* Left Column: Main Dashboard Content */}
      <div className="flex-[3] flex flex-col gap-6">
        <Greetings />
        
        {/* Stats Grid - Using grid for better alignment than flex */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <MiniCard 
            title="Total Earnings" 
            icon={<BsCashCoin className="text-2xl text-yellow-500" />} 
            number={512} 
            footerNum={1.6} 
          />
          <MiniCard 
            title="In Progress" 
            icon={<GrInProgress className="text-2xl text-blue-500" />} 
            number={16} 
            footerNum={3.6} 
          />
        </div>

        {/* Orders Table Area */}
        <div className="bg-[#252525] rounded-2xl p-4 shadow-lg border border-white/5">
          <RecentOrders />
        </div>
      </div>

      {/* Right Column: Sidebar / Popular Items */}
      <div className="flex-[1.2] xl:flex-[1]">
        <div className="bg-[#252525] rounded-2xl p-4 h-full shadow-lg border border-white/5">
          <PopularDishes />
        </div>
      </div>

      {/* Navigation */}
      <BottomNav />
    </section>
  );
};

export default Home