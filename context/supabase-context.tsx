'use client';

import { Database } from '@/lib/database.types';
import {
  SupabaseClient,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect } from 'react';

type SupabaseContext = {
  supabase: SupabaseClient;
};

interface SupabaseContextProps {
  children: React.ReactNode;
}

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseContext({ children }: SupabaseContextProps) {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);
  return (
    <Context.Provider value={{ supabase }}>
      <>{children} </>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useSupabase must be used inside of SupabaseProvider');
  }

  return context;
};
