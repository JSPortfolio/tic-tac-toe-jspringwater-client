# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization:  Token token=${TOKEN}" \
  --data '{
    "credentials": {
      "old-password":"'"${OLDPASSWORD}"'"

      "new-password":"'"${NEWPASSWORD}"'"
    }
  }'


echo
