# Hackaton

## Getting started

### environnement de travail

recuipérer le code:
https

```sh
git clone https://github.com/Eric-Philippe/Hackaton_Hippo.git
```

ssh

```sh
git clone git@github.com:Eric-Philippe/Hackaton_Hippo.git
```

Demmarer docker compose

```sh
docker-compose up
```

###PG admin
####se connecter:
→ Lorsque les contenneuirs DOcker sont démmarés, PG admin est accéssible sur l'adresse du serveur au port 5050 (ou un autre port défini dans le .env):
par exemple localhost:5050
→ Une fois sur PGAdmin se connecter avec les indentifiants définis dans le .env
Mail: postgres@example.com
mot de passe admin
####Acceder à la BDD après la première connection
clic droit sur serveur→nouveau→server
![1737636889981](image/README/1737636889981.png)
Mettre le nom de votre choix:
![1737636935829](image/README/1737636935829.png)
aller sur la section Connexion et entrer les informations définies dans le .env:
![1737637055869](image/README/1737637055869.png)
(Le mot bde passe est celui de pg_pass)

Vous avez désormais accès à la BDD
![1737637099623](image/README/1737637099623.png)
Votre configuration sera enregistrée dans le volume Docker ainsi vous pourrais la retrouver a chaque connection.
