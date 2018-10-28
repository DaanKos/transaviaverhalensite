HET PROJECT:
-----------------
Transavia Stories is een verhalen website die naast de normale website van Transavia komt te staan.
Transavia wil zich richten op het bieden van ervaringen waar deze verhalen een deel van uit gaan maken.

MOTIVATIE:
-----------------
Deze site is opgezet als opdracht van Blok 1: Project WEB.
Deze vind plaats in het tweede leerjaar van opleiding CMD aan de HVA.

GEBRUIKTE TECH:
-----------------
De site is gebouwd op HTML, CSS en Javascript.

FEATURES:
-----------------
Deze versie van de website is volledig responsive en werkt naar behoren op ieder device met een schermbreedte van 20em of meer.
De navigatiebalk veranderd op basis van de breedte van het scherm van je device.
De download en like knoppen van het eerste verhaal op de index.html pagina zijn
klikbaar en geven een visuele representatie van hoe de microinteracties werken.
Het eerste verhaal is ook klikbaar en brengt je naar het vormgegeven verhaal,
welke ook volledig responsive is.

De filter sectie kan uitklappen.
Het account form reageert op de input van de gebruiker en laat zien wanneer iets goed of fout is.
Wanneer alle inputvelden correct zijn ingevuld is dit ook zichtbaar.

OPZET:
-----------------
Navigatiebalk:
Hier heb ik gebruik gemaakt van flex. Aan de hand van mediaqueries worder er bij een tablet en desktop formaat teksten toegevoegd aan de navigatie items. Hiervoor heb ik een span gezet binnen het navigatie item die display:none heeft op mobiel formaat, en op andere formaten display:block krijgt. Het logo / de link naar de overzichtspagina is altijd hetzelfde.

Zoek en filteropties:
Deze zijn op alle schermen hetzelfde. Ik wilde eigen blijven aan de huisstijl van transavia door de content te centreren. De uitklapbare filteropties staan ook gecentreerd en staan in 1 kolom omdat forms niet naast elkaar moeten staan.

Alles over verhalen:
De verhalen zijn individueel opgezet binnen een article. Alle verhalen zijn hetzelfde vormgegeven, behalve de allereerste (verhaal van de dag of topresultaat). Binnen ieder verhaal vak staat een div met vaste heigth en width properties. Binnen die div laad ik een afbeelding van het verhaal met width 100%. Op die manier kunnen er makkelijk nieuwe verhalen worden toegevoegd en behouden alle verhaalvlakken hetzelfde formaat. De verhaalvakken worden gepositioneerd doormiddel van flex. Hiermee kon ik de layout van transavia behouden (1 kolom op mobiel, 2 kolommen op tablet, 3 kolommen op desktop).

Footer:
De footer is heel simpel. Er staat een tekst in welke altijd gecentreerd staat.

Microinteracties:
Om de microinteracties werkend te krijgen zonder gebruik te maken van gifs o.i.d. heb ik verborgen afbeeldingen gebruikt. Door javascript toe te passen worden deze afbeeldingen zichtbaar en kunnen ze bewegen. Ook heb ik veel classes gebruikt die geactiveerd worden binnen javascript. Deze classes roepen binnen CSS animaties en andere aanpassingen aan. De progressie animatie binnen de like en download knop zijn gebouwd door een gradient met een harde lijn te laten animeren.

Het verhaal:
Het verhaal is responsive door de toevoeging van verschillende mediaqueries. Binnen het verhaal gebruik ik spans met classes om bepaalde woorden schuin te laten staan. Ook roep ik een animatie aan op de eerste paragraaf die een bonzend effect geeft.

CREDITS:
-----------------
De originele verhalen zijn geschreven door Max J. Molovich (http://nurksmagazine.nl/tag/stijloefeningen/).
De vormgegeven verhalen zijn gemaakt door andere leerlingen uit het tweede leerjaar.

AUTEUR:
-----------------
Deze website is gebouwd door Daan Kos, 500770599.