// Class based Components

import React from "react";

class Info extends React.Component {
  render() {
    const title = "This is the title of Applicaton";
    const showTitle = true;

    if (showTitle) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff</p>
        </div>
      );
    } else {
      return <p>empty</p>;
    }
  }
}

// Function based Components

// export function Info() {
// 	const title = "This is the title of Applicaton";
// 	const showTitle = true;

// 	return (
// 		<div>
// 			<h1>{title ? showTitle : ""}</h1>
// 			<p>Manage your stuff.</p>
// 		</div>
// 	);
// }

export default Info;
