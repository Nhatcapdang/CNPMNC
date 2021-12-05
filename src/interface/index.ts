export interface ILoginState {
  readonly isLoading: boolean;
  readonly userName?: string | null;
  readonly userToken?: string | null;
}
