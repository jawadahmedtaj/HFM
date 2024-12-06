'use client';

import Image from 'next/image';
import TermsConditionsButton from './termsConditionsButton';
import { motion } from 'motion/react';

const PrizeMedal = ({ number }) => {
  return (
    <div className="ps-6 relative h-[100px] w-[100px]">
      <Image src="/prizemedal.png" alt="Prize Medal" width={100} height={100} />
      <p className="absolute right-[28px] bottom-0 font-bold text-4xl bg-clip-text bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] text-transparent">
        {number}
      </p>
    </div>
  );
};

const PrizeCards = ({ number, money, name }) => {
  return (
    <motion.div
      whileInView={{
        x: [-100, 0],
        opacity: [0, 1],
        amount: 1,
        transition: { type: 'spring', bounce: 0.5, delay: number * 0.25 },
      }}
      whileHover={{
        scale: 1.1,
      }}
      viewport={{ once: true }}
      className="w-[427px] h-[350px] bg-[#F4F4F4] rounded-lg"
    >
      <div className="grid grid-flow-row place-content-center gap-6 pt-8">
        <PrizeMedal number={number} />
        <p className="text-black font-bold text-5xl pt-10">${money}</p>
        <p className="text-black font-normal text-xl break-words w-[157px] text-center">{name}</p>
      </div>
    </motion.div>
  );
};

export default function Prizes() {
  const prizes = [
    {
      money: '1000',
      name: 'Cras dapibus & Cras dapibus',
    },
    {
      money: '1000',
      name: 'Cras dapibus',
    },
    {
      money: '1000',
      name: 'Cras & Cras',
    },
  ];

  return (
    <div className="grid grid-flow-row place-content-center py-32 gap-32">
      <p className="text-black font-normal text-5xl place-self-center">PRIZES</p>
      <div className="grid grid-flow-col gap-8">
        {prizes.map((prize, index) => (
          <PrizeCards key={index} {...prize} number={index + 1} />
        ))}
      </div>

      <TermsConditionsButton />
    </div>
  );
}
