"use client";

// Error components must be Client Components
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/25">
			<div className="rounded-lg bg-white p-2">
				<h2>Something went wrong!</h2>
				<h3>{JSON.stringify(error.name)}</h3>
				<p>Error: {JSON.stringify(error.message)}</p>
				<button
					className="rounded-lg bg-red-500 p-2 text-white"
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}>
					Try again
				</button>
			</div>
		</div>
	);
}
