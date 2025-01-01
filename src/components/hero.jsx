import React from "react";
import '../styles/topbar.css';

import Profilephoto from '../images/profile.JPG'
import RA from '../images/ra.png'
import Rocket from '../images/rocket.png'
import cloud from '../images/cloud.png'
import Medicine from '../images/medicinedesign.png'
import skyl from '../images/skyl.png'
import compattend from '../images/compattend.png'
import soul from '../images/soul.png'
import solid from '../images/solid.png'
import jhu from '../images/jhu.png'
import cdnm from '../images/cdnm.png'
import cilab from '../images/cilab.png'
import iiitd from '../images/iiitd.png'
import aid from '../images/aid.png'
import malone from '../images/malone.png'
import inno from '../images/inno.png'
import weave from '../images/weave.png'
import videoSource from '../images/VR_demo.mp4'
import carla_video from '../images/ML-DL-Fall2024-ProjectVideo.mp4'


const Hero =() =>{
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY; // Current scroll position
        const rocket = document.getElementById('rocket');
        
        // Adjust the rocket's position based on the scroll position
        rocket.style.transform = `translateY(-${scrollPosition}px)`;
    });

    return(

        <div >
            
        {/* <nav style={{display: 'flex', backgroundColor:'white', marginBottom:'20px'}}>
                <div style={{ fontSize: '3.5rem',fontFamily:'Montserrat, sans-serif', color: '#4C86DC' }}>
                    MRISHIKA NAIR
                </div>
                <ul style={{
                    display: 'flex',
                    listStyleType: 'none',
                    gap: '20px',
                    margin: 0,
                    padding: 0,
                    fontSize: '1rem',
                }}>
                    <li><a href="#profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</a></li>
                    <li><a href="#milestones" style={{ textDecoration: 'none', color: '#333' }}>Milestones</a></li>
                    <li><a href="#research" style={{ textDecoration: 'none', color: '#333' }}>Research</a></li>
                    <li><a href="#projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</a></li>
                </ul>
            </nav> */}
        <div className="App">
            <section className="profile">
                <h1 className="name">Mrishika Nair</h1>
                <div className="flex flex-col md:flex-row items" style={{ display: 'flex-col', justifyContent: 'space-between',gap:'60px' ,
                    fontSize: '18px',  width: '100%'}}>
                    <div style={{  width:'60%' }}>
                        
                        <p style={{ fontSize:'15px', marginTop: '80px' }}>
                        I am a Master's student in Computer Science at the Whiting School of Engineering, Johns Hopkins University. I am affiliated with the Intuitive Computing lab at Johns Hopkins.
                            Driven by a desire to continuously learn and evolve, I am excited about exploring the 
                            intersection of AI, Natural Language Processing, and Human Computer Interaction to improve everyday lives.
                        {/* </p>
                        <p style={{fontSize:'18px', marginTop: '20px' }}> */}
                            Through my projects, I have aimed to create accessible and intuitive systems that bridge 
                            the gap between technology and user needs. I envision a future where technology not only 
                            optimizes processes but also fosters inclusivity, ensuring that individuals from all backgrounds 
                            and abilities can fully benefit from advancements in this dynamic field.
                        </p>
                        <p style={{color:'#4C86DC',marginTop:'30px'}}>
                        <a href="mrishnair@gmail.com">Email</a> &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://drive.google.com/file/d/1IX42JMy6iyd3LfnWNtCv689bezMkH06H/view?usp=sharing">CV</a> &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/mrishika-nair/">LinkedIn</a> &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/MrishikaNair">Github</a>
                        </p>
                    </div>
                    <div>
                        <img 
                        src={Profilephoto} 
                        alt="Profile" 
                        className="profile-img" 
                        style={{
                            height:'370px',
                            marginTop:'30px', 
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                            borderRadius: '0%', // default border radius
                            objectFit: 'cover' // ensures the image fits well
                        }}/>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="milestones" style={{ display: 'flex', justifyContent: 'space-between',  textAlign: 'left' }}>
                
                {/* Milestones List */}
                <div>
                    <h2 style={{ fontSize: '3rem', color: '#5A668C', marginBottom: '100px', paddingTop:'120px'}}>Milestones</h2>
                    <div className="scrollable-section" style={{ flex: '1', maxHeight: '210px', paddingLeft: '20px' }}>
                    <ul style={{ listStyleType: 'disc',  fontSize: '15px', color: '#333', paddingTop:'20px',paddingLeft: '20px'}}>
                        <li>08/24: Joined Intuitive Computing Lab at Johns Hopkins as a research assistant.</li>
                        <li>06/24: Published research as the first author in HCI International 2024.</li>
                        <li>05/24: Graduated from IIIT Delhi in 2024, with distinction merit!</li>
                        <li>03/24: Accepted to Johns Hopkins University as a full-time grad student.</li>
                        <li>12/23: Joined iWayPlus as a Software developer intern.</li>
                        <li>05/23: Joined Reliance Jio for summer internship as a Software developer.</li>
                        </ul>
                    </div>
                    <hr style={{ width: '100%', border: '1.5px solid #A3B4D2', marginLeft:'20px', marginTop:'60px' }} />
                </div>
                {/* Rocket Image */}
                <div>
                    <div class="scroll-container">
                        <div class="rocket-container">
                            <img src={Rocket} id="rocket" alt="Rocket Illustration"/>
                        </div>
                    </div>
                    <div>
                        <img src={cloud} alt="cloud" id="cloud"/>
                    </div>
                </div>
            </section>

            {/* Research Experience Section */}
            <section className="research" style={{ display: 'flex', gap:'120px',justifyContent: 'space-between', textAlign: 'left' }}>
                <div style={{ marginRight: '30px'}}>
                    <h2 style={{color: '#5A668C'}}>Research Experience</h2>
                    {/* Add research experience details here */}
                    <p>
                    At Johns Hopkins University's <a href='https://intuitivecomputing.github.io/' style={{color: "#3D8BF2"}}>Intuitive Computing Lab</a>, I work as a graduate research assistant. Our lab focuses 
                    on HCI, AI, and robotics, emphasising human-robot interaction, speech interfaces, 
                    and human-centred AI. My main research involves leveraging large language models to enhance personalised speech 
                    interfaces and minimise interaction challenges in HCI.
                    </p>
                    <p>
                    I previously worked as an undergraduate researcher in the <a href='https://cilab.iiitd.edu.in/' style={{color: "#3D8BF2"}}>Creative Interfaces Lab</a>, where I worked on VR and AR 
                    projects that spanned over depth sensing and precision in virtual frameworks. My thesis was to improve medical 
                    education by enhancing the learnability and retention of dissection procedures,to bridge the 
                    gap between experiential training and ecological concerns.
                    </p>
                    <p>
                    Additionally, my experience as an HCI researcher in the <a href='https://aidlab.iiitd.edu.in/' style={{color: "#3D8BF2"}}>Accessible and Inclusive Design Lab</a> emphasised creating 
                    inclusive, empowering solutions to support independent living for individuals with special needs. Collectively, 
                    these experiences shape my commitment to building intuitive, impactful technologies that address diverse user 
                    needs in meaningful ways.
                    </p>
                </div>
                {/* <div style={{width:'40%', alignItems:'end', marginLeft: '70px' }}>
                    <img src={research} alt="research" style={{height:'700px', paddingTop:'100px'}}/>
                </div> */}
            </section>

            {/* Projects Section */}
            <section className="projects">
                <div className="gradsection">
                    <h2 style={{color: '#5A668C', fontSize: '3rem'}}>Projects</h2>
                    <div className="project-grid">
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                            {/* <div className="projectindex" style={{width:'5%'}}>01</div> */}
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>01. Pathfinding Autonomous Agents in Dynamic Environments</h3>
                                <p>
                                Developed a semi-supervised reinforcement learning framework using the CARLA Simulator to train agents for real-time 
                                pathfinding tasks in dynamic urban environments. Integrated Proximal Policy Optimization (PPO) with intrinsic reward 
                                signals to promote curiosity based learning and optimise decision making in complex navigation. Used distributed pipelines 
                                for processing high-dimensional sensor data(LiDAR, RGB, GPS) , optimizing learning efficiency and increased robustness.
                                </p>
                            </div>
                            <div className="project-video" style={{ width: '35%' }}>
                                <video 
                                    src={carla_video} 
                                    alt="Description of video" 
                                    controls  // Adds playback controls
                                    autoPlay  // Optional: plays video automatically
                                    loop      // Optional: loops the video
                                    muted     // Optional: mutes audio for autoplay
                                />
                                {/* <img src={vr} alt="Description of image 4" style={{height:'110%'}}/> */}
                            </div>
                            
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'50px' }} />
                        
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                            {/* <div className="projectindex" style={{width:'5%'}}>01</div> */}
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>02. LLM powered voice assistants for elderly health management</h3>
                                <p>
                                Developing personalised voice assistants to support elderly healthcare management. A web application that enables users to upload prescriptions, leveraging OCR for targeted text extraction from regions of interest. The extracted text is processed with a language model to generate after-visit summaries and health guidelines.
                                Integrated with GPT and Alexa sdk for enabling easy voice driven interactions and reminders.
                                </p>
                            </div>
                            <div className="projectimage" style={{width:'35%'}}>
                                <img src={RA} alt="RA"/>
                            </div>
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'50px' }} />
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>03. Inclusive Medicine Packaging for the Geriatric Population: Bridging Accessibility Gaps</h3>
                                <p>
                                Redesigned medicine packaging with augmented QR codes with Text-to-speech conversion of medicine info to enhance accessibility for the geriatric population, targeting visual impairments and diminished tactile sensitivities. Conducted and expansive user study and developed a complementary app to help elderly individuals manage their medication regimen.
                                The new prototype reduced the time to analyse the medicine info by 80%, and accuracy in identifying the medicine increased to 96%.
                                </p>
                                <a href="https://link.springer.com/chapter/10.1007/978-3-031-61063-9_6" style={{color: '#4C86DC', marginBottom:'30px', fontSize: '20px'}}>Conference Paper</a>
                            </div>
                            <div className="project-image" style={{width:'35%'}}>
                                <img src={Medicine} alt="Medicine" />
                            </div>
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'90px' }} />
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>04. Skyl</h3>
                                <p>
                                Developed a crowd-sourced platform - Skyl, to empower India’s unorganized gig sector workers through skill development. 
                                Implemented personalized course recommendation algorithms based on customer review analytics, facilitating targeted upskilling 
                                for service providers. This was complemented with a heat map feature for optimizing work hours. Service providers could improve 
                                their ratings and visibility within the platform upon successful completion of improvement courses.
                                Idea was accepted and incubated at the Innovation and Incubation Center at IIIT Delhi
                                </p>
                                <a href="https://github.com/MrishikaNair/SKYL_SP" style={{color: '#4C86DC', marginBottom:'30px', fontSize: '20px'}}>Github</a>
                            </div>
                            <div className="project-image" style={{width:'35%'}}>
                                <img src={skyl} alt="Skyl"/>
                            </div>
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'90px' }} />
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{width:'600px', lineHeight:'1.2'}}>05. AnatoVR - B.Tech thesis</h3>
                                <p>
                                Developed a medical dissection VR training experience for medical students to explore and understand frog anatomy and simulate
                                the process of dissection realistically with <strong>precision handling close to ±0.5 cm</strong> of tools virtually. Reduced the need for physical 
                                specimens, and bridged the gap between experiential training and ecological concerns
                                </p>
                                <p>
                                    Research paper under review in CHI 2025.
                                </p>
                                <a href="https://github.com/MrishikaNair/AnatoVR-Dissection-training-BTP" style={{color: '#4C86DC', marginBottom:'30px', fontSize: '20px'}}>Github</a>
                            </div>
                            {/* <div className="project-image" style={{width:'30%'}}> */}
                            <div className="project-video" style={{ width: '35%' }}>
                                <video 
                                    src={videoSource} 
                                    alt="Description of video" 
                                    controls  // Adds playback controls
                                    autoPlay  // Optional: plays video automatically
                                    loop      // Optional: loops the video
                                    muted     // Optional: mutes audio for autoplay
                                />
                                {/* <img src={vr} alt="Description of image 4" style={{height:'110%'}}/> */}
                            </div>
                            
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'50px' }} />
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>06. Compattend - Facial Recognition System with CNN and FaceNet Integration</h3>
                                <p>
                                Developed a facial recognition app leveraging a combination of Convolutional Neural Networks (CNN) and the FaceNet model for accurate 
                                face detection and recognition, achieving a <strong>test accuracy of 92%</strong>. Integrated with Google Classroom's API for automated attendance 
                                management and detailed statistical performance insights, with tailored interfaces for both instructors and students.
                                </p>
                                <a href="https://github.com/CSE-333-Computer-Graphics-2022/Solid-Texture-Synthesis" style={{color: '#4C86DC', marginBottom:'30px', fontSize: '20px'}}>Github</a>
                            </div>
                            <div className="project-image" style={{width:'35%'}}>
                                <img src={compattend} alt="Compattend" style={{paddingLeft:'20px'}} />
                            </div>
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'100px' }} />
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                        
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>07. Solid Texture Synthesis</h3>
                                <p>
                                Implemented a method for realistic 3D texture synthesis by transforming 2D exemplars into detailed solid textures, 
                                applying <strong>stochastic sampling and histogram matching</strong> for optimal visual similarity to the source texture. The approach 
                                generated textures for XY, YZ, and XZ planes, with shaders dynamically selecting texture coordinates based on per-vertex 
                                normals. Gaussian Blur reduced seams, while histogram matching controlled hue and saturation for consistency. Enhanced by 
                                specular lighting, shininess, and parallax mapping, the method achieves high realism, effectively preserving the exemplar’s 
                                texture characteristics following the principles of Kopf et al. (2007).
                                </p>
                                <a href="https://github.com/CSE-333-Computer-Graphics-2022/Solid-Texture-Synthesis" style={{color: '#4C86DC', marginBottom:'30px', fontSize: '20px'}}>Github</a>
                            </div>

                            <div className="project-image" style={{width:'35%'}}>
                                <img src={solid} alt="Solid" style={{paddingLeft:'20px'}} />
                            </div>
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'30px' }} />
                        <div className="project" style={{gap:'40px', display:'flex'}}>
                        
                            <div className="project-description" style={{width:'60%'}}>
                                <h3 style={{lineHeight:'1.2'}}>08. Soul</h3>
                                <p>
                                "Soul" is an immersive Augmented Reality <strong>(AR) microlearning experience</strong> rooted in Indic wisdom (Betaal Pachisi). Users engage 
                                with an avatar representing the human soul, fostering impactful decision-making and personal growth. Through the stories 
                                users are presented with certain dilemmas they face in their lives, which they discuss with their companion - SOUL, a 
                                personification of their inner conscience.
                                </p>
                                <p>
                                    <strong>Awarded best project recognition.</strong>
                                </p>
                            </div>
                            <div className="project-image" style={{width:'35%'}}>
                                <img src={soul} alt="Soul"  style={{paddingLeft:'20px'}}/>
                            </div>
                        </div>
                        <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginTop:'70px' }} />
                        
                    </div>
                </div>
            </section>

            <section className="affiliations" >
                <div style={{ marginRight: '10px', marginTop:'130px'}}>
                    <h2 style={{color: '#2b3967', marginBottom:'70px'}}>Affiliations</h2>
                        <div className="affiliationgrid" style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingTop:'50px',paddingLeft:'70px',paddingRight:'70px'}}>
                            {/* Row 1 */}
                            <div className="affrow" style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
                                <img src={malone} alt="Affiliation 1" style={{ height:'40%', width:'25%'}} />
                                <img src={iiitd} alt="Affiliation 2" style={{ height:'20%', width:'17%', marginTop:'-1.5rem'}} />
                                <img src={cilab} alt="Affiliation 3" style={{ height:'25%', width:'20%', marginTop:'-1.5rem'}} />
                                <img src={cdnm}alt="Affiliation 4" style={{ height:'18%', width:'15%', marginTop:'-3.5rem'}} />
                            </div>

                            {/* Row 2 */}
                            <div className="affrow" style={{  display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
                                <img src={inno} alt="Affiliation 6" style={{ height:'30%', width:'20%'}} />
                                <img src={weave} alt="Affiliation 8" style={{ height:'20%', width:'10%'}} />
                                <img src={aid} alt="Affiliation 5" style={{ height:'20%', width:'10%'}} />
                                <img src={jhu} alt="Affiliation 5" style={{ height:'20%', width:'12%'}} />
                            </div>
                        </div>
                    </div>
                    <hr style={{ width: '100%', border: '1px solid #B3B5B7', marginLeft:'20px', marginRight:'18px', marginTop:'70px' }} />
            </section>
      </div>
      </div>
    )

}
export default Hero
