import { services } from "@/content/services";
import { BriefForm } from "./BriefForm";
import styles from "./Brief.module.css";

const EXAMPLES = [
  ...services.map((s) => s.problem),
  "Our app crashes on cheaper Android phones and reviews are falling.",
  "Customers drop off at the UPI step and we can't see why.",
];

/** The end of most pages: start a brief right here instead of clicking through to a form. */
export function Brief({ title = "What's tangled?" }: { title?: string }) {
  return (
    <section className={styles.brief} data-section="brief">
      <div className="container">
        <BriefForm title={title} examples={EXAMPLES} />
      </div>
    </section>
  );
}
