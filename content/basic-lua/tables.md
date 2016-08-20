/*
  Title: Tables
  Sort: 9
*/
# Tables
Tables sind definitiv das mächtigste Werkzeug, das Lua mitbringt und auch die Stelle, bei der sich Lua am meisten von anderen Skript- und Programmiersprachen unterscheidet.
Tables fassen dabei die Konzepte von Arrays und Maps/Dictionaries aus anderen Programmiersprachen zusammen.

## Motivation
Angenommen man möchte Spielern Fahrzeuge zuordnen. Im Laufe der Zeit habe ich immer mal wieder solche Codeschnipsel gesehen:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local player1 = "meinFahrzeug1"
local player2 = "meinFahrzeug2"
local player3 = "meinFahrzeug3"
-- ...
local player100 = "meinFahrzeug100"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Um nun auf die Fahrzeuge der Spieler zuzugreifen, von denen man den Slot hat (also das, was hier 1, 2, 3, ..., 100 ist), müsste man jetzt weitere wirre Dinge mit der *_G Umgebung*,
die tiefgehende Erklärung dazu ist an dieser Stelle jedoch noch zu kompliziert (siehe Tutorial für Fortgeschrittene).

Stattdessen wäre es viel einfacher und eleganter das Ganze *dynamischer* zu gestalten.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local players = {}
for i = 0, 100 do
    players[i] = "meinFahrzeug"..i
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dabei wird `players` mit den geschweiften Klammern als sogenannte __Table__ definiert   
Tables ermöglichen es uns auf einfache Art und Weise Dinge aufzulisten (*Arrays*) oder etwas etwas anderem zuzuordnen (*Maps*).

## Tables als Arrays/Listen
Zunächst soll die Funktion von Tables als Arrays (Feld von Werten) oder Listen genauer betrachtet werden.   
Dazu betrachten wir folgende Ausgangssituation:   
Wir möchten alle Monate des Jahres ausgeben. In der einfachen, aber langen Version könnten wir mit der `print`-Funktion über 12 Zeilen alle Monate ausgeben.   
Das ist uns jedoch zu aufwendig und neue Monate hinzuzufügen ist recht schwierig (ja, das Jahr wird regelmäßig um neue Monate ergänzt).
    
Die Werte in einer Table bezeichnet man als __Elemente__. Um nach der Definition auf Werte zuzugreifen, wird der `[]`-Operator verwendet.
Zwischen den eckigen Klammern steht dabei die Position in der Liste, wobei - im Gegensatz zu anderen Programmiersprachen - __ab 1 gezählt wird__.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Table als Liste mit allen Monaten definieren
-- dabei werden alle Elemente durch Kommata getrennt hintereinander aufgelistet
local monate = {"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"}

-- 1. Element ausgeben
print("1. Monat ist: "..monate[1])
print("") -- leere Zeile

-- Jetzt alle Monaten mithilfe einer for-Schleife ausgeben
for i = 1, 12 do
    -- i-tes Element auslesen
    print(monate[i])
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hier wird deutlich warum die for-Schleife so wichtig ist - mit ihr kann eine Table ganz leicht durchgegangen werden (in der Fachsprache __iterieren__ genannt).

Angenommen, Gott sollte mal schlechte Laune haben und beschließen die Naturgesetze zu ändern und einen neuen Monat einzufügen, müssen wir als Programmierer natürlich
schnell reagieren und unsere Software anpassen. Wir können unsere Liste oben jedoch nicht ergänzen, sondern müssen nachträglich einen 13. Monat hinzufügen.   
Dazu können wir den `[]`-Operator nicht nur verwenden, um lesend auf Elemente zuzugreifen, sondern um auch neue Werte einzufügen/vorhandenen zu überschreiben, wenn der
Operator auf der linken Seite des `=`-Operators steht.

  div.alert.alert-info
    <strong>Pro tip:</strong> Um die Anzahl der Element in einer Table zu ermitteln, kann ähnlich wie bei Strings der `#`-Operator verwendet werden.
    | Aber Achtung: Dies funktioniert nur, wenn die Table als Array verwendet wird (d.h. eine durchgehende Indizes aufweist, die bei 1 starten).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local monate = {"Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"}

-- 13. Monat hinzufügen
monate[13] = "Undecimber" -- siehe: https://en.wikipedia.org/wiki/Undecimber

-- alles ausgeben
for i = 1, #monate do
    print(monate[i])
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Tables als Maps/Dictionaries - assoziative Tables
Manchmal reicht es nicht Werte einfach nur aufzulisten. Stattdessen möchte man einem Wert einen anderen Wert zuordnen. Bei solchen Zuordnungen spricht man auch
von __Schlüssel-Wert Zuordnungen__ (engl. __Key-value__):   
Der Schlüssel ist der Wert, dem etwas zugeordnet wird. Der Wert ist der Wert, der zugeordnet wurde.
Dabei kann in Lua jeder beliebige Datentyp sowohl als Schlüssel als auch als Wert genommen werden.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- leere Table definieren
local playerIDs = {}

