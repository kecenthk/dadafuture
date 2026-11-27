import { NextResponse } from "next/server";

/** 留资表单 API：校验字段并通过 Resend 发送邮件到管理员邮箱 */
const RESEND_ENDPOINT = "https://api.resend.com/emails";

function esc(v: unknown) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

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

    const intent = body.intent === "resource" ? "resource" : "plan";
    const intentLabel = intent === "resource" ? "领取外贸资料包" : "免费出海方案";
    const createdAt = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.ADMIN_EMAIL;
    const from = process.env.RESEND_FROM || "DADAFUTURE 官网 <onboarding@resend.dev>";

    let mailOk = false;
    let mailError = "";

    if (!apiKey || !to) {
      mailError = "缺少 RESEND_API_KEY 或 ADMIN_EMAIL 环境变量";
    } else {
      const rows: Array<[string, string]> = [
        ["公司名称", body.company],
        ["爆款产品（SKU）", body.product],
        ["目标市场", body.market],
        ["年度营销预算", body.budget || "未填写"],
        ["当前卡点", body.pain],
        ["申请类型", intentLabel],
        ["提交时间", createdAt],
      ];
      const html = `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#16323A;line-height:1.6">
          <h2 style="margin:0 0 16px;font-size:18px">官网新留资 · ${esc(intentLabel)}</h2>
          <table style="border-collapse:collapse;width:100%;max-width:640px">
            ${rows
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:8px 12px;background:#F3FAFB;border:1px solid #E3EEF0;font-weight:600;width:150px;vertical-align:top">${esc(
                    k
                  )}</td><td style="padding:8px 12px;border:1px solid #E3EEF0;white-space:pre-wrap">${esc(v)}</td></tr>`
              )
              .join("")}
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#6B7F85">来自 dadafuture.com 官网表单</p>
        </div>`;

      try {
        const res = await fetch(RESEND_ENDPOINT, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from,
            to: [to],
            subject: `【官网留资】${body.company} · ${intentLabel}`,
            html,
          }),
        });
        if (res.ok) {
          mailOk = true;
        } else {
          mailError = `${res.status} ${await res.text()}`;
        }
      } catch (err) {
        mailError = err instanceof Error ? err.message : String(err);
      }
    }

    if (!mailOk) {
      console.error("[contact] 邮件发送失败:", mailError);
    }
    console.log("[contact] new lead:", {
      company: body.company,
      product: body.product,
      market: body.market,
      budget: body.budget,
      pain: body.pain,
      intent,
      mail: mailOk,
      time: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, mail: mailOk });
  } catch {
    return NextResponse.json({ ok: false, error: "请求格式错误" }, { status: 400 });
  }
}
