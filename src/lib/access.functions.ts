import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const RequestSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  reason: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitAccessRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => RequestSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("access_requests").insert({
      full_name: data.fullName,
      email: data.email,
      organisation: data.organisation || null,
      reason: data.reason || null,
    });
    if (error) {
      console.error("access request insert failed", error.message);
      return { ok: false as const, message: "Could not send your request. Please try again." };
    }
    return {
      ok: true as const,
      message: "Request received. Rajshri will be in touch with an access passcode.",
    };
  });

export const verifyAccessPasscode = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => z.object({ passcode: z.string().max(120) }).parse(input))
  .handler(async ({ data }) => {
    const submitted = data.passcode.trim();
    if (!submitted) return { granted: false as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("access_settings")
      .select("passcode")
      .eq("id", 1)
      .maybeSingle();

    if (error || !row) {
      console.error("passcode lookup failed", error?.message);
      return { granted: false as const };
    }
    return { granted: submitted.toLowerCase() === row.passcode.trim().toLowerCase() };
  });
