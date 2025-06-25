import Android from "@/components/magicui/android";

export function AndroidDemo() {
  return (
    <div className="relative w-[200px] h-[410px] flex items-center justify-center mx-auto">
         <Android
           className="size-full"
           videoSrc="assets/video/pro1.mp4"
         />
       </div>
  );
}
