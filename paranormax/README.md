<h1>Paranormax CMS theme site </h1>

<h2>ScreenRecording</h2>
<li>
    <a href="https://vimeo.com/667284010">Click here to see the screenRecording of the CMSthemeSite</a>
</li>
<li>
    <a href="https://vimeo.com/667283742">Click here to see the screenRecording of the Web App</a>
</li>

<h2>Links to source code</h2>
<a href="https://github.com/NielsMoens/Werkstuk_CMSDEV_Paranormax-NielsMoens"> CMS Theme Website </a><br>
<a href="https://github.com/NielsMoens/Werkstuk_CMSDEV_ParanormaxApp-NielsMoens"> Web App </a>
(incase the webApp gives you DNS errors use this <a href="https://hardcore-swanson-20ef3a.netlify.app/"> LINK</a>)

<h1>About the project</h1>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Wegens het grote succes en nationale bekendheid van Paranormax werd intern beslist om een uitzendbureau te starten.
Er is immers nood aan een vertrouwelijke en veilige organisatie waar je pro mediums kan vinden.

Je kan het eigenlijk als een sociaal netwerk zien, dat paranormale activiteiten / enthousiastelingen / slachtoffers met elkaar verbindt.

Het werkstuk is tweeledig. Het volledige werkstuk wordt beheerd via een centraal CMS (Wordpress / Drupal / Craft CMS).

Er is een App (web / native) en er is een Site (theme in cms).

App (web / native) - gekoppeld via API aan CMS

Mobile first, geschreven in react / angular / vue / ...

De app is het effectieve sociale netwerk / uitzendbureau.

Voor de app moet je ingelogd zijn, registratie kan via de app; maar ook via de site.

Er zijn twee soorten members: Opdrachtgevers & Mediums

Opdrachtgevers

Kunnen eigen profiel in app bewerken (naam, gsm, email, adres, social media, ...)
Kunnen hun vraag/opdracht doorsturen via een formulier
Velden: Vraag, Omschrijving, Plaats, Tijdstip/Deadline
Krijgen een email bij goedkeuring of afkeuring van hun vraag.
Voorbeeldvragen:
'Mijn zoon is bezeten door de duivel!'
'Ik wil de code van de kluis vragen aan mijn overleden oma'
Als een of meerdere mediums zich kandidaat stellen, kan de opdrachtgever een kiezen (vb op basis van profiel / locatie / kostprijs) en kan die verder afspreken.
bevestigde medium = zichtbare contactgegevens voor beide partijen zodat ze contact kunnen opnemen met elkaar
Mediums

Kunnen zich registreren als medium, maar...
Registratie moet manueel goedgekeurd worden door een Paranormax medewerker (uploaden van geldig mediumdiploma.png tijdens de registratie)
Kunnen via hun profiel hun specialisatie(s) toevoegen.
(toekomstvoorspellingen, geestoproepingen, duiveluitdrijvingen, ...)
Kunnen opdrachten bekijken en zich kandidaat stellen als ze aan de vereisten voldoen (juiste specialiteit).
voor het kandidaat stellen geeft de medium er een prijs voor op, betaling hoeft niet in de app, maar is eerder een nice-to-have.
Zien op hun profiel hun huidige opdrachten en een historiek van voltooide opdrachten met status (fullfilled/failed).
Hoe meer voltooide opdrachten, hoe meer karma / punten!

Eventueel: Opdrachten kunnen gefilterd worden op basis van specialiteit van de medium.

Bonuspunten: registratie via third party (Google / Apple / Facebook / ...)