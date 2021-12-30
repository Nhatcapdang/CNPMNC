export interface ILoginState {
  readonly isLoading: boolean;
  readonly userName?: string | null;
  readonly userToken?: string | null;
}
export interface IUsers {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly userToken: string;
}
