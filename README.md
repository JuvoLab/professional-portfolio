# Jeff Mutuku — Professional Portfolio

Human performance research, exercise physiology, sports science and analytical tools.

## Website

GitHub Pages: https://juvolab.github.io/professional-portfolio/

Buildless HTML/CSS/JavaScript. No framework, package installation, backend, secrets or analytics trackers. Google Fonts is optional; system font fallbacks are provided.

## Research

- **PAP & sprint swimming:** collaborative research with 12 NCAA Division I swimmers, supported by an independently developed interactive dashboard. [Swimming dashboard](https://portfolio-site-two-rho-96.vercel.app/).
- **Seasonal heart-rate recovery:** in-season and off-season recovery-kinetics research in 11 collegiate swimmers; presented at the University Research Colloquium, April 2026.
- **BFR walking:** a four-week randomized study in 20 sedentary adults examining functional walking capacity and cardiometabolic markers; presented at the University Research Colloquium, April 2025.
- **Premier League Performance Intelligence:** independent historical football analytics using Python, SQL / SQLite, Plotly, and Streamlit. [Project repository](https://github.com/JuvoLab/premier-league-performance-intelligence).

The website includes narrative case studies, research presentation images, and a football dashboard preview. It includes no participant-level data. Restricted Wellth DEXA findings, reports, databases and employer-owned source code are excluded. No open-source license is asserted over coauthored research artifacts.

## Updating the portfolio

1. Edit `content.js` for biography, experience, education, credentials and research case studies. Both the home page and printable resume use this file.
2. Edit `index.html` for the introductory layout, technical project overview and contact section. Keep these consistent with content changes.
3. Add only public-use-authorized figures or posters. Update the matching project `poster` filename.
4. Check desktop and mobile, open each case study, test keyboard navigation, external links and resume printing.
5. Commit changes to `main`. GitHub Pages publishes from the repository root.

The web resume is available at `resume.html`. Both Download PDF and Open PDF / Print use `Jeff-Mutuku-Resume.pdf`, an unchanged copy of the owner's original `JeffMutuku_Resume.pdf` from the Career folder. The PDF viewer provides printing and Save as PDF with the original document layout. The web overview is maintained separately and may contain newer owner-confirmed information than the original PDF.

To replace the downloadable resume, upload your chosen PDF under the same filename, then update the PDF `?v=` version in both resume action links. The portfolio does not regenerate or automatically modify the original PDF. Earlier PDF generation helpers are not part of the current publishing workflow.

Education dates reflect the owner's November 8, 2026 correction: undergraduate Fall 2019–December 2022; master's May 2024–August 2026. Degree titles, roles and listed credentials are based on the supplied resume. Credential validity and detailed contribution records can be updated as supporting material becomes available.

## Preview locally

Serve this directory with a local static server and open `index.html`. For example, `python -m http.server 8765 --bind 127.0.0.1`.

There is no automatic synchronization with the Career folder. Original Career files remain unchanged. Maintain changes in this repository and commit them deliberately.

## November 2026 identity and research update

Performance Scientist is the primary title. The original angular JM vector mark and owner-supplied portrait support the existing visual direction. BFR ran January-May 2025 (University Research Colloquium, April 2025); HRR ran January-May 2026 (colloquium, April 2026); PAP ran January-May 2026 in support of a master's thesis. Contributions were confirmed by the owner, including co-principal investigator roles and independent dashboard initiative. IRB submission administration is not attributed to Jeff. The VAT manuscript remains internal; only ongoing-work metadata is public.

When content or scripts change, bump the shared `?v=` asset version in both HTML pages to prevent a browser from mixing old content with new code after deployment.

## Personal context

The homepage includes owner-confirmed achievements: NCAA Division I athlete, Scholastic All-American (2022), and Cum Laude. A small Beyond the Lab section includes Kenya U19/U20 rugby representation, the Junior World Rugby Trophy in Brazil, and a junior black belt in Taekwondo. The linked RugbyPass profile independently names Jeff Mutuku and mentions Kenya U19/U20 selections. This section uses a plain link instead of an autoplaying embedded video.


## Football analytics feature

Premier League Performance Intelligence is featured in research, applied analytics and the web resume. [Open the live dashboard](https://juvolab-premier-league.streamlit.app/). The main project action and preview link open the dashboard; the adjacent case study explains the question, methods, findings and practical application. Positioning emphasizes performance interpretation, trend analysis and communication for review rather than software engineering. Python and SQL remain supporting methods. Maintain text in content.js and the feature in index.html. The original PDF resume is unchanged. The preview includes StatsBomb source attribution; no raw event dataset or database is distributed here.
