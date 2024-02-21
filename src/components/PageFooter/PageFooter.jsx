import './PageFooter.css'

const PageFooter = () => {
	return <div id="pageFooter" className='themeApplicable ac'>
		<div id="pageFooterTop">
			<div id='socials'>
				<a target="_blank" rel="noopener noreferrer" title='Contact Me' href="mailto:mail@aznguy.com"><i className="fa-solid fa-envelope"/></a>
				<a target="_blank" rel="noopener noreferrer" title='My GitHub' href="https://github.com/aznguymp4"><i className="fa-brands fa-github"/></a>
				{/* <a target="_blank" rel="noopener noreferrer" title='My LinkedIn' href="https://www.linkedin.com/in/erich-nguyen-716145228/"><i className="fa-brands fa-linkedin"/></a> */}
				<a target="_blank" rel="noopener noreferrer" title='My Twitter' href="https://x.com/aznguymp4"><i className="fa-brands fa-x-twitter"/></a>
				<a target="_blank" rel="noopener noreferrer" title='This site&apos;s Source Code' href="https://github.com/aznguymp4/portfolio"><i className="fa-solid fa-code"/></a>
			</div>
		</div>
		<div id="pageFooterBottom" className='s200 w500 ct800'>
			<div>© {new Date().getUTCFullYear()}, Erich Nguyen</div>
		</div>
	</div>
}

export default PageFooter