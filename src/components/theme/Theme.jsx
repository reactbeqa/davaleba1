import { useState } from "react";
import "./divs.css";

function Theme(props) {
  const styles = {};
  function onclick(event) {
    styles.backgroundColor = "red";
  }
  return (
    <div className="theme">
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>
      <div className={props.styles} id="colorDiv">colorized div</div>
    </div>
  );
}

export default Theme;
