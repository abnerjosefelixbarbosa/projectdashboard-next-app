import Role from "./Role";

export default interface Responsible {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}
