
#!/bin/bash

rm -rf /var/www/html/*
cd /vagrant/Berlin_web/
cp -r * /var/www/html/
systemctl restart httpd

echo "Redeploy Completed!!!"