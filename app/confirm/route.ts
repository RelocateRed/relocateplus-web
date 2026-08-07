// app/confirm/route.ts
// Handles token_hash links from the confirm-signup and change-email templates.
//
// This is a server Route Handler, not a page. The token is only consumed when
// verifyOtp runs, so an email scanner that prefetches this URL does consume it —
// unlike the password reset flow, that's acceptable here: confirming an email is
// idempotent from the user's perspective (they end up confirmed either way).

import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  const token_hash = searchParams.get('token_hash');
  const type = searchParams.get('type') as 'email' | 'email_change' | null;

  if (!token_hash || !type) {
    return NextResponse.redirect(`${origin}/confirm-error?reason=missing`);
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );

  const { error } = await supabase.auth.verifyOtp({ token_hash, type });

  if (error) {
    return NextResponse.redirect(
      `${origin}/confirm-error?reason=${encodeURIComponent(error.message)}`
    );
  }

  return NextResponse.redirect(`${origin}/confirmed?type=${type}`);
}