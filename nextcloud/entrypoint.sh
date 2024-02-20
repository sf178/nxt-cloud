#!/bin/bash

cat <<EOF > /var/www/html/config/config.php
<?php
\$CONFIG = array (
  'instanceid' => 'oclckp3d0tqo',
  'passwordsalt' => '${NEXTCLOUD_PASSWORDSALT}',
  'secret' => '${NEXTCLOUD_SECRET}',
  'trusted_domains' =>
  array (
    0 => 'localhost:3040',
	1 => '194.87.82.41'
  ),
  'datadirectory' => '/var/www/html/data',
  'dbtype' => 'mysql',
  'version' => '28.0.2.5',
  'overwrite.cli.url' => 'http://localhost:3040',
  'dbname' => 'nextcloud',
  'dbhost' => '${MYSQL_HOST}',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'mysql.utf8mb4' => true,
  'dbuser' => '${MYSQL_USER}',
  'dbpassword' => '${MYSQL_PASSWORD}',
  'installed' => true,
  'defaultapp' => 'files',
);
EOF

# Запуск Apache
exec apache2-foreground
