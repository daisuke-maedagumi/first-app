export const SIGN_IN = "SIGN_IN"
export const signInAction = (MemberState) => {
  return {
    type: "SIGN_IN",
    paylord: {
      isSignedIn: true,
      memberName: MemberState.memberName
    }
  }
}