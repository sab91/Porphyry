#language: fr

Fonctionnalité: Afficher la vue nuage de mot pour les catégories

Contexte:

Soit le corpus "enseignants-décrocheurs" rattaché au portfolio "alice"

Soit l'item "David1" rattaché au corpus "enseignants-décrocheurs"
Soit l'item "David2" rattaché au corpus "enseignants-décrocheurs"
Soit l'item "Karine" rattaché au corpus "enseignants-décrocheurs"

Soit le point de vue "Décrocher (selon Aurélien)" rattaché au portfolio "alice"
Soit la rubrique "je ne fonctionne plus" rattachée au point de vue "Décrocher (selon Aurélien)"
Soit la rubrique "c'est absurde" rattachée au point de vue "Décrocher (selon Aurélien)"

Soit le fragment "je ne dors plus" contenu dans la rubrique "je ne fonctionne plus"
Soit le fragment "n'a pas le droit" contenu dans la rubrique "je ne fonctionne plus"
Soit le fragment "par pur plaisir" contenu dans la rubrique "c'est absurde"

Soit les rubriques affichées en liste

Scénario: Switcher vers la vue nuage de mots

  Soit "alice" le portfolio ouvert
  Quand un visiteur change de vue vers nuage de mots
  Alors la rubrique "Action" est plus grosse que "Acteur"

Scénario: Sélectionner une catégorie du nuage de mot

   Soit "alice" le portfolio ouvert
   Quand un visiteur séléctionne la rubrique "je ne fonctionne plus"
   Alors la rubrique "je ne fonctionne plus" est surlignée