import QR from "./assets/image-qr-code.png";

function App() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center font-[Outfit]">
        <div className="flex h-[495px] w-[320px] flex-col items-center rounded-2xl bg-[#FFFFFF] pt-[14px]">
          <img src={QR} alt="QR" className="h-[290px] w-[290px] rounded-xl" />
          <span className="mx-[20px] mt-[20px] block text-center text-[1.5rem] font-bold leading-[30px] tracking-[-0.07rem] text-[#1F3150]">
            Improve your front-end skills by building projects
          </span>
          <p className="m-[7px] mx-[40px] mt-[15px] block text-center text-[1rem] font-normal leading-5 tracking-[-0.02rem] text-gray-600/80">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
