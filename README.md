# Parts Unlimited – Bestellservice

Übungsprojekt der Veranstaltung **DevOps** (THM, Wirtschaftsinformatik B.Sc.).
Parts Unlimited ist das fiktive Unternehmen aus dem Roman *Projekt Phoenix*. Sie bauen in den Übungen
Schritt für Schritt den Weg dieser kleinen Anwendung vom Commit bis in die Produktion.

## Starten

Voraussetzung: Node.js 22 oder neuer (`node -v`). Externe Pakete werden nicht benötigt.

```bash
npm test     # automatisierte Tests
npm start    # Webserver auf http://localhost:3000
```

| Pfad | Inhalt |
|---|---|
| `/` | Teilekatalog als Webseite |
| `/api/parts` | Teilekatalog als JSON |
| `/health` | Gesundheitszustand (für Monitoring und Deployment) |

## Aufbau

```
src/inventory.js   Katalog, Lagerprüfung, Preisberechnung
src/server.js      Webserver
test/              Tests mit dem eingebauten Test-Runner von Node
```
## Definition of Done (DoD)
Ein Issue gilt erst dann als vollständig abgeschlossen, wenn:
- [x] Der Code geschrieben ist und lokal funktioniert.
- [x] Passende Tests geschrieben wurden und alle Tests grün sind (`npm test`).
- [x] Ein Pull Request erstellt und das Issue in der Beschreibung verknüpft wurde (z. B. mit `Closes #1`).
- [x] Der Pull Request reviewt und in den `main`-Branch gemergt wurde.