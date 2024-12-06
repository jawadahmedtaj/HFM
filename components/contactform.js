import ContactFormFields from './contactFormFields';

export default function ContactForm() {
  return (
    <>
      <div className="bg-[url('/mainimage.png')] bg-cover bg-no-repeat w-screen h-full">
        <div className="place-content-center grid grid-flow-row">
          <div className="flex flex-col items-center pt-12 text-7xl text-white">
            <h1 className="bg-clip-text bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] text-transparent">
              Lorem ipsum dolor
            </h1>
            <h1>sit amet tosik</h1>
            <div className="bg-white rounded-xl w-[730px] my-10">
              <div className="grid grid-flow-row py-8">
                <h1 className="flex justify-self-center text-2xl text-black">
                  Lorem ipsum dolor sit amet
                </h1>
                <ContactFormFields />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
