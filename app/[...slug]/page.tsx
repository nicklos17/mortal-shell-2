export const dynamic = 'force-static';
import { notFound } from "next/navigation";

export default function CatchAllPage() {
  notFound();
}
