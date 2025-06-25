import Iphone15Pro from "@/components/magicui/iphone-15-pro";

export function Iphone15ProDemo() {
  return (
    <div className="relative w-[200px] h-[410px] flex items-center justify-center mx-auto">
      <Iphone15Pro
        className="size-full"
        videoSrc="assets/video/pro1.mp4"
      />
    </div>
  );
}