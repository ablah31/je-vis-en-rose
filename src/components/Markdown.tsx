import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div
      className={cn(
        "max-w-none space-y-4 text-base leading-relaxed text-foreground/90",
        "[&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-prune [&_h2]:mt-8",
        "[&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-prune [&_h3]:mt-6",
        "[&_a]:text-rose [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-prune",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6",
        "[&_blockquote]:border-l-4 [&_blockquote]:border-rose [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground",
        "[&_img]:rounded-xl",
        className,
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
