FROM php:8.2-apache

# Установка необходимых зависимостей и PHP расширений
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libxml2-dev \
    libonig-dev \
    libzip-dev \
    libgmp-dev \
	libbz2-dev \
	gettext-base \
    libmagickwand-dev \
    unzip \
    curl && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) gd pdo pdo_mysql mbstring zip intl bcmath gmp bz2 exif opcache sysvsem && \
    pecl install imagick && \  
    docker-php-ext-enable imagick && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Копирование кастомизированного Nextcloud в контейнер
COPY . /var/www/html/
#COPY entrypoint.sh /usr/local/bin/entrypoint.sh

#RUN chmod +x /usr/local/bin/entrypoint.sh



# Настройка прав доступа
RUN chown -R www-data:www-data /var/www/html/ && \
    chmod -R 755 /var/www/html/

# Настройка параметров PHP через ini-файлы
RUN { \
        echo 'memory_limit = 512M'; \
        echo 'upload_max_filesize = 100M'; \
        echo 'post_max_size = 100M'; \
        echo 'max_execution_time = 300'; \
        echo 'opcache.enable=1'; \
        echo 'opcache.interned_strings_buffer=8'; \
        echo 'opcache.max_accelerated_files=10000'; \
        echo 'opcache.memory_consumption=128'; \
        echo 'opcache.save_comments=1'; \
        echo 'opcache.revalidate_freq=1'; \
    } > /usr/local/etc/php/conf.d/docker-php-custom.ini

# Включение модулей Apache
RUN a2enmod rewrite headers
#CMD ["/bin/bash", "-c", "/usr/local/bin/init_conf.sh && apache2-foreground"]
#ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
