Invoke-WebRequest -UseBasicParsing http://localhost:3000/accounts -ContentType "application/json" -Method POST -Body '{"balance": 100, "name":"checking"}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/accounts/0 -ContentType "application/json" -Method PUT -Body '{"balance": 200, "name":"savings"}'
Invoke-WebRequest -UseBasicParsing http://localhost:3000/accounts
Invoke-WebRequest -UseBasicParsing http://localhost:3000/accounts/0  -Method DELETE
