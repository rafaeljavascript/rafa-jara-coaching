import Markdown from "react-markdown";
import Image from "next/image";
import { n2m } from "@/notion";

export const dynamic = "force-dynamic";
export const revalidate = 600000;

async function getPageContent() {
  const mdblocks = await n2m.pageToMarkdown(
    "b5f9a2d9-2ee8-42d7-b726-637cf92003b6",
  );
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

export default async function Home() {
  const content = await getPageContent();
  return (
    <div className="prose md:prose-lg xl:prose-xl sm:mx-auto mx-8">
      <Markdown>{content}</Markdown>
    </div>
  );
}
