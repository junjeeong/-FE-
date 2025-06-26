import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative h-[80px] w-[80px]">
      <Image
        src={"/icon/logo.png"}
        fill
        className="object-contain"
        sizes="80px"
        alt="로고"
        priority
      />
    </Link>
  );
};

export default Logo;
