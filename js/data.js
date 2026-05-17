const SKILLS = [
  { title:'BI & Analytics Tools', icon:'📊', items:['Power BI','Tableau','Excel'] },
    { title: 'Data Analysis', icon: '🧪', items: ['Polars', 'Matplotlib', 'Plotly'] },
    { title: 'Data Engineering & Databases', icon: '🗄️', items: ['Oracle SQL', 'IBM Informix', 'SQL Server','MySQL','PostgreSQL'] },
  { title:'ETL & Data Integration', icon:'⚙️', items:['Data Factory','Pentaho','Power Query'] },
  { title:'Environment & Dev Tools', icon:'🛠️', items:['Visual Studio','Jupyter Notebook','GitHub','Anaconda','VS Code'] },
  { title:'Communication & Content', icon:'✒️', items:['Technical Writer','Storytelling','Data Visualisation','Business-Technical Liaison'] }
];

const PROJECTS = {
  //UI: [
  //  {title:'UI Concept 1', img:'assets/img/projects-1.png', skills:'Figma, Design Systems, UX'},
  //  {title:'UI Concept 2', img:'assets/img/projects-2.png', skills:'Wireframes, Prototyping'},
  //  {title:'UI Concept 3', img:'assets/img/projects-3.png', skills:'Dashboard UI, Product thinking'}
  //],
  Reporting: [
        {
          title: 'AI Without Borders: A Global View of Openness',
          img: 'assets/reporting/ai_adoption.jpg',
          description: `This time, it’s all about AI — the big enemy for some, a supportive ally for others. But to truly understand how people feel about AI, 
           we need to do what we do best: analyze the data and uncover insights that might not be obvious at first glance.<br><br>
           <b>First place in the RomanianDATA Tribe May 2025 data visualization challenge.</b>`,
          skills: 'Plotly, Polars, Storytelling, Data Cleaning, Storytelling, Data Cleaning',
          link: 'https://github.com/ElenaD25/RomanianData-Tribe--May-2025-Challenge'
    },
        {
            title: 'Dandelion of Returns: Packaging per Person, 2025',
            img: 'assets/reporting/recycle.jpg',
            description: `Dashboard to visualize packaging per person across Romanian counties. Each golden tip in the dandelion chart represents a county’s contribution <br><br>
            The dandelion metaphor shows that while a few counties dominate, every seed matters in building a sustainable circular system.<br>`,
            skills: 'Plotly, Polars, Storytelling, Data Cleaning, Data visualization',
            link: 'https://www.linkedin.com/posts/elena-luchiana-dumitrescu_romaniandata-romaniandatatribe-datavisualization-activity-7370520549405593600-3ua6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADEVf44BsL-pZy8pfz891H29JWwO18yEXdw'
        },
        {
            title: 'Remote work in Europe: Still a living dream?',
            img: 'assets/reporting/remote_work.jpg',
            description: `This dashboard compares remote work reporting rates across European countries between 2022 and 2024,
            highlighting how adoption has changed over time. It shows country-by-country trends.<br> <br>
            <b>First place in the RomanianDATA Tribe Aug 2025 data visualization challenge.</b>`,
            skills: 'Plotly, Polars, Storytelling, Data Cleaning, Data visualization',
            link: 'https://github.com/ElenaD25/RomanianData-Tribe-August-2025-Challenge'
        },
        {
            title: 'Romania on wheels: what type of fuel dominates?',
            img: 'assets/reporting/romania-pe-roti.jpg',
            description: `This analysis explores the distribution of vehicle fuel types across Romania by county, highlighting regional patterns and dominant fuel preferences. <br>
            Insight: Traditional fuels still dominate the landscape, but the shift toward alternative energy sources is gradually emerging.<br><br>`,
            skills: 'Tableau, Polars, Excel, Storytelling, Data Cleaning, Data visualization',
            link: 'https://public.tableau.com/app/profile/luchiana.dumitrescu/viz/Romaniaperoti-RomanianDataTribechallengeApril2026/Romniaperoi'
        },
        {
            title: 'RoMotion - Romania in Motion',
            img: 'assets/reporting/romanian-sky.jpg',
            description: `This analysis turns flight statistics into a visual overview of the country’s airports.
            Otopeni leads with 7.3M + international and 477K domestic flights, while Cluj and Iași emerge as strong regional hubs.
            Over 85 % of international traffic is concentrated in just three airports, highlighting strong centralization but also clear potential for regional expansion.`,
            skills: 'Tableau, Polars, Excel, Storytelling, Data Cleaning, Data visualization',
            link: 'https://public.tableau.com/app/profile/luchiana.dumitrescu/viz/RoMotion-RomaniainMotion/Dashboard1'
        },
        {
            title: 'Robots Overview and Process Insights',
            img: 'assets/reporting/robots_overview_dash.png',
            description: `This dashboard provides a comprehensive overview of RPA robot activity and process performance,
            helping monitor operational efficiency, workload distribution, execution success rates, and robot utilization. <br> <br>
            The dashboard is designed to support operational monitoring, capacity planning, bottleneck detection, and optimization of the RPA infrastructure.`,
            skills: 'Power BI, Polars, Data Cleaning, Data visualization, Data Modeling',
            link: 'https://medium.com/your-article-2'
        },
        {
            title: `Romania''s Road to Euro 2024`,
            img: 'assets/reporting/uefa-2024.jpg',
            description: `EURO 2024 has officially kicked off, and Romania is celebrating a strong start.
            As part of the excitement, the Romanian Football Federation launched a data challenge for the tournament, which was enthusiastically joined by data enthusiasts, including myself.
            It was a great opportunity to explore football data and bring insights to life through visualization.`,
            skills: 'Tableau, Polars, Excel, Storytelling, Data Cleaning, Data visualization',
            link: 'https://public.tableau.com/app/profile/luchiana.dumitrescu/viz/UEFAEuro2024-Romania/Dashboard1'
        },
        {
            title: 'Olympic Games - Summer & Winter| Romania',
            img: 'assets/reporting/olimpic_games.jpg',
            description: `Countdown to the Olympic Games! <br> >br>
            With the Olympic Games approaching, the RomanianDATA Tribe continues the momentum by launching a new monthly data challenge,
            bringing together data enthusiasts to explore fresh datasets, build engaging visualizations, and uncover meaningful insights through data storytelling.`,
            skills: 'Tableau,Polars, Excel, Storytelling, Data Cleaning, Data visualization ',
            link: 'https://public.tableau.com/app/profile/luchiana.dumitrescu/viz/Olympics_Dash_17212536655420/OlympicGames-SummerWinterRomania'
        },
        {
            title: 'Netflix - Overview Analysis',
            img: 'assets/reporting/netflix-pbi.jpg',
            description: `This analysis explores Netflix’s evolution from 2010 to 2021 visualized in Power BI. 
            It presents key insights such as total content volume, the balance between movies and TV shows, rating distributions, and genre popularity. The report also highlights top producing countries, most active directors, and average viewing durations,
            offering a comprehensive overview of Netflix content trends and audience engagement.`,
            skills: 'Power BI, Excel, Storytelling, Data Cleaning, Data visualization',
            link: 'https://github.com/ElenaD25/PowerBI-projects/blob/main/Netflix-README.md'
        }

  ]
  //,EDA: [
  //  {title:'EDA Notebook 1', img:'assets/img/blog-3.png', skills:'Python, Pandas, Matplotlib'},
  //  {title:'EDA Notebook 2', img:'assets/img/blog-2.png', skills:'Jupyter, Data Cleaning'},
  //  {title:'EDA Notebook 3', img:'assets/img/blog-4.png', skills:'Exploration, Visualization'}
  //]
};

