import { GrUpdate } from "react-icons/gr";
import FourOhFour from "../../Components/FourOhFour";

export default class App {
  context: any;

  constructor(context) {
    this.context = context;
  }

  getActions = () => {
    return new Promise((resolve) => {
      resolve([
        {
          key: "user",
          label: "User",
          component: FourOhFour,
          icon: GrUpdate,
        },
      ]);
    });
  };
}
