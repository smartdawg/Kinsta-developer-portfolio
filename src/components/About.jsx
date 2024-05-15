import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        Paragraph 1
                    </p>
                    <p>Paragraph 2</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Niagara Falls from Canadian side." />
                </div>
            </div>
        </div>

    )
}

export default About;
