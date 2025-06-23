import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/icon/logo.png"} width={80} height={80} alt="로고" />
    </Link>
  );
};

export default Logo;
