import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Title" },
    { name: "description", content: "Home Description" },
  ];
}

export default function Home() {
  return <></>;
}
