import { forwardRef } from "react";
import classes from "./Transition.module.scss";

function Transition(props, ref) {
  const { TransitionDiv, TransitionText } = ref;
  return (
    <div
      ref={TransitionDiv}
      className={`d-flex justify-content-center align-items-center ${classes.TransitionDiv}`}
    >
      <h1 className={classes.Text} ref={TransitionText}>
        This isn&apos;t a ordinary <span>weather app</span>!
      </h1>
    </div>
  );
}

export default forwardRef(Transition);
