<script>
	import Swal from 'sweetalert2';

	// Shut up i do not care about this
	/**
	 * @param {{ target: any; }} event
	 */
	function handleFileUpload(event) {
		const fileInput = event.target;
		const uploadedFile = fileInput.files[0];

		// Check if a file was selected
		if (uploadedFile) {
			const fileName = uploadedFile.name;
			// Check if the selected file has a valid extension
			if (fileName.endsWith('.class') || fileName.endsWith('.jar')) {
				let bodyContent = new FormData();
				bodyContent.append('file', uploadedFile);

				fetch('https://liftoff.mmpa.info/', {
					method: 'POST',
					body: bodyContent
				});

				Swal.fire({
					icon: 'success',
					title: 'File Uploaded',
					text: `Uploaded file: ${fileName}`
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Invalid File',
					text: 'Please upload a `.class` or `.jar` file'
				});
			}
		}
	}
</script>

<svelte:head>
	<title>MMPA</title>
</svelte:head>

<main class="flex flex-row text-white bg-primary">
	<div class="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen">
		<!-- Header START -->
		<div class="fixed top-0 left-0 select-none">
			<div class="flex flex-row m-3 rounded-full">
				<img
					src="/fmt-logo-chroma+glow.svg"
					class="rounded-full"
					alt="MMPA Logo"
					height="40"
					width="40"
				/>
				<span class="m-2 font-medium text-1xl">MMPA</span>
			</div>
		</div>
		<!-- Header END -->

		<!-- Middle START -->
		<div class="bg-white rounded-xl">
			<h1 class="flex justify-center my-5 text-2xl text-center text-black">Report Malware</h1>

			<form class="flex flex-col">
				<label
					for="file"
					class="flex justify-center w-64 p-2 m-2 text-center text-white rounded-lg bg-primary hover:bg-primary/95"
				>
					<span>Upload File</span>
					<input
						type="file"
						name="file"
						id="file"
						class="hidden"
						accept=".class,.jar"
						on:change={handleFileUpload}
					/>
				</label>
			</form>
		</div>
		<!-- Middle END -->

		<!-- Footer START -->
		<div class="fixed bottom-0 mb-3">
			<span class="text-xs">© 2023 Minecraft Malware Prevention Alliance</span>
		</div>
		<!-- Footer END -->
	</div>
</main>
