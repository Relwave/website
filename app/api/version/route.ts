import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const release = await fetch(
        "https://api.github.com/repos/Relwave/relwave-app/releases/latest"
    ).then(res => res.json());

    const version = release.tag_name;
    return NextResponse.json({ version }, { status: 200 });
}