-- Schlüsseln SpielernameX eine Zahl (hier: die Spieler ID) zuordnen
playerIDs["Spielername1"] = 42
playerIDs["Spielername2"] = 1337

-- Hat man jetzt den Spielernamen...
local playerName = "Spielername2"

-- ...kann man ganz leicht die ID ermitteln
print("ID des Spielers: "..playerIDs[playerName])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Der Zugriff auf die Elemente sieht ganz ähnlich wie bei der Verwendung der Tables als Listen aus - mit dem Unterschied, dass dieses Mal ein String als Schlüssel verwendet wurde.

Nun könnte man hierfür auch eine Liste nehmen, die weitere Listen enthält (im Stil: `playerInfo = {{1, "Spielername1"}, {2, "Spielername2"}}`) und dann, um die Elemente entweder
Name oder ID zu finden alle Elemente durchgehen und mit einer *if-Abfrage* vergleichen, ob es sich um das gesuchte Element handelt.   
Das ist zwar möglich und funktioniert auch, jedoch muss dabei __jedes__ Element in der Liste betrachtet werden. Dies nennt man in der Informatik auch *linearen Zeitaufwand*.
    
Tables dagegen verwenden intern sogenannte [Hashtabellen](https://de.wikipedia.org/wiki/Hashtabelle). Dabei wird eine mathematische Funktion verwendet,
um die Position des gesuchten Elements zu errechnen. Im besten Fall kann dies in konstanter Zeit durchgeführt werden, d.h. die benötigte Zeit ist *unabhängig* von der
Anzahl der Elemente in der Liste.   
Genau aus diesem Grund sollten Tables solchen Konstruktionen vorgezogen werden.

  div.alert.alert-info
    <strong>Pro tip:</strong> Lua erlaubt auch `playerIDs["Spielername1"]` kürzer als `playerIDs.Spielername1` darzustellen (wenn der Schlüssel ein String ist).
    | Beide Varianten sind dann äquivalent (diese Vereinfachung wird insbesondere bei der objektorientierten Programmierung noch eine große Rolle spielen)

### Initiale Definition von Tables als Maps
Natürlich lassen sich Tables auch direkt mit Schlüssen und Werten bei der Definition initialisieren.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local playerIDs = {
    ["Spielername1"] = 42,
    ["Spielername2"] = 1337
}

-- im Falle von Strings als Schlüssel ist auch wieder folgende Vereinfachung möglich
-- beide Varianten sind äquivalent
playerIDs = {
    Spielername1 = 42,
    Spielername2 = 1337
}

-- etwas ausgeben
print(playerIDs["Spielername1"])
print(playerIDs.Spielername2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Maps durchiterieren - die generische for-Schleife
Wie dir vielleicht an dieser Stelle aufgefallen ist, können wir diese Maps nicht so leicht wie Tables als Arrays/Listen durchgehen, da wir ja noch nicht wissen,
was zwischen den eckigen Klammern stehen *kann*.   
Dies führt uns zur sogenannten __generischen for-Schleife__, die eine leicht andere Syntax als die __numerische__ for-Schleife hat, die wir schon kennen.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Table definieren
local playerIDs = {
    ["Spielername1"] = 42,
    ["Spielername2"] = 1337,
    ["Spieler1337"] = "DerHatKeineID"
}

-- Table durchiterieren / durchgehen
for name, id in pairs(playerIDs) do
    print("Name des Spielers: "..name)
    print("ID des Spielers: "..id)
    print("") -- lere Zeile
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dabei stehen zwischen dem `for` und `in` als erstes der Schlüssel (also das, was bei der Definition in den eckigen Klammern steht), gefolgt
vom Wert (das, was bei der Definition hinter dem Gleichheitszeichen steht).   
`pairs` ist dabei die Funktion, die das eigentliche Verhalten des "durchgehen" definiert und einen sogenannten __Iterator__ zurückgibt.
    
Iteratoren sind jedoch ein etwas komplizierteres Thema und werden deshalb erst im Tutorial für Fortgeschrittene erläutert. Für jetzt reicht es zu wissen, dass `pairs`
zusammen mit der generischen for-Schleife (`for ... in`), um eine Table durchzuiterieren.

  div.alert.alert-info
    <strong>Pro tip:</strong> Natürlich lassen sich auch Tables als Arrays/Listen mit der generischen for-Schleife auf exakt dem gleichen Weg durchgehen.

### Anzahl der Elemente einer Table ermitteln
Wie oben schon beschrieben, lässt sich der `#`-Operator leider nur für durchgehend indizierte Tables (also Arrays) verwenden.
Da aber jetzt bekannt ist wie die generische for-Schleife funktioniert, kann man sich nun leicht eine Funktion zum Ermitteln der Länge bauen:
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
function table.length(tab)
    local count = 0
    for k, v in pairs(tab) do
        count = count + 1
    end
    return count
end

-- Test
local playerIDs = {
    ["Spielername1"] = 42,
    ["Spielername2"] = 1337,
    ["Spieler1337"] = "DerHatKeineID"
}
print("Anzahl der Elemente: "..table.length(playerIDs))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
