import QR from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center font-[Outfit]">
        <div className="w-[320px] h-[495px] bg-[#FFFFFF] rounded-2xl flex flex-col pt-[14px] items-center">
          <img src={QR} alt="QR" className="rounded-xl w-[290px] h-[290px]" />
          <span className="block font-bold text-center text-[1.5rem] leading-[30px] tracking-[-0.07rem] mt-[20px] mx-[20px]">
            Improve your front-end skills by building projects
          </span>
          <p className="block text-[1rem] m-[7px] tracking-[-0.02rem] font-normal text-gray-600/80 text-center leading-5 mx-[40px] mt-[15px]">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
