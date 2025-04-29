import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateNewUser() {
  const { addUser } = useUserActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    addUser({ name, email, github });
  };

  return (
    <div className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-xl text-white">
        <Title>Create New User</Title>

        <form onSubmit={handleSubmit} className="">
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
          </div>
        </form>
      </Card>
    </div>
  );
}
