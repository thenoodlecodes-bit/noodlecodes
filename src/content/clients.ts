// Placeholder client names. Swap for real logos when ready.
export type LogoStyle = "serif" | "grot" | "wide" | "display" | "mono";
export type LogoMark = "dot" | "sq" | "ring" | "half" | "bar";

export type Client = { name: string; style: LogoStyle; mark?: LogoMark };

export const clients: Client[] = [
  { name: "Maison Verde", style: "serif" },
  { name: "Halcyon Health", style: "grot", mark: "dot" },
  { name: "Onyx Ridge", style: "wide" },
  { name: "EMBER&OAK", style: "display" },
  { name: "Aurelian", style: "serif" },
  { name: "Kestrel", style: "mono", mark: "sq" },
  { name: "Saffron Table", style: "wide" },
  { name: "Juniper Wealth", style: "serif" },
  { name: "Vela", style: "grot", mark: "ring" },
  { name: "MONARCH", style: "display" },
  { name: "Banyan Freight", style: "wide" },
  { name: "Sable+Stone", style: "mono" },
  { name: "Calder Labs", style: "serif" },
  { name: "ORRERY", style: "display" },
  { name: "Tidewell", style: "mono", mark: "half" },
  { name: "Rasa House", style: "serif" },
  { name: "noir/atelier", style: "grot" },
  { name: "Aster Clinic", style: "wide" },
  { name: "Linden & Rowe", style: "serif" },
  { name: "Verity", style: "grot", mark: "bar" },
  { name: "Pallas", style: "mono" },
  { name: "monsoon.", style: "grot" },
  { name: "Solenne", style: "wide" },
  { name: "Arbor & Vale", style: "serif" },
];
