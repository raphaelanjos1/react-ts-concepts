import { useState } from "react";

export default function GroupState() {
  // Avoid:
  // const [userName, setUserName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [age, setAge] = useState<number>(0);

  // Instead, do:
  type User = {
    userName: string;
    email: string;
    age: 0;
  };
  const [user, setUser] = useState<User>({
    userName: "",
    email: "",
    age: 0,
  });

  // Spread is needed to avoid re-rendering the entire object
  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(handleUserChange);

  // Easier to send
  fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}
