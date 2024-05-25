import { act } from "../Action/contact_action";
import { contactinterface } from "../Component/contactinterface";
interface AppState {
  data: contactinterface[];
}

const in_state: AppState = {
  data: [],
};
export const contact_reducer = (state = in_state, action: act): AppState => {
  switch (action.type) {
    case "create_contact":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;

    case "update_contact":
      return {
        ...state,
        data: state.data.map((ele) => {
          if (ele.id == action.payload.id) {
            return action.payload;
          } else return ele;
        }),
      };
    case "delete_contact":
      return {
        ...state,
        data: state.data.filter((ele) => {
          if (ele.id != action.payload.id) {
            return ele;
          }
        }),
      };
  }
};
