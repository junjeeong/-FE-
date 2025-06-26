import Logo from "@/app/(board)/boards/components/Logo";
import Navigation from "@/app/(board)/boards/components/Navigation";
import Profile from "@/app/(board)/boards/components/Profile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 flex h-[70px] w-screen items-center justify-between gap-4 border-b-1 border-b-[#DFDFDF] bg-white px-4 py-2">
      <Logo />
      <Navigation />
      <Profile />
    </header>
  );
};

export default Header;
