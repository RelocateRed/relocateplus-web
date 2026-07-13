import Image from "next/image";

interface AppFrameProps {
  src: string;
  alt: string;
}

export default function AppFrame({
  src,
  alt,
}: AppFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="overflow-hidden rounded-[44px] border-[10px] border-[#0b1220] bg-black shadow-[0_40px_120px_rgba(2,8,23,.25)]">
        <Image
          src={src}
          alt={alt}
          width={390}
          height={844}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}