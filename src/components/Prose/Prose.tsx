import type { Block } from "@/content/types";
import styles from "./Prose.module.css";

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Renders article blocks. h2 blocks get ids so the table of contents can link to them. */
export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className={styles.prose}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} id={slugify(block.text)}>
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <p>{block.text}</p>
              </blockquote>
            );
          case "callout":
            return (
              <aside key={i} className={styles.callout}>
                <strong>{block.title}</strong>
                <p>{block.text}</p>
              </aside>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}
