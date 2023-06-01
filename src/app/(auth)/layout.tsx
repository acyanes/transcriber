import SupabaseContext from '../../../context/supabase-context';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='min-h-screen'>
      <SupabaseContext>{children}</SupabaseContext>
    </div>
  );
}
