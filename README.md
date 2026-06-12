# Portfolio — Pierre Gozard

Site portfolio personnel accessible à l'adresse [pierre-gozard.com](https://pierre-gozard.com).

## Présentation

Portfolio d'un profil hybride : infirmier psychiatrique depuis 13 ans reconverti développeur Full Stack. Le site présente mon parcours, mes projets numériques et ma vision HealthTech — construire des outils pensés depuis le terrain pour les professionnels de santé et les patients.

## Structure

```
portfolio/
├── index.html        # Page d'accueil (présentation, compétences, contact)
├── projets.html      # Timeline des projets numériques
├── parcours.html     # Parcours infirmier détaillé
├── brief.html        # Espace projet (briefs clients)
├── styles.css        # Styles globaux
├── script.js         # Interactions (menu burger, animations fade-in)
├── CNAME             # Domaine personnalisé GitHub Pages
└── assets/
    └── images/       # Photos et illustrations des projets
```

## Pages

### Accueil (`index.html`)
- Hero avec présentation et badges de compétences clés
- Section "profil hybride" : infirmier · développeur · HealthTech
- Narration du parcours de reconversion
- Grille des compétences techniques
- Section contact

### Projets Numériques (`projets.html`)
Timeline chronologique des projets :

| Projet | Date | Stack |
|--------|------|-------|
| **CH Polaris** — Portail hospitalier fictif open access | Mai 2026 | Rails 7, Hotwire, Sidekiq |
| **Livre illustré personnalisé** — Gamebook 23 pages | Avril 2026 | Midjourney, Canva, CoolLibri |
| **Highway to Wipe** — Gestion de guilde WoW | Février 2026 | Rails 7, API Blizzard |
| **Taste & Drink** — Sommelier IA (projet Wagon) | Décembre 2025 | Rails 7, pgvector, OpenAI |
| **Revision Organizer** — Assistant révision IA (projet Wagon) | Novembre 2025 | Rails 7, GPT-4.1-nano, Gemini |

### Parcours Infirmier (`parcours.html`)
Détail du parcours clinique : psychiatrie adulte, soins intensifs, urgences de crise, suicidologie, coordination ETP, DU Éducation Thérapeutique (félicitations du jury).

## Technologies

Site statique HTML/CSS/JS, aucune dépendance externe ni framework.

- **HTML5 / CSS3** — mise en page responsive, variables CSS, animations
- **JavaScript vanilla** — menu burger mobile, animations au scroll (IntersectionObserver)
- **GitHub Pages** — hébergement avec domaine personnalisé via CNAME

## Déploiement

Le site est déployé automatiquement via **GitHub Pages** à chaque push sur `main`.

Le domaine personnalisé `pierre-gozard.com` est configuré dans le fichier `CNAME`.

## Contact

- Email : [pierre.gozard03@gmail.com](mailto:pierre.gozard03@gmail.com)
- LinkedIn : [linkedin.com/in/pierregozard](https://www.linkedin.com/in/pierregozard/)
- GitHub : [github.com/pigozard](https://github.com/pigozard)
