import type { Metadata } from "next";
import SegmentPage from "@/components/SegmentPage";
import { segments } from "@/lib/data";

const segment = segments.find((s) => s.id === "gcc")!;

export const metadata: Metadata = {
  title: "GCC Organizations | The Bridge Consulting and Advisory Limited",
  description: segment.summary,
};

export default function Page() {
  return <SegmentPage segment={segment} />;
}
