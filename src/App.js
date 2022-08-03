import React from 'react';
import { Header, Card, Button } from './components';
import { sampleData } from './constants/sampleData';

export const App = () => {
  return (
    <div className='px-2 md:px-[85px] py-20 md:py-[108px] bg-[#E5E5E5]'>
      <Header />

      <div className='my-[80px] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center items-center'>
        {sampleData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>

      <div className='flex justify-center'>
        <Button />
      </div>
    </div>
  );
};
