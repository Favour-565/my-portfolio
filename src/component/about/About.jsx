import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clents</h5>
                            <small>100+ Woldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                    </div>
                    <p>
                    I am a full-stack developer with a strong foundation in object-oriented
                     programming. Dedicated to crafting robust, user-friendly web applications,
                    l specialise in utilising JavaScript, Typescript , React.js, Vuejs, to design
                    and implement scalable solutions
                    </p>
                    <a href="#contact" className='btn btn-primary'>lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default about