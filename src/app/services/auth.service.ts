import { Injectable } from '@angular/core';
import { AuthResponse, createClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  supabase = createClient(
    'https://bizdpqtvineizdbyllya.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpemRwcXR2aW5laXpkYnlsbHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxNzU5NjksImV4cCI6MjA1MDc1MTk2OX0.a-ZqXZqcuZGDaupf9LJjnOP2p7ajuEZXjcluIzTI690',
  );

  register(
    email: string,
    username: string,
    password: string,
  ): Observable<AuthResponse> {
    const promise = this.supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });
    return from(promise);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const promise = this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    return from(promise);
  }

  logout(): void {
    this.supabase.auth.signOut();
  }

  isLoggedIn(): boolean {
    const tokenString = localStorage.getItem(
      'sb-bizdpqtvineizdbyllya-auth-token',
    );
    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.access_token;
      return true;
    }
    return false;
  }
}
