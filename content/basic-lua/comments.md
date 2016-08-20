/*
  Title: Kommentare
  Sort: 3
*/
# Kommentare
Kommentare sind kurze Texte, die im Quellcode an (fast) beliebigen Stellen eingefügt werden können. Das Ziel von Kommentaren ist schwierigere Codeteile zu erklären.
Gerade wenn im Team gearbeitet wird, ist es sehr wichtig den Code ausreichend gut zu kommentieren
    
In diesem Tutorial werden daher viele Kommentare benutzt, um Einzelschritte zu beschreiben.

## Einzeilige Kommentare
Einzeilige Kommentare gehen, wie sich leicht raten lässt, nur über eine Zeile. Dabei wird einfach nur ein 2 `--`) Bindestriche vor den Text gestellt.
Zu beachten ist jedoch, dass Kommentare ab den Bindestrichen für die __ganze__ Zeile gelten.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Hello world! ausgeben
print("Hello world") -- auch hier kann ein Kommentar stehen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In diesem Codebeispiel wird deutlich, dass die Ausgabe identisch zur Ausgabe aus dem Hello-World Skript ist.

## Mehrzeilige Kommentare
Mehrzeilige Kommentare können mehrere Zeilen umfassen und genutzt werden, um einen Kommentar frühzeitig zu abzuschließen.
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
--[[
    Hallo Welt,
    dies ist ein mehrzeiliger Kommentar.
    ...und noch eine Zeile
]]

print("Hallo, über mir ist ein mehrzeiliger Kommentar" --[[der zweite Anwendungszweck]])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

An dieser Stelle ist zu sehen, wie sehr *Syntax Highlighting* (farbige Markierung des Quelltextes) zur Übersicht des Codes beitragen kann.
Daher empfielt es sich in jedem Fall einen guten Editor zum Programmieren zu benutzen.

// TODO: Verweis@Sektion: Tools

## Übung
Gib irgendeinen Text aus und verwende beide Arten von Kommentaren

### Lösung
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
--[[
    Dieser Code ist kein Code
]]

-- Text auf der Konsole ausgeben
print("Hallo Welt")
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
