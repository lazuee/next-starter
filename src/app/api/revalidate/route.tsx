import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=pogs

export const GET = async (request: NextRequest, response: NextResponse) => {
	const secret = request.nextUrl.searchParams.get("secret");

	if (secret !== "pogs") {
		return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
			status: 401,
			statusText: "Unauthorized",
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	const path = request.nextUrl.searchParams.get("path") || "/";

	revalidatePath(path);

	return NextResponse.json({ revalidated: true });
};
