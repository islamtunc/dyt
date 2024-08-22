// Bismillahirahmanirahim



import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";

var wene:any;
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(process.cwd()+`./public/m13.jpg`, buffer);

    wene=file.name;
    revalidatePath("/");

    return NextResponse.json( "success" );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "fail", error: e });
  }
}

