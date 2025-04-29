import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateNewUser() {
  const { addUser } = useUserActions();
  const [result, setResult] = useState<"ok" | "ko" | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    if (!name || !email || !github) {
      return setResult("ko");
    }

    addUser({ name, email, github });
    setResult("ok");
    // Resetear el formulario
    form.reset();
  };

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-xl text-white">
        <Title>Create New User</Title>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput name="name" placeholder="Enter your name" />
          <TextInput name="email" placeholder="Enter your e-mail" />
          <TextInput name="github" placeholder="Enter your GitHub username" />

          <div>
            <Button
              type="submit"
              className="mt-6 bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded border-none"
            >
              Create user
            </Button>

            {result === "ok" && (
              <span className="text-green-700 ml-4">
                <Badge color="green">Usuario creado correctamente.</Badge>
              </span>
            )}
            {result === "ko" && (
              <span className="text-red-700 ml-4">
                <Badge color="red">Error al crear el usuario.</Badge>
              </span>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
