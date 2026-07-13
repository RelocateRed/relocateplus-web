import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
}

export default function BrowserFrame({
  src,
  alt,
}: BrowserFrameProps) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_40px_120px_rgba(15,23,42,.12)]">
      <div className="flex items-center gap-2 border-b border-neutral-200 px-6 py-4">
        <div className="h-3 w-3 rounded-full bg-red-300" />
        <div className="h-3 w-3 rounded-full bg-yellow-300" />
        <div className="h-3 w-3 rounded-full bg-green-300" />
      </div>

      <Image
        src={src}
        alt={alt}
        width={1290}
        height={2796}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}