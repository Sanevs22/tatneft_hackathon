import { useRef, useState } from 'react';
import st from './Input.module.scss';

export const Input = ({ placeholder }) => {
	const [value, setValue] = useState('');
	const inputRef = useRef(null);

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const onClear = () => {
		setValue('');
		inputRef.current.focus();
	};

	return (
		<span className={st.wrapper}>
			<input placeholder={placeholder} className={st.input} onChange={onChange} value={value} ref={inputRef} />
			<span className={st.clear} onClick={onClear}>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
					<g id='material-symbols:close-rounded' opacity='0.6'>
						<path
							id='Vector'
							d='M12 13.4L7.10005 18.3C6.91672 18.4834 6.68338 18.575 6.40005 18.575C6.11672 18.575 5.88338 18.4834 5.70005 18.3C5.51672 18.1167 5.42505 17.8834 5.42505 17.6C5.42505 17.3167 5.51672 17.0834 5.70005 16.9L10.6 12L5.70005 7.10005C5.51672 6.91672 5.42505 6.68338 5.42505 6.40005C5.42505 6.11672 5.51672 5.88338 5.70005 5.70005C5.88338 5.51672 6.11672 5.42505 6.40005 5.42505C6.68338 5.42505 6.91672 5.51672 7.10005 5.70005L12 10.6L16.9 5.70005C17.0834 5.51672 17.3167 5.42505 17.6 5.42505C17.8834 5.42505 18.1167 5.51672 18.3 5.70005C18.4834 5.88338 18.575 6.11672 18.575 6.40005C18.575 6.68338 18.4834 6.91672 18.3 7.10005L13.4 12L18.3 16.9C18.4834 17.0834 18.575 17.3167 18.575 17.6C18.575 17.8834 18.4834 18.1167 18.3 18.3C18.1167 18.4834 17.8834 18.575 17.6 18.575C17.3167 18.575 17.0834 18.4834 16.9 18.3L12 13.4Z'
							fill='#101010'
						/>
					</g>
				</svg>
			</span>
		</span>
	);
};
