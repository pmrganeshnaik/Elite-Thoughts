CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,  -- Single category instead of array
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO blog (title, content, author, category) VALUES
('The Future of Finance', 
 'Financial markets are evolving with the integration of AI-driven analytics. Experts predict that decentralized finance (DeFi) will dominate the next decade. Investors must adapt to rapid changes in technology to stay ahead in the market.', 
 'John Doe', 'Finance-Business'),

('Top 10 Investment Strategies', 
 'Investing requires a well-planned strategy. From long-term value investing to short-term trading techniques, knowing the right investment strategy is crucial for financial growth and sustainability.', 
 'Jane Smith', 'Finance-Business'),

('The Importance of Mental Health', 
 'Mental health is just as important as physical health. Regular exercise, mindfulness, and therapy can significantly improve mental well-being and lead to a more fulfilling life.', 
 'Dr. Emily White', 'Health'),

('Nutritional Guide for a Healthy Life', 
 'Eating a balanced diet swith a mix of proteins, vitamins, and essential minerals is key to a healthy life. Superfoods like blueberries, salmon, and quinoa provide excellent health benefits.', 
 'Dr. Alex Brown', 'Health'),

('Best Travel Destinations in 2025', 
 'From the serene beaches of Bali to the historical sites of Rome, 2025 is the year to explore. With new budget-friendly options, traveling has never been more accessible.', 
 'Michael Green', 'Travel'),

('How to Travel on a Budget', 
 'Traveling the world doesn’t have to be expensive. Learn how to find cheap flights, affordable accommodations, and cost-effective travel plans.', 
 'Samantha Lee', 'Travel'),

('The Evolution of Street Food', 
 'Street food has transformed into gourmet experiences worldwide. From the spicy tacos in Mexico to the flavorful kebabs of the Middle East, street food is now a global phenomenon.', 
 'Chef Antonio Rossi', 'Food'),

('10 Must-Try Dishes Around the World', 
 'From Sushi in Japan to Paella in Spain, explore the world through its diverse and delicious cuisines.', 
 'Gordon Mathews', 'Food'),

('Understanding Global Economy', 
 'The global economy is influenced by inflation, trade policies, and political stability. Understanding these factors can help businesses and investors make better financial decisions.', 
 'David Carter', 'Finance-Business'),

('How to Start a Business in 2025', 
 'Starting a business requires planning, investment, and strategic execution. With digital transformation, entrepreneurs now have better tools and opportunities.', 
 'Sarah Thompson', 'Finance-Business'),

('The Science of Sleep', 
 'Sleep plays a vital role in our overall health. Poor sleep can lead to chronic health issues, whereas good sleep improves cognitive function and physical well-being.', 
 'Dr. Rachel Green', 'Health'),

('How to Stay Fit Without a Gym', 
 'Home workouts, yoga, and daily walking are effective ways to stay fit without a gym membership. Discover easy-to-follow routines that keep you in shape.', 
 'Chris Walker', 'Health'),

('Hidden Gems in Europe', 
 'Europe is full of hidden travel gems beyond the mainstream attractions. From small villages in Italy to unknown beaches in Greece, these places are worth visiting.', 
 'Linda Scott', 'Travel'),

('The Rise of Remote Work', 
 'Remote work has become the norm for many industries. Companies are now adapting to hybrid work models that enhance productivity and work-life balance.', 
 'Robert Wilson', 'General'),

('How to Improve Productivity', 
 'Productivity is about effective time management, eliminating distractions, and setting clear goals. Learn how to make the most out of your day with these proven techniques.', 
 'Emma Johnson', 'General'),

('The Psychology of Eating', 
 'Our eating habits are deeply connected to our emotions and mental state. Understanding the psychology behind food choices can lead to better eating habits.', 
 'Dr. Julia Adams', 'Food'),

('How to Plan a Perfect Road Trip', 
 'Road trips can be an incredible experience if planned well. Choosing the right route, packing essentials, and preparing for emergencies ensure a smooth journey.', 
 'David Foster', 'Travel'),

('Financial Mistakes to Avoid in Your 30s', 
 'Many individuals make common financial mistakes in their 30s, such as not saving enough, overspending, or neglecting investments. Here’s how to avoid them.', 
 'Olivia Harris', 'Finance-Business'),

('Best Superfoods for a Healthy Diet', 
 'Superfoods like avocado, kale, and chia seeds are packed with essential nutrients that boost immunity and overall health.', 
 'Dr. Henry Clark', 'Health'),

('The Future of Artificial Intelligence', 
 'AI is revolutionizing industries from healthcare to finance. Machine learning and automation are set to change how businesses operate in the future.', 
 'Sophia Martinez', 'General');

