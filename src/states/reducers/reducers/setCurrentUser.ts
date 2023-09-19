import { setCurrentUserAction } from "@/states/actions/setCurrentUser";
import { User } from "@/interface/Auth";

interface UserState {
    currentUser: User,
}

const initialState: UserState = {
    currentUser: {id: 0, username: '', qq: '', email: '', photo: '', birthday: '', password: '', gender: 0},
}

const setCurrentUserReducer = (state = initialState, action: setCurrentUserAction): UserState => {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        let user: User = action.payload.usr;
        user.password = action.payload.psw;
        console.log("user: ", user);
        return { ...state, currentUser: user };
      default:
        return state;
    }
};
  

export default setCurrentUserReducer;