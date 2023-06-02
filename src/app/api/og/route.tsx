import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (request: NextRequest, response: NextResponse) => {
	const title = request.nextUrl.searchParams.get("title");

	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					paddingLeft: 190,
					paddingRight: 190,
					overflow: "hidden",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					gap: "6rem",
					backgroundColor: "#181818",
				}}>
				<div
					style={{
						display: "flex",
						fontSize: 130,
						fontWeight: 800,
						letterSpacing: "-0.05em",
						color: "white",
						lineHeight: "120px",
						whiteSpace: "pre-wrap",
						overflow: "hidden",
					}}>
					{title}
				</div>
				<div
					style={{
						display: "flex",
						gap: "3rem",
					}}>
					<div
						style={{
							display: "flex",
							height: "130px",
							width: "130px",
							backgroundSize: "130px 130px",
							backgroundImage: "url(https://avatars.githubusercontent.com/u/91590512?v=4)",
						}}></div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}>
						<div
							style={{
								display: "flex",
								fontSize: 50,
								fontWeight: 700,
								color: "white",
							}}>
							Lazuee
						</div>
						<div
							style={{
								display: "flex",
								fontSize: 40,
								fontWeight: 500,
								color: "white",
							}}>
							A Code enthusiast
						</div>
					</div>
				</div>
			</div>
		),
		{
			width: 1920,
			height: 1080,
		}
	);
};
