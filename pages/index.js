import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

export default function Home() {
  useEffect(() => {
    // Tell Farcaster the app is ready
    sdk.actions.ready();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hello Farcaster 👋</h1>
      <p>This is a minimal Mini App running inside Farcaster.</p>
    </div>
  );
}
