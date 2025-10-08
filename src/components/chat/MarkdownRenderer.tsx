import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { cn } from "@/lib/utils";

type Props = {
  content: string;
  className?: string;
  isUser?: boolean;
};

export const MarkdownRenderer = ({ content, className, isUser = false }: Props) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className={cn("prose prose-sm sm:prose-base max-w-none", className)}>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          code({ children, className, ...props }) {
            const language = className?.replace("language-", "") || "plaintext";
            const handleCopy = () => {
              navigator.clipboard.writeText(String(children));
              setCopied(true);
              setTimeout(() => setCopied(false), 800); // Reset after 1.5s
            };

            return (
              <div className="relative group my-4">
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 hidden group-hover:block text-xs text-muted-foreground border border-muted px-2 py-1 rounded bg-background hover:bg-muted transition"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <pre className="overflow-x-auto rounded-md bg-black/90 p-4 text-white text-sm">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
