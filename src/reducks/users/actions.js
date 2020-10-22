export const SIGN_IN = "SIGN_IN"
export const signInAction = (uemberState) => {
  return {
    type: "SIGN_IN",
    paylord: {
      isSignedIn: true,
      uid: uemberState.uid,
      userName: uemberState.userName
    }
  }
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    paylord: {
      isSignedIn: false,
      uid: "",
      userName: ""
    }
  }
}


