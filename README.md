# Frontend Task

## Description
You are tasked with creating a frontend application that fetches token metadata and visualizes a price chart for a dashboard.
1. **Set up the project** (bonus points for using **Next.js** and **Tailwind CSS**).
2. **Implement a mock server-side API** with two endpoints:
    * One for getting token metadata from `data.json`. Should have pagination with 5 tokens per request.
    * One for getting token price data from `mockPriceData.json`. No need to pass an argument, just use the same data regardless of the token.
    * On the frontend, use state management to handle API calls.
3. **Create a landing page table** that lists token metadata:
    * Display all metadata (e.g., symbol, name, image, address) in a responsive table.
    * On screens smaller than 768px, show only the symbol and image.
    * Include a “Load More” button for pagination.
    * Make each table row clickable, linking to an individual asset page.
4. **Create an individual asset page** that displays the asset’s metadata and a price chart:
    * Show the token’s metadata.
    * Render a price chart using a charting library of your choice.
