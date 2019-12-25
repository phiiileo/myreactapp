import React from "react";
class Footer extends React.Component {

    render () {
        return (
            <footer>
               <section className="footer">
                <div className="footer_content1">
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://github.com/phiiileo">Github</a>
                <a href="https://twitter.com">Twitter</a>
                </div>
                <div className="footer_content2">
                    <p>Phone Number: <span>(234)-8012345678</span></p>
                    <p>Email Address: <span>example@gmail.com</span></p>
                </div>
               </section>
            </footer>
        )
    }
}

export default Footer;