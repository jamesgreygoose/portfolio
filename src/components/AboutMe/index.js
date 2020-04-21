/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
// import React from "react";
// import css from "./AboutMe.module.css";

// function AboutMe() {
//   return <div>About Me! </div>;
// }

// export default AboutMe;

import React from "react";
import css from "./AboutMe.module.css";

// var templateParams = {
//   name: "James",
//   notes: "Check this out!",
// };

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message_html: "",
      from_name: "",
      reply_to: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form className="test-mailing">
          <h1 id={css.letsTalk}>Let's talk! Feel free to send a message!</h1>
          <div>
            <textarea
              id="test-mailing"
              from_name="test-mailing"
              onChange={this.handleChange}
              placeholder="Add your comment here. Remember to include your
            name and email so I can get back to you!"
              required
              value={this.state.message_html}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input
            type="button"
            value="Submit"
            className="btn btn--submit"
            onClick={this.handleSubmit}
          />
        </form>
        <h2 id={css.socialMediaTitle}>
          You can find me on Social Media. Click on the links below to be
          redirected...
        </h2>
        <a
          href="https://twitter.com/JamesGreygoose"
          target="_blank"
          id={css.twitterButton}
        ></a>
        <a
          href="https://uk.linkedin.com/in/james-greygoose-b253b333"
          target="_blank"
          id={css.linkedInButton}
        ></a>
        {/* <div>{this.state.feedback}</div> */}
      </div>
    );
  }

  handleChange(event) {
    this.setState({ message_html: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "template_LCdSBdw2";

    // var template_params = {
    //   reply_to: "reply_to_value",
    //   from_name: "from_name_value",
    //   to_name: "to_name_value",
    //   message_html: "message_html_value",
    // };
    this.sendFeedback(templateId, {
      message_html: this.state.message_html,
      from_name: this.state.from_name,
      reply_to: this.state.reply_to,
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs.send("default_service", templateId, variables).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
}
