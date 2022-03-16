# TD 

## Mettre en place un docker-engine sur une VM en mode NAT à l’aide d’Ansible
 Voir le dossier ansible

## Déployer un container NodeJS
Voir dockerfileNode


## . Déployer un second container NodeJS à l’aide de docker-compose, qui expose une page différente!
Voir dockerComposeNode
le dockercompose qui est present a la racine permet de lancer directement les deux conteneur

## Déployer un reverse-proxy Nginx
Voir reverseproxyNginx

## Mettre en place une VM Minikube
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
choco install minikube kubernetes-cli 
minikube start --driver=virtualbox --no-vtx-check 
