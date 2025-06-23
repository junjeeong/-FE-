import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex">
      <Image src={"/logo/logo.png"} width={50} height={30} alt="로고" />
      <Image src={"/logo/string.png"} width={120} height={10} alt="로고" />
    </Link>
  );
};

export default Logo;
