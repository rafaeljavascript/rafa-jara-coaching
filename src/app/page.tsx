import Markdown from "react-markdown";
import Image from "next/image";
import { n2m } from "@/notion";

export const dynamic = "force-dynamic";
export const revalidate = 600000;

async function getPageContent() {
  const mdblocks = await n2m.pageToMarkdown(
    "205fe48b-d962-40c0-803c-147ca26db851",
    // "53eb3bd5-2e9a-45b3-bfef-88a11f005b09",
  );
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

export default async function Home() {
  const content = await getPageContent();
  return (
    <div className="prose md:prose-lg xl:prose-xl sm:mx-auto mx-8">
      <Image
        src="/images/headshot.jpeg"
        alt="Rafa"
        className="mx-auto"
        width={250}
        height={250}
      />
      <Markdown>{content}</Markdown>
    </div>
  );
}
