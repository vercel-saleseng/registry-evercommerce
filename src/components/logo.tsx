import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        height={32}
        width={120}
        src="https://9xunyj9nbtcqjdrd.public.blob.vercel-storage.com/evercommerce-logo-zR7uxFGhnPtYvJagtTDJP5bLUyFsQx"
        alt="Logo"
        className="px-2 py-4"
      />
    </div>
  );
}
