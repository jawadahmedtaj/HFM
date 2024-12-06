import Image from 'next/image';
import { UserRoundCheck, SlidersVertical, Banknote, Users } from 'lucide-react';

export default function MobileAd() {
  return (
    <div className="w-screen bg-[#F4F4F4] flex flex-col justify-end items-center pt-20 gap-20">
      <p className="font-normal text-5xl">Quisque rutrum</p>
      <div className="grid grid-flow-row lg:grid-flow-col col-span-3 justify-evenly gap-10">
        <div className="grid grid-flow-row">
          <div className="grid grid-flow-row place-content-center">
            <UserRoundCheck size={124} color="#CD0511" strokeWidth={0.5} />
            <p className="font-normal text-lg break-words text-center max-w-72 text-muted-foreground">
              Missing designs for this section, it is just an image so I am guessing here.
            </p>
          </div>
          <div className="grid grid-flow-row place-content-center">
            <Banknote size={124} color="#CD0511" strokeWidth={0.5} />
            <p className="font-normal text-lg break-words text-center max-w-72 text-muted-foreground">
              Missing designs for this section, it is just an image so I am guessing here.
            </p>
          </div>
        </div>
        <Image
          className="order-last lg:order-none"
          src="/mobileScreen.png"
          alt="Mobile Screen"
          width={628}
          height={626}
        />
        <div className="grid grid-flow-row">
          <div className="grid grid-flow-row place-content-center">
            <SlidersVertical size={124} color="#CD0511" strokeWidth={0.5} />
            <p className="font-normal text-lg break-words text-center max-w-72 text-muted-foreground">
              Missing designs for this section, it is just an image so I am guessing here.
            </p>
          </div>
          <div className="grid grid-flow-row place-content-center">
            <Users size={124} color="#CD0511" strokeWidth={0.5} />
            <p className="font-normal text-lg break-words text-center max-w-72 text-muted-foreground">
              Missing designs for this section, it is just an image so I am guessing here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
