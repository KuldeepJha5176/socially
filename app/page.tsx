import ModeToggle from '@/components/ui/ModeToggle'
import {
  
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
   <div>
    <SignedOut>
              <SignInButton mode="modal"/>
              <SignUpButton />
             
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
   </div>
  );
}
