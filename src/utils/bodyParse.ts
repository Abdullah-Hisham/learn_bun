// utils/bodyParser.ts
export async function parseJSON(req: Request) {
    try {
    const text = await req.text();       // اقرأ الجسم كنص
    return text ? JSON.parse(text) : {}; // لو فاضي رجع object فاضي
    } catch (err) {
    throw new Error("Invalid JSON");
    }
}