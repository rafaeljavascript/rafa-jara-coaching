import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const NOTION_SECRET = process.env.NOTION_TOKEN;

const notion = new Client({
  auth: NOTION_SECRET,
});

// passing notion client to the option
export const n2m = new NotionToMarkdown({ notionClient: notion });
