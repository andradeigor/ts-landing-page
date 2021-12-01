import api from "../api";

interface User {
  name: string;
  email: string;
  password: string;
}

const CreateUser = (data: User): Promise<User> => {
  console.log(data);
  const User = api
    .post("user", { ...data })
    .then(({ data }) => data)
    .catch((err) => console.log(err));

  return User;
};

export default CreateUser;
