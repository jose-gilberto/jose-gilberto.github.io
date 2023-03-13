import styles from './publications.module.css'


export const Publications = () => {
    return <div className={`col-md-8 p-5`}>
        <h2 className={`fw-light ${styles.section_title}`}>Publications</h2>
        <small className={`${styles.section_subtitle} fw-light`}>publications in reversed chronological order.</small>
        <div className="mt-5">
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className={`${styles.publication_card}`}>
                        <p className='fw-light'>
                        MEDEIROS JUNIOR, J. G. B. and FERRERO, C. A.
                        Agrupamento de Imagens Tumorais de MRI utilizando Extração de Descritores Baseados em Séries Temporais. In: XVII
                        Escola Regional de Banco de Dados, 2022, Lages. Anais do XVII Escola Regional de Banco de Dados, 2022.
                        </p>
                        <div>
                            <button className={`me-1 btn btn-outline-dark btn-sm ps-3 pe-3 ${styles.publication_btn}`}>
                                <small>PDF</small>
                            </button>
                            <button className={`me-1 btn btn-outline-dark btn-sm ps-3 pe-3 ${styles.publication_btn}`}>
                                <small>SLIDE</small>
                            </button>
                            <button className={`me-1 btn btn-outline-dark btn-sm ps-3 pe-3 ${styles.publication_btn}`}>
                                <small>SOURCE</small>
                            </button>
                        </div>
                    </div>
                    <div className={`fs-3 ${styles.publication_year} fw-light`}>
                        2022
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className={`${styles.publication_card}`}>
                        <p className='fw-light'>
                        DURIGON, A. ; ABRANJO, A. G. ; BIANQUINI, I. ; MEDEIROS JÚNIOR, J. G. B. ; 
                        FERNANDES, K. D. ; RIBEIRO, T. C. ; GRACIANO JUNIOR, W. 
                        . Aplicativo web para o estudo de geometria espacial. Aplicativo web para o estudo de geometria 
                        espacial. 1ed.Madrid: Gloria Inés Figueroa Correa (ed.), 2020, v. , p. 209-218. 
                        </p>
                        <div>
                            <button className={`me-1 btn btn-outline-dark btn-sm ps-3 pe-3 ${styles.publication_btn}`}>
                                <small>PDF</small>
                            </button>
                            <button className={`me-1 btn btn-outline-dark btn-sm ps-3 pe-3 ${styles.publication_btn}`}>
                                <small>SLIDE</small>
                            </button>
                            <button className={`me-1 btn btn-outline-dark btn-sm ps-3 pe-3 ${styles.publication_btn}`}>
                                <small>SOURCE</small>
                            </button>
                        </div>
                    </div>
                    <div className={`fs-3 ${styles.publication_year} fw-light`}>
                        2020
                    </div>
                </li>
            </ul>
        </div>
    </div>
}