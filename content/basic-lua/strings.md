# Mehr zu Strings
In diesem Abschnitt sollen Strings noch einmal näher beleuchtet werden.   
Zur Wiederholung: Ein String oder eine Zeichenkette ist eine beliebige Aneinanderreihung von Symbolen und
müssen stets in Anführungszeichen angegeben werden.

## Vereinigung von Strings / Konkatenation
Natürlich lassen sich mehrere Strings auch zu einem gesamten String vereinigen. Dies wird auch __Konkatenation__ genannt.
Ob es sich dabei um einen String oder ein Stringliteral handelt, spielt keine Rolle. Die Konkatenation lässt sich mithilfe des `..`-Operators durchführen:
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Strings als Variablen definieren
local string1 = "Meine Name ist: "
local string2 = "Fritz"

-- Konkatenation ausführen
local string3 = string1..string2
print(string3)

-- Konkatentation mit Stringliteral
local string4 = string1.."Chantal"
print(string4)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Die String Bibliothek
Darüber hinaus ist es oft wünschenswert Strings nicht nur aneinander zu reihen oder zu definieren, sondern auch z.B. die Länge von Strings zu ermitteln oder einen Teilstring zu bekommen.   
In den folgenden Beispielen wird der `.`-Operator verwendet. Die genaue Bedeutung wird erst im Kapitel *Tables* erläutert, zur Vereinfachung kann man an dieser Stelle jedoch sagen,
dass der . als Teil des Funktionsnamens gesehen werden kann.   
Hier stichprobenartig ein paar Ausschnitte:
    
### string.sub
Mit `string.sub(meinString, startPosition, endPosition)` lässt sich ein Teilstring ermitteln:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local myString = "Hallo Welt"

-- Nur ersten Teil ausgeben
print(string.sub(myString, 0, 5))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### string.find
Mit `string.find(meinString, suchwort)` lässt sich die Anfangsposition eines Suchwortes in einem String ermitteln.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local myString = "Tomaten sind rot"

-- Position von Teilwort "rot" finden
local pos = string.find(myString, "rot")
print(pos)

-- Jetzt mit string.sub den Teil ohne "rot" ausgeben
print(string.sub(myString, 0, pos - 1))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### string.len
Mit `string.len(meinString)` lässt sich die Länge eines Strings ermitteln.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
print("Länge von 'Blub': "..string.len("Blub"))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  div.alert.alert-info
    <strong>Pro tip:</strong> Mit dem `#`-Operator lässt sich die Länge eines Strings kürzer bestimmen. So ist `#meinString` äquivalent zu `string.len(meinString)`

### string.format
Eine weiterhin sehr nützliche Funktion ist `string.format(formatString, ...)`. `string.format` erlaubt es einen String mithilfe von Platzhaltern zu formatieren.
Aus anderen Sprachen ist diese Funktion als *printf* oder *sprintf* bekannt.
Da intern nur die entsprechende Funktion in C aufgerufen wird, sind die Platzhalter identisch und können [hier](http://www.cplusplus.com/reference/cstdio/printf/) nachgeschlagen werden.
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- %s ist ein Platzhalter für alle Strings
-- %d ist ein Platzhalter für ganze Zahlen
print(string.format("Mein Name ist %s und ich bin %d Jahre alt", "Harry", "99"))

-- string.format kann auch zur formatierten Ausgabe von Dezimalzahlen genutzt werden
-- %.3f rundet eine Zahl auf 3 Stellen nach dem Komma
print(string.format("3 Stellen nach dem Komma von Pi: %.3f", math.pi))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Weiteres
Die String-Bibliothek umfasst noch einige, weitere Funktionen, welche z.B. hier eingesehen werden können: http://pgl.yoyo.org/luai/i/5.4+String+Manipulation
