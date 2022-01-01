import { ILoginState } from '../interface';
import { Action, ActionKind } from '../interface/enum';

export const initialLoginState: ILoginState = {
  isLoading: true,
  userName: undefined,
  userToken: undefined,
};
export const loginReducer = (
  prevState: ILoginState,
  action: Action<Pick<ILoginState, 'userName' | 'userToken'>>,
): ILoginState => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.RETRIEVE_TOKEN:
      return {
        ...prevState,
        userToken: payload?.userToken,
        isLoading: false,
      };
    case ActionKind.LOGIN:
      return {
        ...prevState,
        userName: payload?.userName,
        userToken: payload?.userToken,
        isLoading: false,
      };
    case ActionKind.LOGOUT:
      return {
        ...prevState,
        userName: undefined,
        userToken: undefined,
        isLoading: false,
      };
    case ActionKind.REGISTER:
      return {
        ...prevState,
        userName: payload?.userName,
        userToken: payload?.userToken,
        isLoading: false,
      };
  }
};
