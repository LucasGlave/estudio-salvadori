import Image from "next/image";
import HomePage from "../components/homePage/HomePage";
import Header from "@/components/Header";
import Jurisdictions from "@/components/jurisdictions/Jurisdictions";
import MyAccount from "@/components/MyAccount";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex relative flex-col w-full justify-center align-middle">
        <div className="back-image top-0 left-0 absolute flex flex-row gap-64 items-center justify-center w-full h-screen bg-no-repeat bg-bottom-left bg-cover bg-fixed z-0"/>
        <Header />
        <HomePage />
        <Jurisdictions />
        <div className="back-image flex flex-row items-center p-48 justify-center w-full h-screen bg-no-repeat bg-bottom-left bg-cover bg-fixed z-10">
          <div className="w-full flex justify-center items-center h-full p-4 m-4 rounded-xl opacity-95">
            <MyAccount />
          </div>
        </div>
        <Footer/>
        <div className="back-image bottom-0 left-0 absolute flex flex-row gap-64 items-center justify-center w-full h-screen bg-no-repeat bg-bottom-left bg-cover bg-fixed z-0"/>
      </div> 
    </>
  );
}
