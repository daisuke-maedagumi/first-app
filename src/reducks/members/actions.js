export const SIGN_IN = "SIGN_IN"
export const signInAction = (MemberState) => {
  return {
    type: "SIGN_IN",
    paylord: {
      isSignedIn: true,
      uid: MemberState.uid,
      memberName: MemberState.memberName
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
      memberName: ""
    }
  }
}


