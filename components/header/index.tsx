import Link from "next/dist/client/link"
import "./header.module.css"

export const Header = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
                <Link className="navbar-brand" href="/">Gilberto Medeiros</Link>
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
                        <li className="nav-item">
                            <Link className="nav-link" href={'/publications'}>Publications</Link>
                            {/* <a className="nav-link" href="/publications">Publications</a> */}
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Talks</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Teaching</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Blog Posts</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
}