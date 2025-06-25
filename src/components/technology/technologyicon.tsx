import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "googlecloud",
  "nginx",
  "vercel",
  "git",
  "github",
  "vscode",
  "tailwind",
  "laravel",
  "tailwindcss",
  "lua",
  "python",
  "php",
  "ruby",
  "csharp",
  "openai",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex w-full max-w-full items-center justify-center overflow-hidden py-4">
      <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[800px]">
        <IconCloud
          images={images}
     // adjust as needed
        />
      </div>
    </div>
  );
}
