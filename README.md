# Project 2 @cmda-minor-web · 2019-2020

In dit project ga ik aan de slag met een bestaand project, om het op gebied van performance en accessibility te verbeteren. 

# Onderzoek naar website [CMD](https://www.cmd-amsterdam.nl/)

Om te beginnen heb ik een audit gedraaid op de home-pagina van de [CMD website](https://www.cmd-amsterdam.nl/).

![](/ss/cmd-audit.png)

De CMD website komt slecht uit de test op het gebied van performance. Ook valt er nog het een en ander te verbeteren aan de accessibility. De website is in WordPress gemaakt en dus enorm bloated met allerlei nietszeggende elementen, zoals `div`'jes en `span`'s. Voor screenreaders is dit onbruikbaar en dus totaal niet accessible.

### Scripts

Er zijn een heel aantal plugins aanwezig op de cmd website. Deze plugins worden door middel van Jquery en normale Javascript bestanden ingeladen. Namelijk 28(!). Sommige scripts zijn ontzettend overbodig, zoals de Woocommerce en andere shoppingcart scripts. Deze functionaliteit wordt namelijk helemaal niet gebruikt op de cmd website.

De scripts worden ook niet `async` of `defer` ingeladen.

# Lokale versie CMD website

De CMD website is een WordPress website. Het is niet eenvoudig om de website 1 op 1 over te zetten naar een lokale versie zonder toegang tot de wordpress omgeving en de backend. De lokale website ziet er iets anders uit, maar heeft erg vergelijkbare performances.


# Todo's

- ✅ Serverside renderen (Performance fix)
- ✅ Minify de CSS en html (Performance fix)
- ✅ Maak alle html sematisch (Accessibility fix)
-  Image compression (Performance fix)
- ✅ Verwijder nutteloze/niet gebruikte code (Performance/accessibility fix)
- Voeg caching toe (Performance fix)
- Meer pagina's uitwerken
- ✅ Lazyloader voor images (Performance fix)
- ✅ Minify JS (Performance fix)


# Verbeteringen

## Server-side

Ik bouw de website server-side op. Dit betekent dat de gebruiker uiteindelijk alleen minified-html en minified-css binnen krijgt.

## Remove non-sense

Wordpress voegt een boel non-sense toe aan de website. Zo zit er bijvoorbeeld een winkelwagen systeem in de website die verborgen is met css, maar tevoorschijn komt zodra je de website lokaal draait.

![](/ss/shoppingcart.png)

Dit heb ik verwijderd, met de bijbehorende css.


## Rebuilding html

Ik heb de homepagina compleet opnieuw opgebouwd. De originiële versie is één grote onsemantische puinhoop. Een en al `div`, onduidelijke nesting en classes/attributes.

### Oude html:

![](/ss/attributeoverload.png)



Ik heb de content van de pagina gepakt en deze vervolgens compleet semantisch en zo beknopt mogelijk herschreven. Alle ongebruikte code eruit, alle `div`'jes de prullenbak in.

### Nieuwe html:

![](/ss/goodhtml.png)

![](/ss/semantichtml.png)

Deze aanpassingen, samen met een geminifiede versie van de enorme berg css, zorgt voor een betere perfomance en een veel betere accessibility.

## Rebuilding CSS

Met het omschrijven van de html heb ik tergelijk de CSS enorm ingekort en omgeschreven.

De CSS is van meer dan 21000 regels naar momenteel 300 regels gegaan. Dit is nu alleen nog voor de homepagina.

### Audit na opschonen CSS:

![](/ss/removedwpclutter.png)

Alle wordpress bloat is nu uit de site gehaald.

## Contrast

De originele site maakt gebruik van een aantal verschillende kleuren in links of buttons. Sommige van deze kleurcombinaties hebben onvoldoende contrast volgens WCAG. Dit kan het voor slechtziende lastig maken om te lezen wat er in de link of button staat.

### Oud button contrast:

![](/ss/originelebutton.png)

Ik heb gekozen om verder te gaan met de kleuren die de lokale versie biedt. De styling van de originele versie verschilt op sommige plekken van de online versie.

### Nieuw button contrast:

![](/ss/goodrating.png)

## Focus- en hover-states

De CMD website heeft totaal geen focus-states en geen of hele slechte hover-states. Dit is een probleem voor mensen die hun muis niet kunnen gebruiken en de website met hun toetsenbord moeten navigeren.

![](/ss/goodfocus.png)


## Gulp




## Overige fixes

### Lazyloader

Lazyloader toegevoegd om de website sneller in te laden. Alleen de zichtbare images worden geladen, de rest wordt pas geladen wanneer ze in beeld komen.

### Doctype



### Metadata




# REMOVE

Todo:

Contact pagina

- verwijder google maps.. Waarom op de contact pagina??


