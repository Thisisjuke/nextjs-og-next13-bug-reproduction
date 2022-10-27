import { ImageResponse } from "@vercel/og";

const font = fetch(
  new URL("../../assets/fonts/SourceSansPro-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function () {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"SourceSansPro"',
          backgroundImage:
            "radial-gradient(circle, rgb(79,70,229) 0%, rgb(49, 46, 129) 100%)",
        }}
      >
          yo
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SourceSansPro",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
