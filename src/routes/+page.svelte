<script>
</script>

<svelte:head>
	<title>MMPA</title>
</svelte:head>

<main class="flex flex-row text-white bg-primary">
	<!-- Header START -->
	<!-- <div class="fixed top-0 left-0 select-none">
		<div class="flex flex-row m-3 rounded-full">
			<img src="/fmt-logo-chroma+glow.svg" class="rounded-full" alt="MMPA Logo" height="40" width="40" />
			<span class="m-2 font-medium text-1xl">MMPA</span>
		</div>
	</div> -->
	<!-- Header END -->

	<!-- Middle START -->
	<div class="fixed inset-0 flex flex-col items-center justify-center w-screen h-screen">
		<div class="flex flex-col items-center justify-center px-4 mb-10 gap-y-5 rounded-2xl">
			<img
				src="/fmt-logo-chroma+glow.svg"
				class="mb-6 rounded-full"
				alt="MMPA Logo"
				height="192"
				width="192"
			/>
			<h1 class="text-3xl text-center">Minecraft Malware Prevention Alliance</h1>
			<p class="text-center max-w-prose">
				The Minecraft Malware Prevention Alliance, or MMPA for short, is a group of people who are
				dedicated to preventing malware from spreading in the Minecraft community.
			</p>
		</div>

		<div class="flex flex-col gap-y-4">
			<div class="flex items-center justify-center gap-x-4">
				<a
					class="inline-flex items-center justify-center px-4 py-2 font-medium text-black transition-colors bg-white rounded gap-x-2 hover:bg-white/80"
					href="https://github.com/Minecraft-Malware-Prevention-Alliance"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
						/>
					</svg>
					<span>GitHub</span>
				</a>
				<a
					class="inline-flex items-center justify-center px-4 py-2 font-medium text-white transition-colors rounded gap-x-2 bg-blurple hover:bg-blurple/80"
					href="https://discord.gg/zPdFK47682"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
						/>
					</svg>
					<span>Discord</span>
				</a>
				<div />
			</div>
			<div class="flex items-center justify-center gap-x-4">
				<a
					class="inline-flex items-center justify-center px-4 py-2 font-medium text-white transition-colors rounded bg-mastodon gap-x-2 hover:bg-mastodon/80"
					href="https://infosec.exchange/@mmpa"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M20.94 14c-.28 1.41-2.44 2.96-4.97 3.26c-1.31.15-2.6.3-3.97.24c-2.25-.11-4-.54-4-.54v.62c.32 2.22 2.22 2.35 4.03 2.42c1.82.05 3.44-.46 3.44-.46l.08 1.65s-1.28.68-3.55.81c-1.25.07-2.81-.03-4.62-.5c-3.92-1.05-4.6-5.24-4.7-9.5l-.01-3.43c0-4.34 2.83-5.61 2.83-5.61C6.95 2.3 9.41 2 11.97 2h.06c2.56 0 5.02.3 6.47.96c0 0 2.83 1.27 2.83 5.61c0 0 .04 3.21-.39 5.43M18 8.91c0-1.08-.3-1.91-.85-2.56c-.56-.63-1.3-.96-2.23-.96c-1.06 0-1.87.41-2.42 1.23l-.5.88l-.5-.88c-.56-.82-1.36-1.23-2.43-1.23c-.92 0-1.66.33-2.23.96C6.29 7 6 7.83 6 8.91v5.26h2.1V9.06c0-1.06.45-1.62 1.36-1.62c1 0 1.5.65 1.5 1.93v2.79h2.07V9.37c0-1.28.5-1.93 1.51-1.93c.9 0 1.35.56 1.35 1.62v5.11H18V8.91Z"
						/></svg
					>
					<span>Mastodon</span>
				</a>

				<a
					class="inline-flex items-center justify-center px-4 py-2 font-medium text-black transition-colors bg-white rounded gap-x-2 hover:bg-white/80"
					href="https://blog.mmpa.info"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="/fmt-logo-chroma+glow.svg"
						class="rounded-full"
						alt="MMPA Logo"
						height="24"
						width="24"
					/>
					<span>Blog</span>
				</a>
			</div>
		</div>
		<!-- Middle END -->

		<!-- Footer START -->
		<div class="fixed bottom-0 mb-3">
			<span class="text-xs">© 2023 Minecraft Malware Prevention Alliance</span>
		</div>
		<!-- Footer END -->
	</div>
</main>