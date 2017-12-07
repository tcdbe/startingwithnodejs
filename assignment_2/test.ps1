Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/0 -ContentType "application/json" -Method PUT -Body '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/0 -ContentType "application/json" -Method PUT -Body '{"name": "I did it", "url":"http://webapplog.com/es6", "text": ""}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts -ContentType "application/json" -Method POST -Body '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/0  -Method DELETE

Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/2/comments -ContentType "application/json" -Method POST -Body '{"text": "My comment"}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/2/comments/0 -ContentType "application/json" -Method PUT -Body '{"text": "My comment 2"}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/2/comments/0   -Method DELETE


Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts -ContentType "application/json" -Method POST -Body '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts/2/comments -ContentType "application/json" -Method POST -Body '{"text": "My comment"}'

# Test missing name, text
Invoke-WebRequest -UseBasicParsing http://localhost:3000/posts -ContentType "application/json" -Method POST -Body '{"url":"http://webapplog.com/es6"}'