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
      "category": "Applied football performance research",
      "title": "Premier League Performance Intelligence",
      "short": "Turning match results and chance-quality data into clear team comparisons, season trends, and practical questions for performance review.",
      "status": "Live dashboard · Completed analysis",
      "tags": [
        "Performance interpretation",
        "Season trends",
        "Interactive reporting"
      ],
      "question": "How closely do team results align with the quality of chances created and conceded, and how does that gap evolve within a season?",
      "methods": "The study examined 380 matches across 20 clubs in the 2015/16 Premier League using StatsBomb Open Data. Points, goals, and expected goals (xG, a measure of shot quality) were compared at team and season level. Python and SQL supported data preparation, while Plotly and Streamlit supported visual exploration.",
      "analysis": "Compare actual goal difference with expected-goal difference to identify where results and chance quality diverge. Review rolling trends, cumulative gaps, and first- versus second-half season profiles to distinguish a season total from the pattern behind it.",
      "findings": "Across 20 teams, points and expected-goal difference had a descriptive correlation of r = 0.8989. Crystal Palace’s gap between actual and expected-goal difference changed from +12.34 after 19 appearances to −1.58 after 38. That shift illustrates why a strong early results profile should be reviewed alongside the chances a team creates and concedes.",
      "limitations": "One historical season from one provider. Shared fixtures, schedule, game state, and dependent observations constrain interpretation. The goal-difference residual does not separate finishing, goalkeeping, and chance. Findings are descriptive and apply to the 2015/16 season.",
      "contribution": "Developed the research question, evaluated the data source, compared team and seasonal performance profiles, and translated the analysis into an interactive dashboard and case study under JuvoLab. The emphasis is on explaining what the data means and making it useful for performance review.",
      "competencies": "Applied match analysis, interpretation of expected-goal metrics, data quality assessment, trend analysis, evidence-based questioning, and visual communication. The project extends my physiological assessment background into football performance analysis and the communication of practical insights.",
      "link": "https://juvolab-premier-league.streamlit.app/",
      "linkText": "Open live dashboard",
      "resources": [],
      "preview": "soccer-performance-preview.png",
      "source": "Premier League Performance Intelligence · JuvoLab. Data: StatsBomb Open Data. Independent noncommercial research; no affiliation or endorsement.",
      "role": "Independent performance research project · JuvoLab",
      "dates": "November 2026",
      "context": "Historical football analysis · Live interactive dashboard",
      "resumeBullets": [
        "Compared results with chance quality across 380 matches to explain team performance patterns and changes over a season.",
        "Created an interactive dashboard that turns analysis into accessible comparisons and focused questions for performance review."
      ],
      "application": "Use the dashboard to frame a performance conversation: Are results supported by chance quality? Is a gap sustained or changing? Which periods deserve closer match review? These comparisons help prioritize questions for analysts and coaches; identifying causes still requires match footage and team context."
    },
    {
      "id": "pap",
      "number": "02",
      "category": "Performance research",
      "title": "Warm-up strategies & sprint swimming",
      "short": "Exploring acute responses to upper-body, lower-body, and combined conditioning activities in collegiate swimmers.",
      "status": "Study & interactive dashboard",
      "tags": [
        "PAP",
        "Accelerometry",
        "Plotly.js"
      ],
      "question": "How do different dryland conditioning activities influence takeoff power and 25-yard freestyle sprint performance?",
      "methods": "Twelve NCAA Division I swimmers completed 72 experimental trials comparing medicine ball slams, weighted drop jumps, and a combined conditioning activity with baseline. Takeoff power and 25-yard freestyle sprint time were assessed using accelerometry and digital timing.",
      "analysis": "Group-level and individual response profiles were compared across conditioning activities using pre/post takeoff power and sprint time. An interactive dashboard built with HTML, CSS, JavaScript, and Plotly.js supports exploration of these responses.",
      "findings": "The dashboard presents group and individual responses across conditioning activities, bringing takeoff power and sprint-time measures into a single comparative view.",
      "limitations": "The small, sport-specific sample limits generalization beyond collegiate swimmers. Dashboard comparisons are descriptive and do not establish a causal performance benefit.",
      "contribution": "Performance researcher and co-principal investigator supporting a master’s thesis. Contributed to data collection, data hygiene, and collaborative study work. Independently initiated and developed the interactive dashboard to communicate group-level and individual responses.",
      "link": "https://portfolio-site-two-rho-96.vercel.app/",
      "linkText": "Explore swimming dashboard",
      "source": "Collaborative master’s thesis research · January–May 2026.",
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
      "status": "Study completed · Colloquium presentation",
      "tags": [
        "HRR",
        "Bruce protocol",
        "Curve fitting"
      ],
      "question": "Does heart-rate recovery differ between in-season and off-season conditions in collegiate swimmers?",
      "methods": "Eleven swimmers completed maximal Bruce-protocol treadmill testing in each season. Recovery heart rate was recorded every five seconds for five minutes while participants remained seated.",
      "analysis": "Recovery curves were fitted with an exponential decay model to estimate the heart-rate recovery time constant (tau). Group mean time constants and standard errors were used to summarize in-season and off-season recovery profiles.",
      "findings": "The off-season recovery profile had a longer mean recovery time constant than the in-season profile, describing slower post-exercise heart-rate recovery in this sample.",
      "limitations": "The study included 11 swimmers. Seasonal comparisons are observational and cannot isolate the effects of training or establish changes in aerobic capacity.",
      "contribution": "Co-principal investigator: contributed to participant recruitment, methodology, data collection, data quality, interpretation of findings, and development of conclusions. Contributed to recovery-kinetics analysis and scientific communication.",
      "poster": "hrr-poster.png",
      "source": "Seasonal Variations of Heart Rate Recovery in Division I NCAA Swimmers · California Baptist University · University Research Colloquium, April 2026.",
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
      "status": "Study completed · Colloquium presentation",
      "tags": [
        "BFR",
        "Intervention study",
        "Scientific communication"
      ],
      "question": "Can once-weekly, low-intensity BFR walking influence functional walking capacity and cardiometabolic markers?",
      "methods": "Twenty sedentary adults were randomized to BFR walking or control groups, with 10 participants per group. Walking sessions lasted 10 minutes once weekly for four weeks. Assessments included six-minute walk distance, blood pressure, and anthropometric measures.",
      "analysis": "Changes over time and between groups were examined using repeated-measures analysis, post-hoc comparisons, and effect-size assessment.",
      "findings": "Six-minute walk distance increased in the BFR walking group. Several cardiometabolic markers showed no between-group differences over the four-week intervention.",
      "limitations": "The small sample and four-week intervention limit generalizability and conclusions about longer-term cardiometabolic adaptations.",
      "contribution": "Co-principal investigator: contributed to participant recruitment, methodology, data collection, data quality, interpretation of findings, and development of conclusions.",
      "poster": "bfr-poster.png",
      "source": "The Effect of Low-Frequency BFR Walking on Cardiometabolic Markers in Overweight and Obese Individuals · California Baptist University · University Research Colloquium, April 2025.",
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
