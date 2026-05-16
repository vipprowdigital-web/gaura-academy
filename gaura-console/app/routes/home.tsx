import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gaura Academy Admin Console" },
    { name: "description", content: "Welcome to Gaura Academy!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9 w-full">
          <div className="w-full max-w-[400px] p-4 flex justify-center gap-5">
            <img
                src="/public/logo/GAURA.png"
              alt="Gaura"
              className="h-auto flex-1 w-auto"
            />
          </div>
        </header>

        <div className="flex flex-col items-center justify-center w-full">
          <Button
            onClick={() => navigate("/sign-in")}
            className="w-full max-w-sm bg-[#f7f7ee] text-[#791535] text-md hover:bg-white font-bold cursor-pointer"
          >
            Login to Console
          </Button>
        </div>
      </div>
    </main>
  );
}
