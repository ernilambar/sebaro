<script>
	import Box from '../../components/Box.svelte';

	import * as yup from 'yup';

	const schema = yup.object().shape({
		userName: yup.string().required('Name is required'),
		userEmail: yup.string().required('Email is required').email('Please enter valid email'),
		userMessage: yup.string().required('Message is required')
	});

	let message = '';

	let values = {};
	let errors = {};

	async function submitHandler() {
		try {
			await schema.validate(values, { abortEarly: false });
			console.log('Good');
			errors = {};
			values = {};
			message = 'Submitted successfully.';
		} catch (err) {
			errors = extractErrors(err);
		}
	}
	function extractErrors(err) {
		return err.inner.reduce((acc, err) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}
</script>

<Box heading="Contact" heading2="Me">
	<form class="contact-form" on:submit|preventDefault={submitHandler}>
		<div class="form-row">
			<label for="userName">Name:</label>
			<input
				type="userName"
				name="userName"
				id="userName"
				bind:value={values.userName}
				placeholder="Name"
			/>
			{#if errors.userName}<span>{errors.userName}</span>{/if}
		</div>
		<div class="form-row">
			<label for="userEmail">Email:</label>
			<input
				type="text"
				name="userEmail"
				id="userEmail"
				bind:value={values.userEmail}
				placeholder="Email"
			/>
			{#if errors.userEmail}<span>{errors.userEmail}</span>{/if}
		</div>
		<div class="form-row">
			<label for="userMessage">Message:</label>
			<textarea
				name="userMessage"
				id="userMessage"
				bind:value={values.userMessage}
				placeholder="Message"
			/>
			{#if errors.userMessage}<span>{errors.userMessage}</span>{/if}
		</div>
		<div>
			<button type="submit">Submit</button>
		</div>
	</form>
	{#if message}
		<div class="message">{message}</div>
	{/if}
</Box>

<style>
	.contact-form {
		max-width: 550px;
	}

	label {
		color: #334155;
		display: block;
		font-weight: bold;
	}

	.form-row {
		margin-bottom: 20px;
	}

	span {
		display: block;
		margin-top: 5px;
		color: #cc0000;
		font-weight: 0.8rem;
	}

	input,
	textarea {
		border: 1px solid #ddd;
		color: #475569;
		font-size: 1rem;
		padding: 10px;
		border-radius: 4px;
		margin-top: 5px;
		width: 100%;
	}

	textarea {
		min-height: 150px;
	}

	button[type='submit'] {
		background: #2a65e6;
		border: none;
		box-shadow: none;
		color: white;
		border-radius: 2px;
		font-size: 0.8rem;
		text-transform: uppercase;
		font-weight: 500;
		padding: 8px 12px;
		margin-top: 16px;
		cursor: pointer;
	}

	.message {
		font-weight: 700;
		margin: 15px 0;
		color: #32a852;
		display: block;
	}
</style>
