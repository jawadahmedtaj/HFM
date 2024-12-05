export default function Form() {
  return (
    <>
      <div className="bg-white rounded-xl w-[730px]">
        <div className="grid grid-flow-row py-8">
          <h1 className="flex justify-self-center text-2xl text-black">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="gap-4 grid grid-cols-2">
            <h6>First</h6>
            <h6>Last</h6>
            <h6>Country</h6>
            <h6>Phone</h6>
            <h6>Email</h6>
            <h6>Experience</h6>
          </div>
        </div>
      </div>
    </>
  );
}
