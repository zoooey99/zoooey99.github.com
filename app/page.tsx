import { Button } from "@/components/ui/button"

export default function Home(){
  return (
    <div>

      <div className="bg-hero bg-center h-screen bg-fixed">
        <div className="text-center absolute inset-x-1/2 inset-y-1/2 translate-x-1/2 translate-y-1/2">
          <h1 className="text-lg">Hi my name is Zoey Lee.</h1>
          <Button>linkedin</Button>
          <Button>email</Button>
          <Button>instagram</Button>
        </div>
      </div>

      <div>
        hello more text
      </div>

    </div>
    
  )}