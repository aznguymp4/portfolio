import './AboutMe.css'

const yearCountToWord = years => {
	if (years > 25) return 'over twenty-five years'
	switch (years) {
		case 1: return 'a year';
		case 2: return 'two years';
		case 3: return 'three years';
		case 4: return 'four years';
		case 5: return 'five years';
		case 6: return 'six years';
		case 7: return 'seven years';
		case 8: return 'eight years';
		case 9: return 'nine years';
		case 10: return 'a decade';
		case 11: return 'eleven years';
		case 12: return 'twelve years';
		case 13: return 'thirteen years';
		case 14: return 'fourteen years';
		case 15: return 'fifteen years';
		case 16: return 'sixteen years';
		case 17: return 'seventeen years';
		case 18: return 'eighteen years';
		case 19: return 'nineteen years';
		case 20: return 'two decades';
		case 21: return 'twenty-one years';
		case 22: return 'twenty-two years';
		case 23: return 'twenty-three years';
		case 24: return 'twenty-four years';
		case 25: return 'twenty-five years';
		default: return 'several years'
	}
}

const AboutMe = () => {
	return <div>
		<div className='s500 wbold ca700 ac'>About Me</div>
		<div className='aboutMeBody'>
			<div className='aboutMeDesc'>
				Growing up, my creative mind had always enjoyed making things and learning about technology, which meant programming was the perfect opportunity to combine the two. I have been doing software engineering for {
					<b className='ca800'>{yearCountToWord(new Date().getFullYear()-2019)}</b>
				}; I constantly think about efficient and modular ways to write unique code.
			</div>
			<i className='aboutMeDevIcon fa-solid fa-code s700 ma ct200'/>
		</div>
	</div>
}

export default AboutMe