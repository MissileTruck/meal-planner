"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  async function signIn() {
    await supabase.auth.signInWithOtp({ email });
    alert("Check your email for login link");
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Login</h1>
      <input
        className="border p-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="ml-2 bg-blue-500 text-white px-4 py-2" onClick={signIn}>
        Send Magic Link
      </button>
    </div>
  );
}
