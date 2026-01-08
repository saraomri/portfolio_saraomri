:root {
  --primary: #9C7A5C;
  --secondary: #E6C9A8;
  --accent: #5A3E2B;

  --bg: #FFFFFF;
  --bg-light: #F3E6D6;

  --text: #1E1E1E;
  --text-light: #6B6B6B;

  --card-bg: #FFFFFF;
  --shadow: 0 10px 25px rgba(0,0,0,0.08);
}

body.dark {
  --bg: #1A1A1A;
  --bg-light: #262626;
  --card-bg: #262626;
  --text: #F5F5F5;
  --text-light: #CCCCCC;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: 0.3s;
}

.container {
  max-width: 1100px;
  margin: auto;
  padding: 2rem;
}

.navbar {
  position: fixed;
  width: 100%;
  background: var(--accent);
  color: white;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.hero {
  padding: 8rem 0 5rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  text-align: center;
  color: white;
}

.profile-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 4px solid white;
  margin-bottom: 1rem;
}

.section {
  padding: 5rem 0;
}

.section.light {
  background: var(--bg-light);
}

h2 {
  color: var(--accent);
  margin-bottom: 1.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

footer {
  background: var(--accent);
  color: white;
  text-align: center;
  padding: 1.5rem;
}
