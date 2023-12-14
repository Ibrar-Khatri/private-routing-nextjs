"use client";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const cookieName = "loggedIn";

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn, "isLoggedIn");
  useEffect(() => {
    setIsLoggedIn(!!Cookies.get(cookieName));
  }, []);

  const handleLogin = () => {
    Cookies.set(cookieName, true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove(cookieName);
  };

  return (
    <html lang="en">
      <body id="main-layout" suppressHydrationWarning>
        <div className="main-header">
          <h2>Private Routing</h2>
          {isLoggedIn ? (
            <div>
              <button onClick={handleLogout}>logout</button>
              <Link href="/dashboard">Go to Dashboard</Link>
            </div>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
        {children}
      </body>
    </html>
  );
}
