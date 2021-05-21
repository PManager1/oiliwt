For the curl messages : YOU HAVE TO TYPE ON THE TERMMINAL 


EXCLAMATION_MARK='!'
curl -X POST https://api.twilio.com/2010-04-01/Accounts/AC584e5f30a89554f072eed2bacddbe983/Messages.json \
--data-urlencode "Body=Hi there$EXCLAMATION_MARK" \
--data-urlencode "From=+12156072215" \
--data-urlencode "To=+17146067884" \
-u AC584e5f30a89554f072eed2bacddbe983:4b0784e720bfeffc311b4524923e571e


