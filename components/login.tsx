import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { UserAuthForm } from './user-auth-form';

import type { Database } from '@/lib/database.types';

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <UserAuthForm session={session} />;
}
