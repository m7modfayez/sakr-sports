// import { redirect } from "next/navigation";
// import { supabaseServer, getUserAppId, APP_ID } from "@/lib/supabase-server";

// /**
//  * Server component to protect routes
//  * Checks if user is authenticated and belongs to the correct app
//  */
// export default async function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   // Get current user
//   const { data: { user } } = await supabaseServer.auth.getUser();
  
//   // If not authenticated, redirect to login
//   if (!user) {
//     redirect("/login");
//     return null;
//   }

//   // Check if user belongs to this app
//   const userAppId = await getUserAppId(user.id);
//   if (userAppId !== APP_ID) {
//     // User is authenticated but doesn't belong to this app
//     // You could redirect to an error page or show unauthorized message
//     redirect("/login?error=unauthorized");
//     return null;
//   }

//   // User is authenticated and authorized
//   return <>{children}</>;
// }
