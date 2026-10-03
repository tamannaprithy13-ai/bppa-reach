import { Outlet } from "@tanstack/react-router";
import { ReadingGuide } from "./accessibility-menu";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
export function SiteShell() { return <><a href="#main-content" className="skip-link">Skip to main content</a><SiteHeader/><main id="main-content" tabIndex={-1}><Outlet/></main><SiteFooter/><ReadingGuide/></>; }
