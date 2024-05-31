import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
            <article className='service'>
                <div className='service__head'>
                    <h3>UI/UX Design</h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Wireframes</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>High-fidelity mockups</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Interactive prototypes</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>User journey mapping</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>User flow diagrams</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Usability testing</p>
                    </li>

                    
                </ul>
            </article>
            {/* END OF UI/UX */}


            <article className='service'>
                <div className='service__head'>
                    <h3>Frontend</h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Build Responsive Layout</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>CSS Styling Techniques</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>React Basics</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Web Accessibility</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Version Control with Git</p>
                    </li>

                
                    

                    
                </ul>
            </article>
            {/* END OF WEB DEVELOPMENT*/}

            <article className='service'>
                <div className='service__head'>
                    <h3>Backend</h3>
                </div>

                <ul className='service__list'>
                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Node.js JavaScript/TypeScript</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Express.js: Minimalist web framework.</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>SQL Databases</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Authentication and Authorization</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>API Management</p>
                    </li>

                    <li>
                    <BiCheck className='service__list-icon'/>
                    <p>Monitoring and Logging</p>
                    </li>

                    
                </ul>
            </article>
        {/* END OF CONTENT CREATION */}
        </div>
    </section>
  )
}

export default services