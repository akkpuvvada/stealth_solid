// src/components/solid/InformationTables.tsx
import { createSignal, onMount, Show } from "solid-js";
import { type Component, createResource } from "solid-js";
import InfoTable from "./InfoTable";
import type { Column, TableRowData } from "../../types";

// Define your table columns
const columns: Column[] = [
  { key: "no", label: "No." },
  { key: "item", label: "Item" },
  { key: "dateObtained", label: "Date Obtained" },
  { key: "tag", label: "Tag" },
  { key: "index", label: "Index" },
  { key: "notes", label: "Notes" },
  { key: "hyperlink", label: "Hyperlink" },
];

const InformationTables: Component = () => {
  const [financialData, setFinancialData] = createSignal<any>(null);
  const [corporateData, setCorporateData] = createSignal<any>(null);
  const [loading, setLoading] = createSignal(true);

  onMount(async () => {
    // Use window.location.origin to construct the absolute URL to the JSON file
    const url1 = new URL('/api/financialData', window.location.origin).toString();
    const url2 = new URL('/api/corporateData', window.location.origin).toString();

    try {
      const [response1, response2] = await Promise.all([
        fetch(url1),
        fetch(url2)
      ]);
      // Check for errors in the responses
      if (!response1.ok) {
        throw new Error(`Error fetching API 1: ${response1.statusText}`);
      }
      if (!response2.ok) {
        throw new Error(`Error fetching API 2: ${response2.statusText}`);
      }

      // Parse both JSON responses concurrently
      const [data1, data2] = await Promise.all([
        response1.json(),
        response2.json()
      ]);

      // Update the signals with fetched data
      setFinancialData(data1);
      setCorporateData(data2);
    } catch (error) {
      console.error("Error fetching data from APIs:", error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div class="w-full mx-auto p-4 bg-slate-100 max-w-[1080px]">
      <Show when={!loading()} fallback={<div>Loading...</div>}>
        <div class="bg-white shadow rounded-lg p-2 mb-8">
          <InfoTable
            title="Corporate Information"
            columns={columns}
            data={corporateData() ?? []}
            headerFirstCellClassName="bg-mint-500 border-b border-mint-500 text-white"
          />
        </div>
      </Show >

      <Show when={!loading()} fallback={<div>Loading...</div>}>
        <div class="bg-white shadow rounded-lg p-2 mb-8">
          <InfoTable
            title="Financial Information"
            columns={columns}
            data={financialData() ?? []}
            headerFirstCellClassName="bg-mint-500 border-b border-mint-500 text-white"
          />
        </div>
      </Show >
    </div >
  );
};

export default InformationTables;
