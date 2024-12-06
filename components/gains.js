'use client';

import Image from 'next/image';
import TermsConditionsButton from './termsConditionsButton';
import { ordinal_suffix_of } from '@/app/utils/numbers';
import { motion } from 'motion/react';

const PrizeCup = ({ position }) => {
  return (
    <div className="ps-6 relative h-[100px] w-[100px]">
      <Image src="/trophy.png" alt="Trophy Cup" width={100} height={100} />
      <p className="absolute right-[32px] top-[10px] font-bold text-xl">{position}</p>
    </div>
  );
};

const Ribbon = ({ text }) => {
  return (
    <h4 className="absolute font-bold text-2xl top-6 px-24 h-[43px] flex items-center justify-center right-[-90px] rotate-45 text-white bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F]">
      ${text}
    </h4>
  );
};

const PrizeCard = ({ position, money, name, number, gain, month }) => {
  return (
    <motion.div
      whileInView={{
        y: [-100, 0],
        opacity: [0, 1],
        amount: 1,
        transition: { type: 'spring', bounce: 0.5, delay: position * 0.25 },
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
      }}
      className="w-[600px] h-[210px] bg-white rounded-2xl flex items-center relative overflow-hidden"
    >
      <div className="grid grid-flow-col justify-start items-center gap-8">
        <PrizeCup position={position} />
        <div className="grid grid-flow-row gap-4 uppercase">
          <p className="bg-clip-text bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] text-transparent font-bold text-lg">
            {month} {position}
            <span className="align-super text-sm lowercase">
              {ordinal_suffix_of(position)}
            </span>{' '}
            winner
          </p>
          <div className="font-normal text-lg">
            <p>{name}</p>
            <p className="text-[#A8A8A8]">{number}</p>
          </div>
          <p className="font-bold text-lg">
            Total Gain of <span className="text-[#CD0511]">{gain}%</span>
          </p>
        </div>
        <Ribbon text={`${money}`} />
      </div>
    </motion.div>
  );
};

export default function Gains() {
  const prizes = [
    {
      position: 1,
      name: 'John Smith',
      number: '5678987654',
      gain: '16344',
      month: 'January',
      money: '1000',
    },
    {
      position: 2,
      name: 'John Smith',
      number: '5678987654',
      gain: '16344',
      month: 'January',
      money: '1000',
    },
    {
      position: 3,
      name: 'John Smith',
      number: '5678987654',
      gain: '16344',
      month: 'January',
      money: '1000',
    },
  ];

  const gainsList = [
    { name: 'John Smith', gain: '1624.19' },
    { name: 'John Smith', gain: '1083.63' },
    { name: 'John Smith', gain: '635.47' },
    { name: 'John Smith', gain: '169.20' },
    { name: 'John Smith', gain: '158.62' },
    { name: 'John Smith', gain: '124.50' },
    { name: 'John Smith', gain: '71.47' },
    { name: 'John Smith', gain: '67.05' },
    { name: 'John Smith', gain: '62.30' },
    { name: 'John Smith', gain: '61.74' },
  ];

  return (
    <div className="grid grid-flow-row place-content-center pt-32 gap-32 bg-[#F4F4F4]">
      <p className="text-black font-normal text-5xl place-self-center">Sed fringilla mauris sit</p>
      <div className="grid grid-flow-col gap-8">
        <div className="grid grid-flow-row gap-4">
          {prizes.map((prize) => (
            <PrizeCard {...prize} key={prize.position} />
          ))}
        </div>
        <div className="grid grid-flow-row w-[650px] gap-4">
          <p className="font-bold text-2xl">Aliquam lorem ant</p>
          <div className="grid grid-flow-col justify-between border-b border-[#DEDEDE] px-8 text-[#CD0511] font-bold pb-2">
            <p>Name</p>
            <p>Gain</p>
          </div>
          {gainsList.map((gain, index) => (
            <div
              key={index}
              className="grid grid-flow-col justify-between border-b border-[#DEDEDE] px-8 pb-2"
            >
              <p>{gain.name}</p>
              <p className="font-bold">{gain.gain}%</p>
            </div>
          ))}
          <p className="text-[#A8A8A8] text-xs">Nam quam nunc, blandit vel, luctus pulvinar</p>
        </div>
      </div>
      <TermsConditionsButton />
    </div>
  );
}
