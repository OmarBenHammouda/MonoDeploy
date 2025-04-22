#!/usr/bin/env sh

find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,PLACEHOLDER_REACT_APP_API_URL,'"$REACT_APP_API_URL"',g' {} \;
find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,PLACEHOLDER_REACT_APP_MAP_KEY,'"$REACT_APP_MAP_KEY"',g' {} \;
find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,PLACEHOLDER_REACT_APP_HR_URL,'"$REACT_APP_HR_URL"',g' {} \;
find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,PLACEHOLDER_REACT_APP_GPS_URL,'"$REACT_APP_GPS_URL"',g' {} \;
find '/usr/share/nginx/html' -name '*.js' -exec sed -i -e 's,PLACEHOLDER_REACT_APP_CRM_URL,'"$REACT_APP_CRM_URL"',g' {} \;
nginx -g "daemon off;"
