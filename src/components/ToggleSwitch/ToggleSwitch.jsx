import { useState } from 'react'
import './ToggleSwitch.css'

const ToggleSwitch = ({label, setState, state, debounce}) => {
	const [moving, setMoving] = useState(false)

	return <div className='toggleSwitchRow'>
		<div
			className='toggleSwitchWrap'
			data-checked={state?'1':'0'}
			onClick={() => {
				if(debounce) {
					if(moving) return
					setMoving(true)
					setTimeout(()=>setMoving(false), debounce||355)
				}
				setState(e=>!e)
			}}
		>
			<div className={`toggleSwitchInner ${moving?'moving':false}`}/>
		</div>
		<div className='toggleSwitchLabel'>{label}</div>
	</div>
}
export default ToggleSwitch