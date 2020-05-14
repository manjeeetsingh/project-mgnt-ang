import { AuthFunction } from './AuthFunction';

export class Role {
  name: string;
  roleType: string;
  authFunctions: AuthFunction[];
}
