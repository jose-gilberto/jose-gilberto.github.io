import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faGraduationCap, faScroll } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons'

import styles from "./sidebar.module.css"

export const Sidebar = () => {
    return <div className={`${styles.sidebar} col-md-2 pt-5 sticky-top d-none d-md-block`}>
        <div className={styles.sidebar_author_img}>
            <img
                className='rounded mx-auto d-block img-fluid'
                src="https://avatars.githubusercontent.com/u/32587935?v=4"
                alt="Profile Photo"
            />
        </div>
        <div className='mt-4'>
            <div className={`${styles.author_description}`}>
                <p className='fw-light fs-6'>
                MSc. student in Computer Science and Computational Mathematics at USP, researcher with focus on Artificial Intelligence and Time Series.
                </p>
            </div>
        </div>
        <div>
            <ul className="nav flex-column">
                <li className={`nav-item ${styles.social_links} fw-light`}>
                    <a className="nav-link p-0 text-secondary">
                        <FontAwesomeIcon height={12} icon={faMapMarker}/>
                        <span className='ms-1'>Sao Carlos/SP</span>
                    </a>
                </li>
                <li className={`nav-item ${styles.social_links} fw-light`}>
                    <a className="nav-link p-0 text-secondary" href="https://github.com/jose-gilberto">
                        <FontAwesomeIcon height={12} icon={faGithub}/>
                        <span className='ms-1'>Github</span>
                    </a>
                </li>
                <li className={`nav-item ${styles.social_links} fw-light`}>
                    <a className="nav-link p-0 text-secondary" href="https://www.linkedin.com/in/gilberto-barbosa-b7073316a/">
                        <FontAwesomeIcon height={12} icon={faLinkedin}/>
                        <span className='ms-1'>Linkedin</span>
                    </a>
                </li>
                <li className={`nav-item ${styles.social_links} fw-light`}>
                    <a className="nav-link p-0 text-secondary" href="https://scholar.google.com/citations?user=OvRan0cAAAAJ">
                        <FontAwesomeIcon height={12} icon={faGraduationCap}/>
                        <span className='ms-1'>Google Scholar</span>
                    </a>
                </li>
                <li className={`nav-item ${styles.social_links} fw-light`}>
                    <a className="nav-link p-0 text-secondary" href="https://orcid.org/0009-0008-8793-6528">
                        <FontAwesomeIcon height={12} icon={faOrcid}/>
                        <span className='ms-1'>OCRID</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
}