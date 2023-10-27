import Markdown from "react-markdown";
import Image from "next/image";
import { n2m } from "@/notion";

export const dynamic = "force-dynamic";
export const revalidate = 600000;
async function getPageContent() {
  const mdblocks = await n2m.pageToMarkdown(
    "819da139-dca1-4e49-b8f4-30522ce8e97e",
  );
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

export default async function LeadershipCoaching() {
  const content = await getPageContent();
  return (
    <div className="prose md:prose-lg xl:prose-xl sm:mx-auto mx-8">
      <Markdown>{content}</Markdown>
    </div>
  );
}
