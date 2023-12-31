import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import { RedirectType, redirect } from 'next/navigation';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { CreateAccountForm } from "@/components/auth/Create-account";

export default async function Home() {
  let loggedIn = false;

  try {
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    if (session) {
      loggedIn = true;
    }
  } catch (error) {
    console.error('Home', error);
  } finally {
    if (loggedIn) {
      redirect("/user-app", RedirectType.replace)
    }
  }

  return (
    <div className="flex  flex-col h-screen w-full justify-center items-center bg-blue-300">
      <Tabs defaultValue="create-Account" className="w-[400px] border rounded-md pb-4 shadow-2xl ">
          <TabsList className="flex justify-around items-center rounded-b-none h-14">
              <TabsTrigger value="create-Account" className="trasition-all delay-150">Account</TabsTrigger>
              <TabsTrigger value="password" className="trasition-all delay-150" >Login</TabsTrigger>
          </TabsList>

          <TabsContent value="create-Account">
              <CreateAccountForm/>
          </TabsContent>
          <TabsContent value="login">

          </TabsContent>
      </Tabs>
    </div>
  );
}
