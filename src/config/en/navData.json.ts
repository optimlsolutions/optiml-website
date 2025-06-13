/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
	{
		text: "Projects",
		link: "/optiml-website/projects/",
	},
	{
		text: "Services",
		link: "/optiml-website/services/",
	},
	{
		text: "Blog",
		link: "/optiml-website/blog/",
	},
	{
		text: "Resume",
		link: "/optiml-website/resume/",
	},
	// uncomment below to add a dropdown example
	// {
	// 	text: "Dropdown",
	// 	dropdown: [
	// 		{
	// 			text: "Elements",
	// 			link: "/elements/",
	// 		},
	// 		{
	// 			text: "Password Reset",
	// 			link: "/password-reset/",
	// 		},
	// 	],
	// },
];

export default navConfig;
