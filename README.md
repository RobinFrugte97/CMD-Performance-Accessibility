# Project 2 @cmda-minor-web · 2019-2020

In dit project ga ik aan de slag met een bestaand project, om het op gebied van performance en accessibility te verbeteren. 

# Onderzoek naar website [CMD](https://www.cmd-amsterdam.nl/)

Om te beginnen heb ik een audit gedraaid op de home-pagina van de [CMD website](https://www.cmd-amsterdam.nl/).

![](/ss/cmd-audit.png)

De CMD website komt slecht uit de test op het gebied van performance. Ook valt er nog het een en ander te verbeteren aan de accessibility. De website is in WordPress gemaakt en dus enorm bloated met allerlei nietszeggende elementen, zoals `div`'jes en `span`'s. Voor screenreaders is dit onbruikbaar en dus totaal niet accessible.

# Lokale versie CMD website

De CMD website is een WordPress website. Het is niet eenvoudig om de website 1 op 1 over te zetten naar een lokale versie zonder toegang tot de wordpress omgeving en de backend. De lokale website ziet er iets anders uit, maar heeft erg vergelijkbare performances.


# Todo's

- Serverside renderen (Performance fix)
- Minify de CSS en html (Performance fix)
- Maak alle html sematisch (Accessibility fix)
- Image compression (Performance fix)
- Verwijder nutteloze/niet gebruikte code (Performance/accessibility fix)
- Voeg caching toe (Performance fix)
- ...