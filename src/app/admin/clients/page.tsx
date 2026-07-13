import { sql } from "@/lib/db";
import { segments } from "@/lib/data";

export const dynamic = "force-dynamic";

interface ClientRow {
  id: number;
  created_at: string;
  segment: string;
  name: string;
  organization: string;
  email: string;
  phone: string | null;
  country: string;
  details: Record<string, unknown>;
}

const segmentLabels: Record<string, string> = Object.fromEntries(
  segments.map((s) => [s.id, s.shortName])
);

export default async function AdminClientsPage({
  searchParams,
}: {
  searchParams: Promise<{ segment?: string }>;
}) {
  const { segment } = await searchParams;
  const validSegment = segments.some((s) => s.id === segment) ? segment : undefined;

  const rows = (validSegment
    ? await sql<ClientRow[]>`
        SELECT * FROM clients WHERE segment = ${validSegment} ORDER BY created_at DESC
      `
    : await sql<ClientRow[]>`
        SELECT * FROM clients ORDER BY created_at DESC
      `);

  return (
    <div className="min-h-screen bg-white text-black p-6 sm:p-10">
      <h1 className="text-2xl font-semibold uppercase tracking-wide mb-8">
        Client Registrations
      </h1>

      <div className="flex flex-wrap gap-3 mb-8">
        <a
          href="/admin/clients"
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border ${
            !validSegment ? "bg-black text-white border-black" : "border-black/20"
          }`}
        >
          All ({rows.length})
        </a>
        {segments.map((s) => (
          <a
            key={s.id}
            href={`/admin/clients?segment=${s.id}`}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border ${
              validSegment === s.id ? "bg-black text-white border-black" : "border-black/20"
            }`}
          >
            {s.shortName}
          </a>
        ))}
      </div>

      <div className="overflow-x-auto border border-black/15">
        <table className="w-full text-sm text-left">
          <thead className="bg-black/5">
            <tr>
              <th className="p-3 font-semibold whitespace-nowrap">Date</th>
              <th className="p-3 font-semibold whitespace-nowrap">Segment</th>
              <th className="p-3 font-semibold whitespace-nowrap">Name</th>
              <th className="p-3 font-semibold whitespace-nowrap">Organization</th>
              <th className="p-3 font-semibold whitespace-nowrap">Email</th>
              <th className="p-3 font-semibold whitespace-nowrap">Phone</th>
              <th className="p-3 font-semibold whitespace-nowrap">Country</th>
              <th className="p-3 font-semibold whitespace-nowrap">Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-black/10 align-top">
                <td className="p-3 whitespace-nowrap text-black/60">
                  {new Date(row.created_at).toLocaleString()}
                </td>
                <td className="p-3 whitespace-nowrap">
                  {segmentLabels[row.segment] ?? row.segment}
                </td>
                <td className="p-3 whitespace-nowrap">{row.name}</td>
                <td className="p-3 whitespace-nowrap">{row.organization}</td>
                <td className="p-3 whitespace-nowrap">{row.email}</td>
                <td className="p-3 whitespace-nowrap">{row.phone ?? "—"}</td>
                <td className="p-3 whitespace-nowrap">{row.country}</td>
                <td className="p-3 max-w-xs">
                  <pre className="whitespace-pre-wrap text-xs text-black/70">
                    {JSON.stringify(row.details, null, 2)}
                  </pre>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="p-6 text-center text-black/50">
                  No registrations yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
