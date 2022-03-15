# Organisation 
le fichier host est celui qui se trouve normalement dans /etc/ansible/hosts
ansible-plabook contient les playbook

# Insatller ansible
sudo apt-get update
sudo apt install ansible

# Modification de /etc/ansible/hosts
ajout de notre machine virtuel ou l'on vas mettre docker
ajout d'une varible pour forcer l'utilisation de python3
ajout d'un variable contenant le mot de passe de l'utilisateur dans la vm docker
verifier : ansible-inventory --list -y

# Connection a la machine docker
installer ssh : 
	sudo apt install openssh-server
	sudo systemctl start ssh
	sudo apt install sshpass
	ssh rozennvmd@10.0.2.5
ansible all -m ping -u rozennvmd
test de la connection :  ansible all -a "df -h" -u rozennvmd

# Création du fichier de configuration du playbook
nano playbook.yml 
ansible-playbook playbook.yml -u rozennvmd

# Verification sur la vm docker
docker version
