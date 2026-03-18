"use client";
import * as React from "react";

export default function InviteLogger({ inviteUrl }: { inviteUrl: string }) {
  React.useEffect(() => {
    if (inviteUrl) {
      // Updated console log for LaunchPilot
      // (useful for devs or helpers)
      // eslint-disable-next-line no-console
      console.log(
        `%c[LaunchPilot Invite Link]%c You can share this invitation:\n\n${inviteUrl}\n`,
        "color: #0070f3; font-weight: bold;",
        "color:inherit;font-weight:normal;"
      );
    }
  }, [inviteUrl]);

  return null;
}