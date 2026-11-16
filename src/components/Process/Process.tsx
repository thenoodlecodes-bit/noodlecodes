import { Pictogram, type PictogramName } from "@/components/Pictogram/Pictogram";
import styles from "./Process.module.css";

const steps: { icon: PictogramName; title: string; text: string; time: string }[] = [
  { icon: "understand", title: "Understand", text: "We talk to your team, read your systems and agree what matters.", time: "Week 1 to 2" },
  { icon: "plan", title: "Plan", text: "A written plan with the team, the timeline and a fixed price.", time: "Week 2" },
  { icon: "build", title: "Build", text: "A small senior team ships working software every Friday.", time: "Week 3 onwards" },
  { icon: "grow", title: "Grow", text: "We launch, measure what changed and keep improving, or hand over.", time: "After launch" },
];

const promises = ["You own all the code and data", "Senior people only, no juniors learning on you", "Fixed fees, never a cut of your ad spend"];

/** How an engagement runs, in four steps anyone can follow. */
export function Process() {
  return (
    <>
      <ol className={styles.steps}>
        {steps.map((s, i) => (
          <li key={s.title} className={styles.step}>
            <span className={styles.top}>
              <span className={styles.no}>{i + 1}</span>
              <span className={styles.time}>{s.time}</span>
            </span>
            <Pictogram name={s.icon} size={44} className={styles.picto} />
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
      <ul className={styles.promises}>
        {promises.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  );
}
