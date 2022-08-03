import React from 'react';
import { Header, Card, Button } from './components';
import { sampleData } from './constants/sampleData';

export const App = () => {
  return (
    <div className='px-2 md:px-[85px] py-20 md:py-[108px]'>
      <Header />

      <div className="my-[80px]">
        <div className='w-fit m-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
          {sampleData.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>
      </div>

      <div className='flex justify-center'>
        <Button />
      </div>
    </div>
  );
};
