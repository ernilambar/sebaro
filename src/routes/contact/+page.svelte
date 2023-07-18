<script>
	import Box from '../../components/Box.svelte';
</script>

<Box heading="Contact" heading2="Me">
	<form
		accept-charset="UTF-8"
		action="https://www.formbackend.com/f/b1a2be3a2e0521ff"
		method="POST"
	>
		<div>
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required />
		</div>

		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" required />
		</div>

		<div>
			<label for="message">Message:</label>
			<textarea type="email" id="email" name="email" required />
		</div>

		<button type="submit">Submit</button>
	</form>
</Box>

<style>
  .fieldset + .fieldset,
  form + form {
    margin-top: 8px;
  }

  label {
    font-family: Arial, Helvetica, sans-serif;
    color: #334155;
    display: block;
    font-size: .8rem;
    font-weight: bold;
  }

  input,
  textarea,
  select {
    border: 1px solid #ddd;
    color: #475569;
    font-size: 1rem;
    padding: 5px;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  button[ type="submit"] {
    background: #2a65e6;
    border: none;
    box-shadow: none;
    color: white;
    border-radius: 2px;
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 500;
    padding: 8px 12px;
    margin-top: 16px;
  }
</style>