const BLOGS = [
    {
        title: 'SQL Essentials: GROUP BY vs. PARTITION BY explained',
        img: 'assets/blog/groupby.png',
        featured: true,
        descr: `This article follows the author’s learning journey in SQL, starting from its simplicity and gradually moving toward more advanced concepts such as window functions. <br><br>
        Initially, SQL appears intuitive and easy to understand, 
        but complexity arises when working with analytical features like window functions, especially the PARTITION BY clause. <br> <br>
        The article aims to clarify confusion by explaining the differences between GROUP BY and PARTITION BY, two SQL constructs that often seem similar but serve very different purposes. <br> <br>
        GROUP BY is used to aggregate data by collapsing rows into summary results based on one or more columns.It is ideal for generating totals, counts, or averages per group but reduces the level of detail in the output.In contrast, PARTITION BY is used within window functions to divide data into logical segments while preserving all rows, allowing calculations to be performed across each subset without losing detail. <br> <br>
        Through practical examples using transaction data, the article demonstrates how GROUP BY can create limitations when both aggregated and detailed data are needed, often requiring complex query adjustments.On the other hand, PARTITION BY provides a more flexible approach, enabling calculations like running totals, rankings, and row comparisons using functions such as SUM, RANK, and LAG.
        The article concludes that GROUP BY is best suited for high - level summaries, while PARTITION BY supports advanced analytical use cases where maintaining row- level detail is essential.Understanding when to use each improves both query design and analytical capability in SQL.`,
        link: 'https://medium.com/code-like-a-girl/sql-essentials-group-by-vs-partition-by-explained-6e9b0a69bd02'
    },
    {
        title: 'LAG and LEAD in SQL: Mastering Time Travel for Better Data Insights',
        img: 'assets/blog/lag_vs_lead.png',
        descr: `The article presents SQL LAG and LEAD window functions for analyzing sequential data. LAG accesses previous rows, LEAD accesses next rows using the OVER clause.
        They help compare transactions to detect trends and changes. 
        Common in time-series analysis, they improve insights into behavior. Indexing and partitioning enhance performance on large datasets.`,
        link: 'https://code.likeagirl.io/lag-and-lead-in-sql-mastering-time-travel-for-better-data-insights-2421cd6098cc'
    },
    {
        title: 'Real-life analogies that help you choose between SQL Views vs Temporary Tables',
        img: 'assets/blog/views_temp_tables.png',
        descr: `The article explains SQL VIEWs and temporary tables using real-world analogies. 
        Views are reusable saved queries that simplify and secure data access, while temporary tables store short-term intermediate results for transformations and performance optimization.
        It highlights when to use each: views for abstraction and reuse, temp tables for data processing tasks.`,
        link: 'https://medium.com/code-like-a-girl/sql-views-vs-temporary-tables-explained-with-real-life-analogies-609e1b077545'
    },
    {
        title: 'Avoid the Oops: DELETE and TRUNCATE Made Easy',
        img: 'assets/blog/delete.png',
        descr: `The article explains the differences between SQL DELETE and TRUNCATE using practical examples. 
        DELETE removes specific rows using conditions like WHERE, while TRUNCATE removes all rows quickly while keeping the table structure. 
        It highlights performance, safety risks, and use cases such as cleaning duplicates, NULL values, or resetting tables.`,
        link: 'https://medium.com/code-like-a-girl/avoid-the-oops-delete-and-truncate-made-easy-e493ac4dfc5b'
    },
    {
        title: 'Curious for more?',
        img: 'assets/blog/curious.png',
        descr: `Curious to dive deeper into SQL concepts and real-world data tricks? <br> <br>
        There’s a lot more waiting for you beyond this snippet.Each article breaks down complex ideas into simple, practical insights you can actually use in your work.`,
        link: 'https://medium.com/@luchianadumitrescu'
    }
];
