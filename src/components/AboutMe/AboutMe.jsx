import './AboutMe.css'

const AboutMe = () => {
	return <div>
		<div className='s500 wbold ca700 ac themeApplicable'>About Me</div>
		<div className='aboutMeBody'>
			<div className='aboutMeDesc themeApplicable'>
				As a kid, I&apos;ve always had a great understanding and curiosity about technology.
				I&apos;ve been doing web development since 2019, and am always thinking about efficiency, modularity, and minimizing repetition when writing code.
			</div>
			<i className='themeApplicable fa-solid fa-code s700 ma ct200'/>
		</div>
	</div>
}

export default AboutMe