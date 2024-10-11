
function Footer() {

    return (
        <>
            <div className="FooterWrap">
                <div className="Footer">

                    <div className="FooterTop">
                        <p><b>BuildBridge</b></p>

                        <button> <b>Get Involved</b>  </button>
                    </div>

                    <hr />

                    <div className="FooterBottom">

                        <div className="Address">
                            <h6> Address </h6>
                            <p> Federal University of Agriculture, Abeokuta, Ogun state. </p>
                        </div>

                        <div className=" Links">
                            <h6> Links </h6>
                            <p> <a href="">Home</a> </p>
                            <p> <a href="">About Us</a> </p>
                            <p> <a href="">Services</a> </p>
                            <p> <a href="">Contact Us</a> </p>

                        </div>

                        <div className="ContactDetails">

                            <h6> Contact Us </h6>
                            <p> 0907226098 </p>
                            <p> Buildbridge@gmail.com </p>

                        </div>

                        <div className="SocialMedia">
                            <img src="./images/instagram.png" alt="" />
                            <img src="./images/facebook.png" alt="" />
                            <img src="./images/youTube.png" alt="" />
                        </div>

                    </div>

                    <div className="Copyright">
                        <p>  &copy; 2024 - copyright </p>
                       <a href="Navbar.jsxgit "> <img src="./images/scroll.png" alt="" /></a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer