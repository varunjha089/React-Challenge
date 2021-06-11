export function Info() {
	const title = "This is the title of Applicaton";
	const showTitle = true;

	return (
		<div>
			<h1>{title ? showTitle : ""}</h1>
			<p>Manage your stuff.</p>
		</div>
	);
}

export default Info;