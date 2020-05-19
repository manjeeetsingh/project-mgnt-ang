import { Role } from './Role';
import { Project } from './Project';

export class User {
  fname: string;
  lname: string;
  email: string;
  password: string;
  status: string;
  role: Role;
  projects: Project[];
}
