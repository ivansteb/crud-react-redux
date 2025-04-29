import { Button, Card, TextInput, Title } from "@tremor/react";

export function CreateNewUser() {
  return (
    <Card className="mt-4">
      <Title>Create New User</Title>

      <form action="" className="">
        <TextInput placeholder="Enter your name" />
        <TextInput placeholder="Enter your e-mail" />
        <TextInput placeholder="Enter your GitHub username" />

        <div>
          <Button
            type="submit"
            className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Create User
          </Button>
        </div>
      </form>
    </Card>
  );
}
