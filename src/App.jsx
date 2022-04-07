import QR from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="flex h-screen justify-center items-center font-[Outfit]">
        <div className="w-[22%] h-[550px] bg-[#FFFFFF] rounded-[20px] flex flex-col p-[1.2%] justify-around">
          <img src={QR} alt="QR" className="rounded-md" />
          <span className="block mt-4 font-bold text-center text-[24px] mb-4">
            Improve your front-end skills by building projects
          </span>
          <p className="block text-[17px] m-[7px] font-normal text-gray-600/80 text-center leading-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
