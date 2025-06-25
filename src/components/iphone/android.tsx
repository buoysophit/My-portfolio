import Android from "@/components/magicui/android";

export function AndroidDemo() {
  return (
    <div className="relative w-full max-w-xs aspect-[200/410] flex items-center justify-center mx-auto sm:max-w-sm md:max-w-md ml-11 mr-4">
      <Android
      className="w-full h-full"
      videoSrc="assets/video/pro1.mp4"
      />
    </div>
  );
}
