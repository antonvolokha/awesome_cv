import Head from "next/head";
import {Navbar, Footer} from "../components";

const Empty = () => {
    return (<></>);
}

const PageWrapper = ({fallback_title, Child, Hero}) => function HOC({data, title}) {
    if (!Hero) {
        Hero = Empty;
    }

    return (
        <div>
            <Head>
                <title>{title ?? fallback_title} //Anton Volokha</title>
                <meta name="description" content="Anton Volokha personal website"/>
            </Head>

            <main>
                <div className='relative z-0 bg-primary'>
                    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                        <Navbar/>
                        <Hero/>
                    </div>
                    <Child data={data}/>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default PageWrapper;