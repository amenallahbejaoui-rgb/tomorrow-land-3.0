import './Register.css';

export default function Register() {
	return (
		<section className="register" id="register">
			<div className="register__noise" aria-hidden="true" />
			<a
				className="register__button"
				href="https://forms.gle/moLtMvPg1eEaPDhU7"
				target="_blank"
				rel="noopener noreferrer"
				data-aos="flip-up"
			>
				Register Now
			</a>
		</section>
	);
}
