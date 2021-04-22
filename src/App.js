import "./App.css"
import ConnectBar from "./components/ConnectBar/ConnectBar"
import About from "./components/About/About"
import headerBackground from "./res/429540.jpg"
import { Parallax } from "react-parallax"
import { useEffect, useState } from "react"
import alertimg from "./res/alert.png"
import Projects from "./components/Projects/Projects"
function App() {
	const [coolText, setCoolText] = useState("")
	const [i, setI] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			const finalText = [
				"|",
				"P|",
				"Pr|",
				"Pro|",
				"Prog|",
				"Progr|",
				"Progra|",
				"Program|",
				"Programm|",
				"Programme|",
				"Programmer|",
				"Programmer|",
				"Programmer|",
				"Programme|",
				"Programm|",
				"Program|",
				"Progra|",
				"Progr|",
				"Prog|",
				"Pro|",
				"Pr|",
				"P|",
				"|",
				"D|",
				"De|",
				"Dev|",
				"Deve|",
				"Devel|",
				"Develo|",
				"Develop|",
				"Develope|",
				"Developer|",
				"Developer|",
				"Developer|",
				"Develope|",
				"Develop|",
				"Develo|",
				"Devel|",
				"Deve|",
				"Dev|",
				"De|",
				"D|",
				"|",
				"C|",
				"Co|",
				"Coo|",
				"Cool|",
				"Cool |",
				"Cool G|",
				"Cool Gu|",
				"Cool Guy|",
				"Cool Guy|",
				"Cool Guy|",
				"Cool Gu|",
				"Cool G|",
				"Cool |",
				"Cool|",
				"Coo|",
				"Co|",
				"C|",
				"|",
			]
			setCoolText(finalText[i])
			setI((i + 1) % 61)
		}, 400)
	}, [coolText, i])

	const [alertRead, setAlertRead] = useState(false)
	return (
		<div className="App">
			<Parallax bgImage={headerBackground} strength={300}>
				{!alertRead && (
					<div className="idk">
						<img id="alertimg" src={alertimg} alt="!ALERT - "></img>
						Please use landscape mode and turn on desktop mode if you're on
						mobile. This is a website built during Lead 2.0 at BIT Mesra while i
						am still learning a lot of things.
						<button
							id="x"
							onClick={() => {
								setAlertRead(true)
							}}
						>
							x
						</button>
					</div>
				)}
				<div className="App-header">
					<div className="big-text">I am Lohitaksha Malhotra.</div>
					<div className="small-text">
						I am a mechanical engineering student (1st Year) at BIT Mesra. I
						like to dabble in various parts of frontend development and like to
						learn about various technologies. I usually look into these or just
						play some games during my free time
					</div>
					<h1 className="typewriter">{coolText}</h1>
					<div className="small-text" id="arrow">
						^
					</div>
				</div>
			</Parallax>
			<About />
			<Projects />
			<div>
				<hr id="Connect-Hr"></hr>
			</div>
			<ConnectBar />
		</div>
	)
}

export default App
