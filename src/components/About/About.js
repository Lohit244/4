import React from "react"
import "./About.css"
import myphoto from "../../res/about.png"
import { Parallax } from "react-parallax"
import footer from "../../res/footer.jpg"
import boom from "../../res/boom.png"
function About() {
	return (
		<div className="about-container">
			<div className="about">
				<Parallax 
				renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundImage: `url(${boom})`,
			  backgroundRepeat: 'no-repeat',
			  backgroundSize:`cover`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 7})`,
            }}
          >
          </div>
        )}>
			<div className = "photo-block">
					<img id="my-img" src={myphoto} alt="something went wrong"></img>
					<div className = "photo-text">Lohitaksha Malhotra</div>
					<hr id="hr2"></hr>
				</div>
		</Parallax>
				
				<div id="about-text">
					<h1 id = "edu">My Education</h1>
					10<sup>th</sup>- CBSE Board
					<br />
					12<sup>th</sup> - PCM - CBSE Board - 87.2%
					<br />
					Mechanical Engineering - BIT Mesra (Currently Persuing)
				</div>
			</div>
			<Parallax bgImage={footer} strength={500}>
				<div className="intrests">
					<div className="about-header">
						<h1 id="skillHeading">My Skills</h1>I am very new so i dont have
						many but i'll keep improving
					</div>
					<div className="skills-container">
						<div className="skill" id="python">
							<h1>Python</h1>I now basic python and am working my way to
							learning data science methods.
						</div>
						<div className="skill" id="react">
							<h1>ReactJS</h1>
							This entire project is built on react.. but ofcourse i am still
							figuring my way with react too and am still but a newbie.
						</div>
						<div className="skill" id="webdev">
							<h1>HTML and CSS</h1>
							By no means exceptional at these and especially CSS, but i can deal
							with these languages to an extent.
						</div>
						<div className="skill" id="photoshop">
							<h1>Photoshop</h1>I have been using photoshop for quite some time
							and can do a good bit with it
						</div>
					</div>
				</div>
				<div className="intrests">
					<div className="about-header">
						<h1 id="intrestHeading">My Intrests</h1>
						in case you wanna know more about me
					</div>
					<div className="intrests-container">
						<div className="topic" id="programming">
							<h1>Programming</h1>I am still learning but ofcourse I do like
							programming.
						</div>
						<div className="topic" id="manga">
							<h1>Anime & Manga</h1>
							Yes, i am a weeb.
						</div>
						<div className="topic" id="gaming">
							<h1>Gaming</h1>I dont have a good gaming grade laptop but i do
							still play games like Valorant and CS:GO.
						</div>
					</div>
				</div>
			</Parallax>
		</div>
	)
}

export default About
