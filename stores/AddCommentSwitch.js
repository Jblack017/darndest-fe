export default function AddCommentSwitch(state = false, action) {
  switch (action.type) {
    case "IS_ADD_COMMENT_OPEN":
      return action.payload;
    default:
      return state;
  }
}
