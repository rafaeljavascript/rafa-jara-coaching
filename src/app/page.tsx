import Markdown from "react-markdown";
import Image from "next/image";
import { n2m } from "@/notion";

export const dynamic = "force-dynamic";
export const revalidate = 600000;

async function getPageContent() {
  const header = await n2m.pageToMarkdown(
    "abb28db2-7f0e-40f6-82db-f0100ffc77fa"
  );
  const content = await n2m.pageToMarkdown(
    "15bc3073-93d2-4eb2-ba11-2b695c4b9e22"
  );
  const headerString = n2m.toMarkdownString(header);
  const contentString = n2m.toMarkdownString(content);
  return { header: headerString.parent, content: contentString.parent };
}

export default async function Home() {
  const { header, content } = await getPageContent();
  return (
    <div className="prose md:prose-lg xl:prose-xl sm-plus:mx-auto mx-8">
      <Image
        src="/images/headshot.png"
        alt="Rafa"
        className="mx-auto"
        width={250}
        height={250}
      />
      <Markdown>{header}</Markdown>
      <div className="flex w-full flex-col sm-plus:flex-row gap-4 items-center justify-start mt-4 mb-2 [&>*]:mx-auto [&>*]:my-2">
        <Image
          src="/Theory.png"
          alt="Theory"
          width={215}
          height={215}
          priority
        />
        <Image
          src="/Looker.png"
          alt="Looker"
          width={215}
          height={215}
          priority
        />
        <Image
          src="/Google.png"
          alt="Google"
          width={215}
          height={215}
          priority
        />
      </div>
      <div className="flex w-full flex-col sm-plus:flex-row gap-4 items-center justify-evenly my-2 [&>*]:my-4 sm-plus:[&>*]:my-12">
        <Image
          src="/Fivetran.png"
          alt="Fivetran"
          width={215}
          height={215}
          priority
        />

        <Image
          src="/Vector.png"
          alt="Vector"
          width={215}
          height={215}
          priority
        />
        <Image src="/Chord.png" alt="Chord" width={215} height={175} priority />
      </div>
      <div className="flex w-full flex-col sm-plus:flex-row gap-4 items-center justify-evenly my-2 [&>*]:my-0">
        <Image src="/Hex-bg.png" alt="Hex" width={215} height={175} priority />
        <Image
          src="/MonteCarlo-bg.png"
          alt="MonteCarlo"
          width={215}
          height={215}
          priority
        />
        <Image
          src="/Webgility.png"
          alt="Webgility"
          width={215}
          height={215}
          priority
        />
      </div>
      <div className="flex w-full flex-col sm-plus:flex-row gap-4 items-center justify-evenly my-2 [&>*]:my-4">
        <Image
          src="/BECI.png"
          alt="Berkeley Executive Coaching Institute"
          width={215}
          height={215}
          priority
        />
        <Image
          src="/Daydream-bg.png"
          alt="Daydream"
          width={215}
          height={215}
          priority
        />
        <Image
          src="/CCP.png"
          className="sm-plus:mr-10 mr-0"
          alt="Psychedelic Coaching Institute"
          width={130}
          height={130}
          priority
        />
      </div>
      <Markdown>{content}</Markdown>
    </div>
  );
}
