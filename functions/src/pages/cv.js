import {About, Contact, Experience, Hero, Tech} from "../components/cv";
import {StarsCanvas} from "../components";

import {PageWrapper}from "../hoc";

const CV = () => {
    return (
        <>
            <About/>
            <Experience/>
            <Tech/>
            {/*<Works />*/}
            {/*<Feedbacks />*/}
            <div className='relative z-0'>
                <Contact/>
                <StarsCanvas/>
            </div>
        </>
    );
}

export default PageWrapper({fallback_title: 'CV', Child: CV, Hero: Hero});

