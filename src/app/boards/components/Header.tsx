import Logo from "@/app/boards/components/Logo";
import Navigation from "@/app/boards/components/Navigation";
import Profile from "@/app/boards/components/Profile";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-screen h-[70px] border-b-1 border-b-[#DFDFDF] flex gap-4 justify-between  items-center px-4 py-2 ">
      <Logo />
      <Navigation />
      <Profile />
    </header>
  );
};

export default Header;
