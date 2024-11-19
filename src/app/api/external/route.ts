import { NextResponse } from "next/server";

const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    
    const response = await fetch(EXTERNAL_API_URL);

    
    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch data from the external API",
        },
        { status: response.status }
      );
    }

    
    const data = await response.json();
    
    
    return NextResponse.json({ success: true, data });

  } catch (error: any) {
    
    return NextResponse.json({
      success: false,
      message: "Error occurred while fetching data",
      error: error.message,
    });
  }
}
