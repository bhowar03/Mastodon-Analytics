Mastodon Analytics

Mastodon Analytics is a web-based analytical platform designed to help users explore, compare, and discover Mastodon servers. The application combines server statistics, geographic visualization, server comparison tools, and an LLM-powered recommendation system to help users find communities that match their interests.

Features
🌎 Server Geolocation

Explore Mastodon servers through an interactive geographic map.

Displays Mastodon servers based on their geographic location.
Server markers are positioned using latitude and longitude data.
Server size can be represented based on the number of users.
Users can explore servers across different countries and regions.
Geographic filtering helps users narrow down servers based on location.
📊 Server Analytics

Analyze information about individual Mastodon servers.

View server user counts and other available statistics.
Examine server activity and trends over time.
Explore server rankings and analytical results.
Use visualizations to make server statistics easier to understand.
⚖️ Server Comparison

Compare multiple Mastodon servers side-by-side.

Compare server populations.
Compare server activity and other available metrics.
View historical trends where data is available.
Identify differences between servers to help users decide which community may be a better fit.
🤖 LLM-Powered Recommendations

The application uses a Large Language Model (LLM) to provide personalized Mastodon server recommendations.

Users can provide information about their interests and preferences, and the recommendation system analyzes available server information to suggest potentially relevant communities.

The recommendation system is intended to help users discover servers that they may not find through traditional searches or rankings.

Technology Stack
Frontend
React
Vite
JavaScript
HTML5
CSS
Tailwind CSS
React Leaflet
Recharts
Backend / Database
Supabase
PostgreSQL
Data Visualization
Leaflet / React Leaflet for geographic visualization
Recharts for analytical charts and graphs
AI
Large Language Model (LLM) for server recommendations


The Analytics page provides an overview of Mastodon server data through interactive visualizations.

Users can:

Explore servers on a map.
Filter servers by geographic region.
Examine server populations.
View analytical charts.
Explore server trends and rankings.
Compare Servers

The Compare page allows users to select Mastodon servers and compare their characteristics.

The page is designed to answer questions such as:

Which server has more users?
How have the servers changed over time?
Which server ranks higher?
How do different communities compare?
Recommend a Server

The recommendation page helps users find a Mastodon server based on their interests.

The user provides information about what they are looking for, and the LLM uses that information along with available Mastodon server data to generate recommendations.

Data

The application uses Mastodon server information stored in Supabase.

Example data includes:

Server Name
User Count
Country
Latitude
Longitude
Topic
Ranking
Historical Statistics

The project also uses analytical datasets for server rankings and time-series information.


React-based web frontend for the Mastodon Analytics Platform

How to launch?

1. npm install
2. npm run dev
3. Open the URL shown in terminal (usually http://localhost:5173)

## LLM settings

The app calls an OpenAI-compatible chat completions API through `/api/llm/v1/chat/completions`.

For Gemini, use these settings:

- `LLM_API_KEY`: your Gemini API key
- `LLM_BASE_URL`: `https://generativelanguage.googleapis.com/v1beta/openai`
- `LLM_MODEL`: `gemini-2.5-flash`

Created in Collaboration with Shruti Chouhan, Jaemyung Yu, Scott Ruona, Zekun Li, Brandon Howar
