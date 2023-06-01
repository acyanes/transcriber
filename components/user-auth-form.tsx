'use client';

import * as Form from '@radix-ui/react-form';
import { useState } from 'react';

import type { Session } from '@supabase/auth-helpers-nextjs';
import { useSupabase } from '../context/supabase-context';

interface UserAuthFormProps {
  session: Session | null;
}

export function UserAuthForm({ session }: UserAuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { supabase } = useSupabase();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return session ? (
    <button onClick={handleSignOut}>sign out</button>
  ) : (
    <Form.Root>
      <Form.Field name='email'>
        <Form.Message className='FormMessage' match='valueMissing'>
          Please enter your email
        </Form.Message>
        <Form.Message className='FormMessage' match='typeMismatch'>
          Please provide a valid email
        </Form.Message>
        <Form.Control asChild>
          <input
            className='Input border rounded-sm'
            type='email'
            placeholder='name@example.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field name='password'>
        <Form.Control asChild>
          <input
            className='Input border rounded-sm'
            type='password'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button onClick={handleLogin}>Sign In</button>
      </Form.Submit>
    </Form.Root>
  );
}
