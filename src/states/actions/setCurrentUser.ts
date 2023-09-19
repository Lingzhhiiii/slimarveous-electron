import { User } from "@/interface/Auth";

export const setCurrentUser = (usr: User, psw: string) => ({
    type: 'SET_CURRENT_USER',
    payload: {usr, psw},
});

export type setCurrentUserAction = ReturnType<typeof setCurrentUser>;