import * as React from "react"

const seoData = {
  "title": "Vedika Soni",
  "description": "Vedika Soni is an experienced Full Stack Developer in creating robust and scalable web applications using the MERN stack.",
  "author": "Vedika Soni",
  "siteUrl": "https://moivedi.com",
}

const Seo = () => (
  <>
    <title>{seoData.title}</title>
    <meta name="description" content={seoData.description} />
    <meta property="og:title" content={seoData.title} />
    <meta property="og:description" content={seoData.description} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content={seoData.author} />
    <meta name="twitter:title" content={seoData.title} />
    <meta name="twitter:description" content={seoData.description} />
  </>
)

export default Seo
