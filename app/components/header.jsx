import Image from 'next/image';

export default function Header() {
  const anchorLinks = ['Markets', 'Trading', 'Investing', 'Tools & Education', 'Company'];
  const aboutLinks = ['Contact Us', 'Partner with us'];

  return (
    <header className="bg-[#161616]">
      <div className="mx-auto container">
        <div className="items-center grid grid-flow-col min-h-[132px] text-[#EEEEEE]">
          <div className="justify-start grid grid-flow-row">
            <h1 className="text-[#A8A8A8]">Member of HF Markets Group</h1>
            <Image className="" src="/logo.png" alt="HFM logo" width={119} height={58} priority />
          </div>
          <div className="grid grid-flow-col pb-8 self-end">
            {anchorLinks.map((anchorLink) => (
              <a
                key={anchorLink}
                href={`#${anchorLink.toLowerCase()}`}
                className="hover:text-[#FCD678]"
              >
                {anchorLink}
              </a>
            ))}
          </div>
          <div className="gap-4 grid grid-flow-row py-4 place-self-start">
            <div className="items-center gap-4 grid grid-flow-col">
              <button className="flex justify-center items-center gap-2 border-[#5A5A5A] border-[0.5px] rounded w-[136px] h-[29px]">
                <Image src="/mobile.png" alt="Mobile Image" width={9.7} height={18.47} />
                <p>Download App</p>
              </button>
              {aboutLinks.map((aboutLink) => (
                <>
                  <a key={aboutLink} href={`#${aboutLink.toLowerCase()}`}>
                    {aboutLink}
                  </a>
                  <div className="border-[#404040] border-r h-4"></div>
                </>
              ))}
              <Image src="/en.png" alt="Country flag" width={17} height={17} />
            </div>
            <div className="justify-end gap-4 grid grid-flow-col-dense">
              <button className="border-[#CD0511] border rounded w-[81px] h-[35px]">Login</button>
              <button className="bg-[#179149] rounded w-[111px] h-[35px]">Register</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
