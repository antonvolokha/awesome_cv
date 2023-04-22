import Head from "next/head";
import {Navbar, Footer} from "../components";

const Empty = () => {
    return (<></>);
}

const PageWrapper = ({title, Child, Hero}) => function HOC() {
    if (!Hero) {
        Hero = Empty;
    }

    return (
        <div>
            <Head>
                <title>Anton Volokha | {title}</title>
                <meta name="description" content="Anton Volokha personal website"/>
            </Head>

            <main>
                <div className='relative z-0 bg-primary'>
                    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                        <Navbar/>
                        <Hero/>
                    </div>
                    <Child/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default PageWrapper;