import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "OptiML",
	// Your website's title and description (meta fields)
	title:
		"OptiML",
	description:
		"Your partner for intelligent optimization and machine learning solutions.",

	// Your information for blog post purposes
	author: {
		name: "OptiML Solutions",
		email: "info@optimlsolutions.com",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.png",
		alt: "OptiML Solutions",
	},
};

export default siteData;
