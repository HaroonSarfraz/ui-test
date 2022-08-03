import React from 'react';
import { Image } from '../../assets/images';

const Card = ({ data }) => (
  <div className='h-[336px] mx-[15px] my-[20px] flex bg-white filter drop-shadow-lg rounded-lg'>
    <img
      alt='home'
      src={Image}
      className='w-[185px] rounded-tl-lg rounded-bl-lg object-cover'
    />

    <div className='pt-[40px] pl-[34px] pr-[30px]'>
      <p className='font-poppins font-bold text-[24px] text-[#353844] leading-[32px]'>
        {data.heading}
      </p>

      {data.list && (
        <ul className='marker:text-[#D2AD81] mt-[12px] list-disc list-inside font-nunito font-bold text-[15px] text-[#353844] leading[26px]'>
          {data.list.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      )}

      {data.content &&
        data.content.map((data, index) => (
          <p
            key={index}
            className='mt-[12px] font-nunito font-semibold text-[15px] text-[#353844] leading-[24px]'
          >
            {data}
          </p>
        ))}
    </div>
  </div>
);

export default Card;
