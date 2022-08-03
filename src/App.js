import React from 'react';
import { Header, Card, Button } from './components';
import { sampleData } from './constants/sampleData';

export const App = () => {
  return (
    <div className='px-[85px] py-[108px]'>
      <Header />

      <div className='my-[80px] grid lg:grid-cols-3 md:grid-cols-1'>
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
