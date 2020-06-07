import React from "react";
import css from "./AboutMe.module.css";
import JamesPic from "../../images/helloPageJames.png";
import Twitter from "../../images/twitter icon.png";
import GitHub from "../../images/github icon.png";
import LinkedIn from "../../images/linked in.png";

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
      <>
        <div id={css.contentWrap}>
          <img id={css.jamesPic} src={JamesPic} alt={"Hello, I'm James"}></img>
          <h1 id={css.hello}>A Little About Me...</h1>
          <p id={css.aboutMeBlurb}>
            My name is James and a little while ago, I took a great big leap
            into the unknown. I quit my career as a teacher and applied to take
            part in the{" "}
            <a href={"https://www.schoolofcode.co.uk/"}>School of Code</a>. I
            was selected from approximately 1500 applicants to complete an
            intensive 16 week course, learning everything from HTML and CSS to
            AWS and WebSockets! After a lot of hard work and learning, I'm not
            ready to put some of that into action (and hopefully learn a lot
            more!).
          </p>
          <div id={css.contactForm}>
            <form className="test-mailing">
              <h1 id={css.letsTalk}>
                Let's talk! Feel free to send a message!
              </h1>
              <div>
                <textarea
                  id="test-mailing"
                  from_name="test-mailing"
                  onChange={this.handleChange}
                  placeholder="&#10;
              &#10;
              &#10;Add your comment here. Remember to include your
            name and email so I can get back to you!"
                  required
                  value={this.state.message_html}
                  style={{ width: "90vw", height: "20vh" }}
                />
              </div>
              <input
                type="button"
                value="Submit"
                className={css.submitButton}
                onClick={this.handleSubmit}
              />
            </form>
          </div>
        </div>
        <footer id={css.footer}>
          <div>© James Greygoose</div>

          <div id={css.socialIconsDiv}>
            <a href="https://github.com/jamesgreygoose" target="blank">
              <img
                className={css.socialImages}
                src={GitHub}
                alt="find me on GitHub"
                href="https://github.com/jamesgreygoose"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/jamesgreygoose/"
              target="blank"
            >
              <img
                className={css.socialImages}
                src={LinkedIn}
                alt="find me on Linked In"
              ></img>
            </a>
            <a href="https://twitter.com/jamesgreygoose" target="blank">
              <img
                className={css.socialImages}
                src={Twitter}
                alt="find me on Twitter"
              ></img>
            </a>
          </div>
        </footer>
      </>
    );
  }

  handleChange(event) {
    this.setState({ message_html: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "template_LCdSBdw2";

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
