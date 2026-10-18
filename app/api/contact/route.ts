import { NextResponse } from "next/server";

/** 留资表单 API（stub）：后续对接 CRM / 邮件服务 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const required = ["company", "product", "market", "pain"];
    for (const key of required) {
      if (!body?.[key] || typeof body[key] !== "string" || !body[key].trim()) {
        return NextResponse.json(
          { ok: false, error: `缺少必填字段：${key}` },
          { status: 400 }
        );
      }
    }
    // TODO: 接入 CRM / 邮件通知（刘女士 185 0208 8258）
    console.log("[contact] new lead:", {
      company: body.company,
      product: body.product,
      market: body.market,
      budget: body.budget,
      pain: body.pain,
      intent: body.intent ?? "plan",
      time: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "请求格式错误" }, { status: 400 });
  }
}
