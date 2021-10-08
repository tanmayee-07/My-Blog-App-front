import React from 'react'

const Home=()=>{
    return(
        <div className="mb-20 bg-red-100">
            <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">Hello, Welcome to my Blog!</h1>
            <p className="mx-auto leading-relaxed text-base mb-4">A blog is a regularly updated website or web page, and can either be used for personal use or to fulfill a business need.
            If a personal blog is successful enough, the writer can also make money off of it via sponsorships or advertisements.
            </p>
            <p className="mx-auto leading-relaxed text-base mb-4">A blog post is an individual web page on your website that dives into a particular sub-topic of your blog.
            Blog posts allow you to rank on search engines for a variety of keywords.
            They link back to your overall blog site.
            </p>
            <p className="mx-auto leading-relaxed text-base mb-4">A blog is used for the following reasons:
            <ul>
                <li>To help your personal brand rank on search engines.</li>
                <li>To share information about a given topic and become an expert in an industry.</li>
                <li>To attract visitors to your site, and turn those visitors into leads.</li>
                <li>To cultivate an online community and engage with an audience.</li>
            </ul>
            </p>
        </div>
    );
};

export default Home;