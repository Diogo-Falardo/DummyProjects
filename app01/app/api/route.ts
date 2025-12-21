import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";
import Event from "@/database/event.model";

export async function Post(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (e) {
      return NextResponse.json(
        { message: "Invalid json data format" },
        { status: 400 }
      );
    }

    const createEvent = await Event.create(event);

    return NextResponse.json(
      { message: "Event created sucessfully", event: createEvent },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: e instanceof Error ? e.message : "unknown",
      },
      { status: 400 }
    );
  }
}
