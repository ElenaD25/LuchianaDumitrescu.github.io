const SKILLS = [
  { title:'BI & Analytics Tools', icon:'📊', items:['Power BI','Tableau','Excel'] },
  { title:'Data Analysis', icon:'🧪', items:['Polars','Jupyter','Anaconda','Pandas','Matplotlib'] },
  { title:'Data Engineering & Databases', icon:'🗄️', items:['T-SQL','MySQL','Oracle SQL','PostgreSQL','SQL Server','IBM Informix'] },
  { title:'ETL & Data Integration', icon:'⚙️', items:['Data Factory','Pentaho','Power Query'] },
  { title:'Environment & Dev Tools', icon:'🛠️', items:['Visual Studio','Jupyter Notebook','GitHub','Anaconda','VS Code'] },
  { title:'Communication & Content', icon:'✒️', items:['Technical Writer','Medium','Storytelling','Data Visualisation','Business-Technical Liaison'] }
];

const PROJECTS = {
  //UI: [
  //  {title:'UI Concept 1', img:'assets/img/projects-1.png', skills:'Figma, Design Systems, UX'},
  //  {title:'UI Concept 2', img:'assets/img/projects-2.png', skills:'Wireframes, Prototyping'},
  //  {title:'UI Concept 3', img:'assets/img/projects-3.png', skills:'Dashboard UI, Product thinking'}
  //],
  Reporting: [
        { title: 'Report 1', img: 'assets/reporting/ai_adoption.jpg', description: 'bcusdhclsiuhflwlehf fyugeslifblseukyflbwes fiweusygfclsief', skills: 'SQL, Tableau, Data Prep', link:'https://medium.com/your-article-2'},
        { title: 'Report 2', img: 'assets/reporting/recycle.jpg', description: 'bcusdhclsiuhflwlehf e43454756fses fiweusygfclsief', skills: 'Power BI, KPI design', link: 'https://medium.com/your-article-2' },
        { title: 'Report 3', img: 'assets/reporting/remote_work.jpg', description: 'bcusdhclsiuhflwlehf fyug6564yflbwes fi66464lsief', skills: 'SQL, Power Query, Storytelling', link: 'https://medium.com/your-article-2' },
        { title: 'Report 4', img: 'assets/reporting/romania-pe-roti.jpg', description: '...', skills: 'Python, ETL', link: 'https://medium.com/your-article-2' },
        { title: 'Report 5', img: 'assets/reporting/romanian-sky.jpg', description: '...', skills: 'Power BI, DAX', link: 'https://medium.com/your-article-2' },
        { title: 'Report 6', img: 'assets/reporting/robots_overview_dash.png', description: '...', skills: 'SQL Optimization', link: 'https://medium.com/your-article-2' },
        { title: 'Report 7', img: 'assets/reporting/uefa-2024.jpg', description: '...', skills: 'Data Modeling', link: 'https://medium.com/your-article-2' },
        { title: 'Report 8', img: 'assets/reporting/olimpic_games.jpg', description: '...', skills: 'Dashboard Design', link: 'https://medium.com/your-article-2' },
        { title: 'Report 9', img: 'assets/reporting/bold-bi.jpg', description: '...', skills: 'Analytics Engineering', link: 'https://medium.com/your-article-2' }

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
