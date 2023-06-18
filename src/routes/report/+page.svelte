<script>
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
					<input type="file" name="file" id="file" class="hidden" />
				</label>
				<input
					type="submit"
					value="Submit"
					class="w-64 p-2 m-2 text-white rounded-lg bg-primary hover:bg-primary/95"
				/>
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
