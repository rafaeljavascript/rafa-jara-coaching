import Markdown from "react-markdown";
import Image from "next/image";
import { n2m } from "@/notion";

export const dynamic = "force-dynamic";
export const revalidate = 600000;

async function getPageContent() {
  const mdblocks = await n2m.pageToMarkdown(
    "5f8227a1-24af-41d1-b22e-94375237ee7a",
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
