# Project 2 @cmda-minor-web · 2019-2020

In dit project ga ik aan de slag met een bestaand project, om het op gebied van performance en accessibility te verbeteren. Ik heb gekozen voor de CMD website. Het is een Wordpress website, dus er valt veel aan te doen.


## In deze readme:

- [Onderzoek](#onderzoek)

# <a name="onderzoek"></a>Onderzoek

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
- ✅ Minify de CSS en JS (Performance fix)
- ✅ Maak alle html sematisch (Accessibility fix)
- ✅ Verwijder nutteloze/niet gebruikte code (Performance/accessibility fix)
- ✅ Meer pagina's uitwerken
- ✅ Lazyloader voor images (Performance fix)
- ✅ Minify JS (Performance fix)
- Image compression (Performance fix)
- Voeg caching toe (Performance fix)


# Verbeteringen

## Server-side

Ik bouw de website server-side op. Dit betekent dat de gebruiker uiteindelijk alleen html en minified-css binnen krijgt.

## Remove non-sense

Wordpress voegt een boel non-sense toe aan de website. Zo zit er bijvoorbeeld een winkelwagen systeem in de website die verborgen is met css, maar tevoorschijn komt zodra je de website lokaal draait.

![](/ss/shoppingcart.png)

Dit heb ik verwijderd, met de bijbehorende css. Dit scheelt weer regels css en html en dat scheelt weer laadtijd.

---

## Rebuilding html

Ik heb de homepagina compleet opnieuw opgebouwd. De originiële versie is één grote onsemantische puinhoop. Een en al `div`, onduidelijke nesting en classes/attributes.

### Oude html:

![](/ss/attributeoverload.png)



Ik heb de content van de pagina gepakt en deze vervolgens compleet semantisch en zo beknopt mogelijk herschreven. Alle ongebruikte code eruit, alle `div`'jes de prullenbak in.

### Nieuwe html:

De nieuwe html is [hier](https://github.com/RobinFrugte97/project-2-1920/blob/master/views/index.ejs) te vinden

![](/ss/goodhtml.png)

![](/ss/semantichtml.png)

Deze aanpassingen, samen met een geminifiede versie van de enorme berg css, zorgt voor een betere perfomance en een veel betere accessibility.

- Hetzelfde is gedaan voor de contact pagina.

### Form

Het originele formulier op de contact pagina van de CMD website was een totale ramp op het gebied van accessibility.

Alle inputs zitten verstopt in `<span>`'s, die weer in `<p>`'s zitten verstopt.

![](/ss/badform.png)

Zoals je kunt zien in de bovenstaande afbeelding, hebben de input velden ook geen fatsoenlijk label. Een screenreader kan hier weinig mee.

#### Nieuw formulier:

![](/ss/goodform.png)

Het nieuwe formulier is in zijn geheel bijna even groot als één input veld van de CMD website met dezelfde styling. Ook is het nieuwe formulier accessible voor screenreaders, omdat het semantisch is opgebouwd. 

---

## Rebuilding CSS

Met het omschrijven van de html heb ik tergelijk de CSS enorm ingekort en omgeschreven.

De CSS is van meer dan 21000 regels naar ~550 regels gegaan. 

De CSS is opgedeeld in aparte css files om de developer experience te verbeteren. De CSS is [hier](https://github.com/RobinFrugte97/project-2-1920/tree/master/static/css) te vinden. Voor de gebruiker wordt de CSS uiteraard samengevoegd en geminified met behulp van Gulp.

### Audit na opschonen CSS:

![](/ss/removedwpclutter.png)

---

## Contrast

De originele site maakt gebruik van een aantal verschillende kleuren in links of buttons. Sommige van deze kleurcombinaties hebben onvoldoende contrast volgens WCAG. Dit kan het voor slechtziende lastig maken om te lezen wat er in de link of button staat.

### Oud button contrast:

![](/ss/originelebutton.png)

Ik heb gekozen om verder te gaan met de kleuren die de lokale versie biedt. De styling van de originele versie verschilt op sommige plekken van de online versie.

### Nieuw button contrast:

![](/ss/goodrating.png)

---

## Focus- en hover-states

De CMD website heeft totaal geen focus-states en geen of hele slechte hover-states. Dit is een probleem voor mensen die hun muis niet kunnen gebruiken en de website met hun toetsenbord moeten navigeren.

![](/ss/goodfocusstate.png)

---

## Gulp

Ik heb Gulp gebruikt om de performance van de website te verbeteren en de developer experience te verhogen. Het laat mij onder andere in aparte Javascript en css bestanden werken, en verkleint alle bestanden.

### Gulp-concat

Plakt alle bestanden van een opgegeven type vanuit een opgegeven locatie aan elkaar en maakt er één bestand van voor de browser.

### Gulp-minify

Een minifier voor Javascript bestanden. Zorgt voor kleinere bestanden, wat weer zorgt voor betere performance op de website.

### Gulp-order

Bepaald de volgorde waarin de opgegeven bestanden aan elkaar geplakt worden. Soms is dat van belang, bijvoorbeeld bij css wanneer je een css reset hebt die je altijd bovenaan wilt hebben.

### Gulp-clean-css

Een minifier voor css bestanden. Zorgt voor kleinere bestanden, wat weer zorgt voor betere performance op de website.

---

## Overige fixes

### Lazyloader

Lazyloader toegevoegd om de website sneller in te laden. Alleen de zichtbare images worden geladen, de rest wordt pas geladen wanneer ze in beeld komen.

### Doctype

Missende `<!DOCTYPE html>` doctype toegevoegd, zodat de browser weet wat voor soort bestand verwacht kan worden. 

### Metadata

Metadata toegevoegd voor de Search engine optimalisation.
```
<meta name="description" content="Communication and Multimedia Design Amsterdam home pagina.">
```

### Compression

Alle html wordt als gzip gecompressed en afgeleverd bij de gebruiker. Ik maak gebruik van de `compression` node package.

# Conclusie

![](/ss/lastaudit.png)

Dit is de audit na alle aanpassingen in mijn versie van de CMD website. 

### Grote lijnen:

Wat heb ik gedaan om tot deze audit score te komen?

- Serversided rendering.
- Opschonen html & herschrijven html. Html semantisch maken.
- Contrast buttons en links verbeterd, fatsoenlijke hover- en focusstates toegevoegd.
- Verwijder alle overbodige css & herschrijven css.
- Css minifyen. 
- Lazyloader toevoegen om de lading van images te verminderen.
- Javascript minifyen.

### Wat ik nog had willen doen:

- Images serverside leveren. Zo had ik de images ook nog kunnen compressen. Dit zou voor een grote verbetering in performance zorgen. De images worden nu client-side opgehaald. Het zijn veel te grote afbeeldingen, zonde van de performance score.
- Caching toevoegen.
- Meer pagina's uitwerken. Er zijn nu twee pagina's uitgewerkt omwille van de deadline.


---

# Packages

Packages die ik heb gebruikt om de performance and developer experience te verbeteren:

- [Compression](https://www.npmjs.com/package/compression)
- [Gulp](https://www.npmjs.com/package/gulp)
- [Gulp-minify](https://www.npmjs.com/package/gulp-minify)
- [Gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- [Gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [Gulp-order](https://www.npmjs.com/package/gulp-order)