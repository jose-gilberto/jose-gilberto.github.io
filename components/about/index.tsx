import styles from './about.module.css'

export const About = () => {
    return <div className={`col-md-8 p-5 ${styles.about_section}`}>
        <div className='mb-5'>
            <h3 className={`${styles.section_title} mb-4 fw-light`}>
                José <strong>Gilberto</strong> B. de Medeiros Jr.
            </h3>
            <p className='fw-light'>
                Hey there 👋! You can call me Gilberto. I'm currently a MSc. student in the Computer Science
                departament at <a href='https://www.icmc.usp.br/'>ICMC</a> in the <a href='https://www5.usp.br/'>University of Sao Paulo</a> {' '}
                with emphasis on Artificial Intelligence and Time Series. I'm working as a researcher at <a href='http://labic.icmc.usp.br/'>LABIC</a> under
                the supervision of prof. <a href='http://lattes.cnpq.br/7662777934692986'>Diego Furtado Silva</a>.
            </p>
            <p className='fw-light'>
                I've made my BSc. degree at <a href='https://www.ifsc.edu.br/'>Federal Institute of Santa Catarina</a> under the supervision of
                prof. <a href='http://lattes.cnpq.br/9375515251716708'>Carlos Andres Ferrero</a>, there I worked with an algorithm to transform brain tumor images into time
                series structures and then applying an unsupervised clustering algorithm to group the structures
                into groups and after that analysing each group.
            </p>
        </div>
        <div>
            <h4 className={`${styles.section_title} mb-4 fw-light`}>Contact Info</h4>
            <p className='fw-light'>
                Email: <a href="mailto:gilberto.barbosa@usp.br">gilberto.barbosa@usp.br</a>
            </p>
            <p className='fw-light'>
                Instituto de Ciências Matemáticas e de Computação - USP <br/>
                Laboratório de Inteligência Computacional <br/>
                Sala: 1-010/1-007 <br/>
                Avenida Trabalhador São-carlense, 400 - Centro <br/>
                São Carlos / SP - Brasil <br/>
                CEP 13566-590
            </p>
        </div>
    </div>
}