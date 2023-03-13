import Link from "next/dist/client/link"
import ActiveLink from "../active-link"

import styles from "./header.module.css"

const header_links = [
    {linkName: 'about', linkUrl: '/'},
    {linkName: 'publications', linkUrl: '/publications'}
]

export const Header = () => {
    return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.navbar_menu}`}>
        <div className="container-md">
            <Link
                className={`navbar-brand ${styles.navbar_brand} fw-light`}
                href="/">
                    <strong>Gilberto</strong> Medeiros
            </Link>
            <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {header_links.map(link => 
                        <li key={link.linkName} className="nav-item">
                            <ActiveLink
                                className={`nav-link ${styles.nav_link} fw-light`}
                                activeClassName={`${styles.active_link}`}
                                href={link.linkUrl}>
                                {link.linkName}
                            </ActiveLink>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </nav>
)}