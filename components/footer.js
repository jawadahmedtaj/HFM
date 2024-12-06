import Image from 'next/image';
import { Facebook, X, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const icons = [Facebook, X, Instagram, Instagram, Youtube, Linkedin];
  return (
    <footer className="bg-[#161616] min-h-[330px] flex justify-center items-center text-white">
      <div className="grid grid-flow-row md:grid-flow-col container px-10 lg:px-0 py-10 lg:py-0">
        <div className="grid grid-flow-row gap-4 px-10 lg:px-0">
          <p className="font-bold text-[#EEEEEE]">Find us on</p>
          <div className="grid grid-flow-col-dense gap-2">
            {icons.map((Icon, index) => (
              <Icon key={index} size={20} color="gray" />
            ))}
          </div>
          <div>
            <p className="pb-2 font-bold text-[#EEEEEE]">Download HFM App</p>
            <div className="grid grid-flow-col gap-4">
              <Image src="/appstore.png" alt="App Store" width={116} height={39} />
              <Image src="/googleplay.png" alt="Google Play" width={116} height={39} />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row justify-between px-10 lg:px-20">
          <p className="text-[#EEEEEE] font-bold text-lg">Risk Warning</p>
          <p className="text-[#999999] text-xs">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
            eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu p
          </p>
        </div>
      </div>
    </footer>
  );
}
