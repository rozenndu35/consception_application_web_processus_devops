# Creation de l'application
Creation d'une application node qui ecoute sur le port 8080
Creation de son dockerfile

# Creation du conteneur
build : sudo docker build -t my-nodejs-app .
run : sudo docker run -p 10.0.2.5:8080:8080 -it --rm --name my-running-app my-nodejs-app

# verification 
sudo docker ps
sur le web 10.0.2.5:8080
