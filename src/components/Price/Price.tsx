import { Suspense, type ReactNode } from "react";
import { amount, priceGroups, type Currency, type PriceItem } from "@/content/pricing";
import { getCurrency } from "@/lib/locale";
import { money } from "@/lib/money";
import { CurrencySwitch } from "./CurrencySwitch";
import { PriceBoard } from "./PriceBoard";
import styles from "./price.module.css";

/** Renders children with the visitor's currency. The page shell stays static; only this part reads the request. */
function WithCurrency({ children, fallback }: { children: (currency: Currency) => ReactNode; fallback: ReactNode }) {
  return (
    <Suspense fallback={fallback}>
      <Resolve>{children}</Resolve>
    </Suspense>
  );
}

async function Resolve({ children }: { children: (currency: Currency) => ReactNode }) {
  return children(await getCurrency());
}

const label = (item: PriceItem, currency: Currency) => `${money(amount(item, currency), currency)}${item.per ? ` ${item.per}` : ""}`;

/** "From ₹40,000" in rupees for India, "From $400" elsewhere. The fallback holds the space while it loads. */
export function From({ item, className }: { item: PriceItem; className?: string }) {
  return (
    <WithCurrency
      fallback={
        <span className={`${className ?? ""} ${styles.wait}`} aria-hidden="true">
          From {label(item, "USD")}
        </span>
      }
    >
      {(currency) => <span className={className}>From {label(item, currency)}</span>}
    </WithCurrency>
  );
}

/** The pricing list with the estimate builder, in the visitor's currency, plus the switch to change it. */
export function LocalPriceBoard({ whatsapp }: { whatsapp: string }) {
  return (
    <WithCurrency fallback={<PriceBoard groups={priceGroups} currency="USD" whatsapp={whatsapp} pending />}>
      {(currency) => (
        <>
          <p className={styles.currencyLine}>
            {currency === "INR" ? "Prices in Indian rupees." : "Prices in US dollars."} <CurrencySwitch current={currency} />
          </p>
          <PriceBoard groups={priceGroups} currency={currency} whatsapp={whatsapp} />
        </>
      )}
    </WithCurrency>
  );
}

/** Any client component that needs the visitor's currency, such as the contact form's budget ranges. */
export function Localised({ children, fallback }: { children: (currency: Currency) => ReactNode; fallback: ReactNode }) {
  return <WithCurrency fallback={fallback}>{children}</WithCurrency>;
}
