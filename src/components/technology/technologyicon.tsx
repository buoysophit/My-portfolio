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
  "express",
  "nextdotjs",
  "amazonaws",
  "googlecloud",
  "azuredevops",
  "nginx",
  "vercel",
  "testinglibrary",
  "git",
  "github",
  "vscode",
  "tailwind",
  "androidstudio",
  "laravel",
  "tailwindcss",
  "linux",
  "lua",

];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
