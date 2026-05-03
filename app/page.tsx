import { redirect } from "next/navigation";

/** `/` は `/lp-a` と同じLPへ誘導 */
export default function Home() {
  redirect("/lp-a");
}
