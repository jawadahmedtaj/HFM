import Form from './form';

export default function ContactForm() {
  return (
    <>
      <div className="bg-[url('/mainimage.png')] bg-contain bg-no-repeat w-screen h-screen">
        <div className="place-content-center grid grid-flow-row">
          <div className="flex flex-col items-center pt-12 text-7xl text-white">
            <h1 className="bg-clip-text bg-gradient-to-r from-[#FCD678] via-[#FCD678] to-[#BC8C2F] text-transparent">
              Lorem ipsum dolor
            </h1>
            <h1>sit amet tosik</h1>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
