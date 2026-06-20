# Use the lightweight Nginx image
FROM nginx:alpine

# Copy the static website files to Nginx's default public directory
COPY index.html /usr/share/nginx/html/
COPY contact.html /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY images/ /usr/share/nginx/html/images/
COPY fonts/ /usr/share/nginx/html/fonts/

# Expose port 80
EXPOSE 80
