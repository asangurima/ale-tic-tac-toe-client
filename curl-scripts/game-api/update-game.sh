
curl --include "https://tic-tac-toe-wdi-production.herokuapp.com/games/'${ID}'" \
--request PATCH \
--header"Content-type: application/json" \
--data '{
}'

echo
