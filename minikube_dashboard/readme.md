## Creatio du dashboard
 minikube dashboard
 connaitre le port utiliser :  kubectl cluster-info
 
## creation de l'ingress
fichier de configuration dashboard-ingress.yaml 
kubectl apply -f dashboard-ingress.yaml

## modification du host de windows
fichier host

## verification 
dashbord present :  kubectl get all -n  kubernetes-dashboard
ingress present : kubectl get ingress -n kubernetes-dashboard
internet : https://my-dashboard.local/#/login
