# Nellai Kannan Digital Archive

A bilingual (English / Tamil) Next.js archive project designed as an editorial literary museum. It includes 11 routes, shared responsive navigation, persistent language selection, a searchable book catalogue, a source-labelled timeline, media links, a photo gallery with fallbacks, and a research references page.

## Requirements
- Windows 11
- Node.js 20.9 or later (Node.js 22 LTS recommended)
- Visual Studio Code
- Internet connection for installing packages, Google Fonts, and externally hosted photographs / linked media

## Run in VS Code (Windows 11)
1. Install Node.js LTS from https://nodejs.org/ and restart VS Code after installation.
2. Extract `nellai-kannan-digital-archive.zip` to a folder you can find, such as `Documents`.
3. Open VS Code → **File → Open Folder** → select `nellai-kannan-digital-archive`.
4. Open **Terminal → New Terminal**.
5. Run:

   ```powershell
   node -v
   npm -v
   npm install
   npm run dev
   ```

6. Open **http://localhost:3000** in your browser.
7. To stop the server, return to the terminal and press `Ctrl + C`.

## Production build

```powershell
npm run build
npm start
```

Then open http://localhost:3000.

## Project structure

- `app/` – Next.js routes and global styles
- `components/` – shared header, footer, language provider, page renderer, catalogue and gallery
- `data/archive.ts` – bilingual text, book catalogue, timeline, media and research sources
- `public/images/` – reserved for locally licensed archival photographs (no third-party image has been copied into this folder)

## Pages

`/` · `/biography` · `/literary` · `/books` · `/timeline` · `/interviews` · `/awards` · `/public-life` · `/memorials` · `/gallery` · `/sources`

## Language

Use the EN / தமிழ் control in the header. The selection is saved in browser local storage and remains selected while navigating the site.

## Research and rights notes

- Birth date: the Tamil Digital Library records 27 January 1945; Wikimedia metadata has also circulated 26 January 1945. The discrepancy is disclosed rather than silently resolved.
- Death: 18 August 2022, Tirunelveli, supported by multiple news reports and the Tamil Digital Library record.
- Works nationalisation: Tamil Nadu government nationalisation is recorded as 2022 by the Tamil Digital Library.
- Statue: the September 2026 unveiling is attributed to the Dinamani report published 21 September 2026.
- The book list is a discovery catalogue. Entries marked as needing verification are not presented as digitised books. Bibliographic details such as ISBN, publisher, edition, year and page count are omitted unless confirmed.
- Gallery images are loaded from the publishers' original URLs. They may fail if a publisher changes its URL, blocks hotlinking or removes the image. Each item has a fallback. These photographs are not claimed to be public domain; obtain permission or check the applicable licence before republishing them.
- This project does not embed or redistribute third-party audio, video, book scans or copyrighted news photographs. It links to their original publishers / catalogues.
- Google Fonts and remote photographs require an internet connection. The core app has no database, Supabase project, paid API key or secret environment variable requirement.

## Verification disclaimer

The source files were reviewed for route structure and TypeScript/JSX consistency. Run `npm install` and `npm run build` on your computer to verify against the packages downloaded in your environment. If this delivery environment cannot access npm registries, a successful production build cannot be claimed here.
