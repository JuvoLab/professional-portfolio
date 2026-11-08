window.portfolio = {
  "name": "Jeff Mutuku",
  "headline": "Performance Scientist",
  "focus": "Exercise physiology · Sports science · Data analytics",
  "intro": "Connecting physiological assessment, applied research, and analytical tools to better understand human performance.",
  "about": "I am a performance scientist working across exercise physiology, applied sports science, and research analytics. My work combines physiological assessment, NCAA Division I performance experience, collaborative study leadership, and data-driven reporting. I am interested in research and R&D that connect careful measurement with useful insights into human performance.",
  "email": "Jffmutuku@gmail.com",
  "linkedin": "https://www.linkedin.com/in/jeffmutuku",
  "education": [
    {
      "degree": "M.S. in Kinesiology",
      "detail": "Concentration: Exercise Science",
      "school": "California Baptist University",
      "dates": "May 2024 – August 2026",
      "note": "GPA 3.89 / 4.00"
    },
    {
      "degree": "B.A. in Sports Management",
      "detail": "Cum Laude · Dean’s List",
      "school": "Notre Dame College",
      "dates": "Fall 2019 – December 2022",
      "note": "GPA 3.70 / 4.00"
    }
  ],
  "experience": [
    {
      "role": "Performance Scientist",
      "org": "Wellth Performance",
      "dates": "May 2026 – Present",
      "text": "Conduct metabolic assessments including resting metabolic rate and maximal exercise testing, alongside DEXA and 3D body-composition assessments. Develop AI-assisted metabolic interpretation and reporting workflows and contribute to body-composition research and analytics.",
      "tools": "Indirect calorimetry · DEXA · Physiological reporting"
    },
    {
      "role": "Performance Coach Intern",
      "org": "California Baptist University · Athletic Performance Center",
      "dates": "July 2025 – May 2026",
      "text": "Supported performance operations across 12 NCAA Division I athletic programs. Conducted countermovement jump assessments and supported workload monitoring with STATSports GPS and accelerometry alongside performance staff and coaches.",
      "tools": "Force plates · CMJ testing · STATSports GPS"
    }
  ],
  "skills": [
    {
      "title": "Physiological assessment",
      "items": "VO₂max and maximal exercise testing, resting metabolic rate, DEXA, 3D body scanning"
    },
    {
      "title": "Research methods",
      "items": "Human-subject testing, protocol execution, participant screening, informed consent, data quality and scientific communication"
    },
    {
      "title": "Biomechanics & monitoring",
      "items": "Countermovement jump assessment, ground reaction force, impulse, accelerometry and GPS workload monitoring"
    },
    {
      "title": "Analysis & development",
      "items": "Python, Pandas, NumPy, SciPy, SQL / SQLite, exponential modeling, Plotly, HTML, CSS and JavaScript"
    },
    {
      "title": "Reporting tools",
      "items": "Excel, Power BI, Streamlit, Git/GitHub and Vercel"
    }
  ],
  "credentials": [
    "NASM Certified Personal Trainer",
    "California Department of Public Health X-Ray Technician Permit",
    "STATSports Certified GPS User",
    "FIFA Diploma in Football Medicine"
  ],
  "professionalDevelopment": "NSCA member · CPSS exam candidate (2026)",
  "projects": [
    {
      "id": "soccer",
      "number": "01",
      "category": "Football analytics · Independent project",
      "title": "Premier League Performance Intelligence",
      "short": "A reproducible Python and SQL workflow comparing league results with shot quality across 380 Premier League matches.",
      "status": "Source published · Local dashboard verified",
      "tags": [
        "Python + SQL",
        "Reproducible analysis",
        "Streamlit"
      ],
      "question": "How closely do team results align with the quality of chances created and conceded, and how does that gap evolve within a season?",
      "methods": "StatsBomb Open Data: all 380 matches, 20 clubs and 38 appearances per club in the 2015/16 Premier League. A pinned source snapshot feeds validated event ingestion and relational SQLite tables. SQL joins provide traceable inputs to Pandas, NumPy, Plotly and Streamlit.",
      "analysis": "Compare points, goal difference (GD), shot expected-goal difference (xGD) and the residual GD − xGD. Examine full-window rolling means, cumulative gaps and separate first/second 19-appearance blocks. A seeded 5,000-resample match bootstrap illustrates variability under an independent-match assumption.",
      "findings": "The project reports a descriptive correlation of r = 0.8989 between points and xGD across 20 teams. Crystal Palace’s GD − xGD gap changed from +12.34 after 19 appearances to −1.58 after 38, illustrating how a full-season total can hide a changing trajectory.",
      "limitations": "One historical season from one provider. Shared fixtures, schedule, game state and dependent observations constrain interpretation. The residual does not isolate luck or repeatable skill; this is not a predictive model or a measure of physiological workload. The dashboard is locally verified, with no hosted application deployed.",
      "contribution": "Project development under JuvoLab: source evaluation, event-data validation, relational SQL modeling, Python analysis, interactive reporting and documented reproducibility. The work extends physiological assessment experience into inspectable football analytics.",
      "competencies": "Relational SQL joins and data modeling; Python ingestion and quality checks; temporal analysis and uncertainty communication; interactive reporting; reproducible environments and automated validation. The repository review documents five passing tests, reconciliation of all 380 matches, and matching hashes for 381 freshly retrieved source files. These are project-specific checks, not a claim of production deployment or advanced machine-learning expertise.",
      "link": "https://github.com/JuvoLab/premier-league-performance-intelligence",
      "linkText": "Explore code & reproducibility",
      "resources": [
        {
          "label": "Read technical case study",
          "url": "https://github.com/JuvoLab/premier-league-performance-intelligence/blob/main/docs/case-study.md"
        },
        {
          "label": "Inspect validation record",
          "url": "https://github.com/JuvoLab/premier-league-performance-intelligence/blob/main/docs/qa-review.md"
        }
      ],
      "preview": "soccer-performance-preview.png",
      "source": "Project repository, technical case study and QA record, reviewed November 8, 2026. Data: StatsBomb Open Data. Independent noncommercial research; no affiliation or endorsement. No underlying event data or database is distributed here.",
      "role": "Independent research & analytics project · JuvoLab",
      "dates": "November 2026",
      "context": "Historical football analysis · Public code; dashboard runs locally",
      "resumeBullets": [
        "Developed a traceable Python/SQLite workflow from validated event data to team and player analysis.",
        "Documented reproducibility, automated checks, temporal comparisons and an interactive Streamlit interface."
      ]
    },
    {
      "id": "pap",
      "number": "02",
      "category": "Performance research",
      "title": "Warm-up strategies & sprint swimming",
      "short": "Exploring acute responses to upper-body, lower-body, and combined conditioning activities in collegiate swimmers.",
      "status": "Study & dashboard documented",
      "tags": [
        "PAP",
        "Accelerometry",
        "Plotly.js"
      ],
      "question": "How do different dryland conditioning activities influence takeoff power and 25-yard freestyle sprint performance?",
      "methods": "The resume reports 12 NCAA Division I swimmers and 72 experimental trials. The project documentation describes medicine ball slams, weighted drop jumps, and a combined condition, compared with baseline. Takeoff power and sprint time were assessed with accelerometry and digital timing.",
      "analysis": "The documented dashboard compares group-level and individual response profiles, including pre/post power and sprint time. The project uses HTML, CSS, JavaScript and Plotly.js.",
      "findings": "A final statistical report is not included in the current portfolio evidence. The combined-condition benefit is a study hypothesis, not a verified finding presented here.",
      "limitations": "Small, sport-specific sample. The protocol, inferential analysis and participant-level data are not published on this portfolio. Dashboard summaries are descriptive and should not be interpreted as evidence of causal benefit or statistical significance.",
      "contribution": "Performance researcher and co-principal investigator supporting a master’s thesis. Contributed to data collection, data hygiene, and collaborative study work. Independently initiated and developed the interactive dashboard to communicate group-level and individual responses. IRB submission and approval administration were handled by other study team members.",
      "link": "https://portfolio-site-two-rho-96.vercel.app/",
      "linkText": "Open existing dashboard",
      "source": "PAP project documentation, supplied resume, and owner-confirmed contribution and study dates (November 2026).",
      "role": "Performance Researcher & Co-Principal Investigator",
      "dates": "January – May 2026",
      "context": "Collaborative research supporting a master’s thesis",
      "resumeBullets": [
        "Supported a master’s thesis through data collection, data hygiene, and collaborative study work.",
        "Independently initiated and developed the interactive HTML, CSS, JavaScript, and Plotly dashboard."
      ]
    },
    {
      "id": "hrr",
      "number": "03",
      "category": "Exercise physiology",
      "title": "Seasonal heart-rate recovery",
      "short": "Comparing post-exercise recovery kinetics in Division I swimmers during in-season and off-season testing.",
      "status": "Research poster completed",
      "tags": [
        "HRR",
        "Bruce protocol",
        "Curve fitting"
      ],
      "question": "Does heart-rate recovery differ between in-season and off-season conditions in collegiate swimmers?",
      "methods": "Eleven swimmers completed maximal Bruce-protocol treadmill testing in each season. Recovery heart rate was recorded every five seconds for five minutes while participants remained seated.",
      "analysis": "Recovery curves were modeled using an exponential decay equation. The poster reports group mean recovery time constants (tau) with standard errors.",
      "findings": "Reported tau was 85.6 ± 6.9 seconds in-season and 90 ± 8.2 seconds off-season in the poster abstract; the poster table and resume give 90.8 ± 8.2 seconds off-season. This source discrepancy requires reconciliation. Statistical significance is not established by the available poster output.",
      "limitations": "Small sample; seasonal comparison does not isolate training effects. A longer recovery time constant alone does not establish a loss of aerobic capacity. Full paired statistical output, code and model diagnostics are not included.",
      "contribution": "Co-principal investigator: contributed to participant recruitment, study methodology, data collection, data quality, interpretation of results, and development of conclusions. IRB submission and approval administration were handled by other study team members. Contributed to recovery-kinetics analysis and scientific communication.",
      "poster": "hrr-poster.png",
      "source": "Seasonal Variations of Heart Rate Recovery in Division I NCAA Swimmers, California Baptist University research poster. Presented at the University Research Colloquium, April 2026. Contribution and dates confirmed by the owner.",
      "role": "Co-Principal Investigator",
      "dates": "January – May 2026",
      "context": "University Research Colloquium · California Baptist University · April 2026",
      "resumeBullets": [
        "Contributed to recruitment, methodology, physiological testing, data quality, and interpretation of findings.",
        "Contributed to recovery-kinetics analysis, conclusions, and scientific communication."
      ]
    },
    {
      "id": "bfr",
      "number": "04",
      "category": "Collaborative research",
      "title": "BFR walking & cardiometabolic markers",
      "short": "A four-week study of low-frequency blood-flow-restriction walking in overweight and obese adults.",
      "status": "Research poster completed",
      "tags": [
        "BFR",
        "Intervention study",
        "Scientific communication"
      ],
      "question": "Can once-weekly, low-intensity BFR walking influence functional walking capacity and cardiometabolic markers?",
      "methods": "The poster describes 20 sedentary adults randomized to BFR walking or control groups, with 10 participants per group. Walking sessions lasted 10 minutes once weekly for four weeks. Measures included six-minute walk distance, blood pressure and anthropometrics.",
      "analysis": "The poster lists repeated-measures analysis, post-hoc comparisons and effect-size assessment. Underlying statistical code and participant-level records are not included.",
      "findings": "The poster reports an increase in six-minute walk distance in the intervention group and no between-group differences in several cardiometabolic markers. Detailed estimates should be interpreted with the original report and methodological limitations.",
      "limitations": "Small sample and short intervention. The printed MAP formula and cuff-pressure terminology require clarification before independent reuse. The original poster is retained as a historical research artifact, not a corrected protocol or clinical recommendation.",
      "contribution": "Co-principal investigator: contributed to participant recruitment, study methodology, data collection, data quality, interpretation of results, and development of conclusions. IRB submission and approval administration were handled by other study team members.",
      "poster": "bfr-poster.png",
      "source": "The Effect of Low-Frequency BFR Walking on Cardiometabolic Markers in Overweight and Obese Individuals, California Baptist University research poster. Presented at the University Research Colloquium, April 2025. Contribution and dates confirmed by the owner.",
      "role": "Co-Principal Investigator",
      "dates": "January – May 2025",
      "context": "University Research Colloquium · California Baptist University · April 2025",
      "resumeBullets": [
        "Contributed to recruitment, methodology, data collection, and data quality.",
        "Helped interpret results and develop conclusions with the study team."
      ]
    }
  ],
  "ongoing": {
    "title": "Visceral fat & regional body composition",
    "status": "Ongoing manuscript development",
    "description": "Retrospective body-composition research examining visceral adipose tissue, age, and regional fat distribution. Current work focuses on transparent methods, data quality, model evaluation, and scientific review.",
    "note": "Manuscript under development. Findings and research documents are not yet available for public dissemination."
  },
  "achievements": [
    "NCAA Division I athlete",
    "Scholastic All-American · 2022",
    "Cum Laude graduate"
  ],
  "personal": {
    "rugby": "Represented Kenya at U19 and U20 level, including the Junior World Rugby Trophy in Brazil.",
    "taekwondo": "Junior black belt in Taekwondo.",
    "video": "https://www.youtube.com/watch?v=wt176hEl_lQ",
    "videoLabel": "Watch my RugbyPass profile · 2:07"
  }
};
