import { Button } from "@/components/ui/button";

import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Home() {

    return (
      <div className="m-4">
        <h1>
          home page content
        </h1>
      </div>
    )
}