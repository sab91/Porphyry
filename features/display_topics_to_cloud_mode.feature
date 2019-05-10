#language: fr

Fonctionnalité: Afficher la vue nuage de mot pour les catégories

Contexte:

  Soit le corpus "enseignants-décrocheurs" rattaché au portfolio "alice"

  Soit l'item "David1" rattaché au corpus "enseignants-décrocheurs"
  Soit l'item "David2" rattaché au corpus "enseignants-décrocheurs"
  Soit l'item "Karine" rattaché au corpus "enseignants-décrocheurs"

  Soit le point de vue "Décrocher (selon Aurélien)"
  Soit la catégorie "je ne fonctionne plus" rattaché au point de vue "Décrocher (selon Aurélien)"
  Soit la catégorie "c'est absurde" rattaché au point de vue "Décrocher (selon Aurélien)"

  Soit le fragment "je ne dors plus" rattaché à la catégorie "je ne fonctionne plus"
  Soit le fragment "n'a pas le droit" rattaché à la catégorie "je ne fonctionne plus"
  Soit le fragment "par pur plaisir" rattaché à la catégorie "c'est absurde"

  Soit la vue des points de vue est normale



Scénario:

  Soit "alice" le portfolio ouvert
  Quand un visiteur change de vue vers nuage de mots
  Alors la catégorie "je ne fonctionne plus" est plus grosse que "c'est absurde"
  Et la catégorie "je ne fonctionne plus" est après "c'est absurde"
