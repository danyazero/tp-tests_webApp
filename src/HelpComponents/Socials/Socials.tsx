
import React, {FC} from 'react';
import Social from "./Social/Social";
import st from "./Socials.module.css"
import inst from "./assets/instagram.svg"
import linkedin from "./assets/linkedin.svg"

const Socials: FC = () => {
    return (
        <div className={st.socialNetworks}>
            <Social caption={"Instagram"} href={"https://www.instagram.com/danya.zero/"} image={inst}/>
            <Social caption={"LinkedIn"} href={"https://www.linkedin.com/in/danyazero/"} image={linkedin}/>
        </div>
    )
};

export default Socials;