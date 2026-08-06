import { useState } from "react";

function Navbar() {
    const [activeLink, setActiveLink] = useState("careers");
    const [mobileOpen, setMobileOpen] = useState(false);

    const links = [
        { id: "careers", label: "Careers", href: "#careers" },
        { id: "roadmaps", label: "Roadmaps", href: "#roadmaps" },
        { id: "courses", label: "Courses", href: "#courses" },
    ];

    return (
        <header className="site-header">
            <div className="brand-block">
                <div className="brand">
                    <span className="site-title">SkillPath AI</span>
                    <span className="site-tag">Your Personalized Learning Companion</span>
                </div>

                <button
                    type="button"
                    className="mobile-menu-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`top-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`nav-link ${activeLink === link.id ? "is-active" : ""}`}
                            onClick={() => {
                                setActiveLink(link.id);
                                setMobileOpen(false);
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;