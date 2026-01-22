import { redirect } from "next/navigation";
import { getSupabaseServer, getUserAppId } from "@/lib/supabase-server";
import { APP_ID } from "@/lib/app-config";

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = getSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const userAppId = await getUserAppId(user.id);
  if (userAppId !== APP_ID) {
    redirect("/login?error=unauthorized");
  }

  return <>{children}</>;
}
