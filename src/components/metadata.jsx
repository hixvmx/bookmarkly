import Head from "next/head";

export default function metaData() {
    const xtitle       = 'Bookmarkly - Empowering Readers with Effortless Bookmark Management';
    const xdescription = 'Bookmarkly is a user-friendly website designed to revolutionize your bookmarking experience. Say goodbye to disorganized browser bookmarks and hello to seamless reading journeys. With Bookmarkly, you can effortlessly manage and access your favorite online content with a single click. Discover an intuitive interface, personalized recommendations, and smart organization features that make bookmarking a breeze. Start exploring your digital library today with Bookmarkly!';
    const xkeywords    = 'Bookmark management, Online reading tool, Easy bookmark organization, Effortless reading journeys, Personalized recommendations, Browser bookmarks, Digital library, User-friendly interface, Smart bookmarking, Seamless access to content';
    const xurl         = 'https://bookmarkly.vercel.app/';
    const xscreenshot  = xurl + '/screenshot.jpg';

    return (
        <Head>
            <title>{xtitle}</title>
            <meta name="description" content={xdescription} />
            <meta name="keywords" content={xkeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href='/fav-icon.ico' />
            {/* Open Graph / Facebook */}
            <meta property="og:type"        content="website" />
            <meta property="og:url"         content={xurl} />
            <meta property="og:title"       content={xtitle} />
            <meta property="og:description" content={xdescription} />
            <meta property="og:image"       content={xscreenshot} />
            {/* Twitter */}
            <meta property="twitter:card"        content="summary_large_image" />
            <meta property="twitter:url"         content={xurl} />
            <meta property="twitter:title"       content={xtitle} />
            <meta property="twitter:description" content={xdescription} />
            <meta property="twitter:image"       content={xscreenshot} />
            <meta property="twitter:creator"     content="@hixvmx" />
        </Head>
    )
}