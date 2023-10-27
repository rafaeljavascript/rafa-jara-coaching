import Markdown from "react-markdown";
import Image from "next/image";
import { n2m } from "@/notion";

export const dynamic = "force-dynamic";
export const revalidate = 600000;

async function getPageContent() {
  const mdblocks = await n2m.pageToMarkdown(
    "324472e6-8453-4e12-a73a-028fe042db4f",
  );
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

export default async function CareerCoaching() {
  const content = await getPageContent();
  return (
    <div className="prose md:prose-lg xl:prose-xl sm:mx-auto mx-8 [&>*:nth-child(2)]:-mt-6">
      <Markdown>{content}</Markdown>
    </div>
  );
}
