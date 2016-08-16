# Variablen und Datentypen
## Variablen
Variablen sollten für die meisten aus der Mathematik bereits bekannt sein. In der Programmierung lässt sich eine Variable als Platzhalter für einen bestimmten Inhalt sehen.

So lässt sich sagen: Eine Variable ordnet einem __Wert__ einen __Namen__ zu.

## Literale
Literale sind feste Werte, die direkt - so wie sie sind - im Code stehen.

~~~~~~~~~~~~~~~~~lua
print(4)
print("Hi")
~~~~~~~~~~~~~~~~~

Sowohl `4` als auch `"Hi"` sind hier Literale.

## Datentypen
Im Gegensatz zu anderen Programmiersprachen/Skriptsprachen ist Lua *dynamisch typisiert*. Das bedeutet, dass eine Variable jeden beliebigen Typ annehmen und diesen wechseln kann.
Das macht Lua gerade auch für Anfänger besonders attraktiv, da es dadurch besonders einfach wird.

Beim Schreiben von Lua Code muss lediglich die Syntax der Defintion von Literalen bekannt sein.

### Zahlen
Lua benutzt für alle Zahlen intern sogenannte *Fließkommazahlen doppelter Genauigkeit*, d.h. du musst dir keine Sorgen über zu kleine Wertebereiche machen (das bedeutet jedoch nicht,
dass eine Zahl beliebig groß sein kann). Dezimalzahlen (also Zahlen mit Komma) müssen statt eines Dezimalkommas jedoch einen Dezimalpunkt verwenden.
    
Zahlen können ganz einfach wie folgt definiert werden:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
meineZahl = 42 -- ganze Zahl
print(meineZahl)
meineAndereZahl = 13.37 -- Dezimalzahl mit Dezimalpunkt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
An diesem Beispiel lässt sich sehen, wie eine Variable als Platzhalter eingesetzt werden kann.

### Strings / Zeichenketten
Zeichenketten, also beliebige Aneinanderreihungen von Zeichen, in der Programmierung auch __Strings__ genannt, müssen zwischen Anführungszeichen gestellt werden.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
meineZeichenkette = "Hallo Welt!"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alternativ sind in Lua auch einfache statt doppelte Anführungszeichen erlaubt:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
meineZeichenkette = 'Hallo Welt!'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Beide Varianten sind in Lua gleichwertig (in anderen Sprachen wie z.B. PHP oder C++ ist das anders!)

### Booleans
Boolische Werte repräsentieren die Wahrheitswerte. Entweder ist etwas wahr, dann ist es `true` oder nicht wahr, dann ist es `false`.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
a = true
b = false
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Nil
`nil` ist *nichts*, d.h. der Wert, den Variablen haben, wenn sie nicht definiert sind. 

### Tables
Tables (deutsch: Tabellen) sind definitiv Luas mächtigster Datentyp. Tables werden jedoch erst zu einem späteren Zeitpunkt behandelt.
// TODO: Ref einfügen

## Variablennamen
Damit der Lua *Interpreter* (das Programm, das den Lua Code ausführt) Variablen auch als solche identifizieren kann, muss man sich an bestimmte Regeln halten.

Der Name darf...
* ...nur aus alphanumerischen Zeichen (= Buchstaben und Zahlen) bestehen (Sonderzeichen und Umlaute sind jedoch <strong>nicht</strong> erlaubt)
* ...nicht mit einer Zahl anfangen (muss also mit einem Buchstaben anfangen)
* ...nicht ausschließlich den Namen eines Lua Schlüsselworts tragen (z.B. end, for, while, ...)

Des Weiteren ist es sinnvoll sich an bestimmte Namenskonventionen zu halten, damit der Code auch von anderen Entwicklern möglichst schnell verstanden werden kann.
Der wichtigste Punkt ist, dass du deinen Variablen eindeutige und selbsterklärende Namen geben solltest. Weiterhin solltest du überlegen, ob sich später vielleicht Personen aus dem
internationalen Raum anschließen und dann typischerweise mit einer englischen Namensgebung und Kommentaren arbeiten.
  
## Konvertierungen
In manchen Fällen ist es notwendig eine Zahl in einen String umzuwandeln oder andersherum. Das funktioniert mit den Funktionen `tostring` und `tonumber`.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
local num = 2
print(tostring(num))
print(type(num))
print(type(tostring(num))) -- mit type kann man den Typ anzeigen

local s = "2"
print(tonumber(s))
print(type(s))
print(type(tonumber(s)))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Übung
### Teil 1
Aufgabe dieser Übung ist das Definieren von 4 Variablen (die Namen der Variablen können frei gewählt werden, wenn nicht anders angegeben)
1. Eine Variable soll mit der __ganzen Zahl__ `-5` initialisiert werden
2. Variable mit dem __Fließkommawert__ `42.1337`
3. Variable mit dem __String__ `Mein Name ist Fritz`
4. Variable 4 soll Variable 2 zugewiesen werden und den Namen `letzteVariable` tragen
  
Im Anschluss sollen alle 3 Variablen in der angeführten Reihenfolge ausgegeben werden.
  
#### Lösung
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Variablen definieren
variable1 = -5
variable2 = 42.1337
variable3 = "Mein Name ist Fritz" -- auf Anführungszeichen achten!
letzteVariable = variable2

-- Variablen ausgeben
-- print kann zu Testzwecken auch mehrere Variablen gleichzeitig ausgeben
print(variable1, variable2, variable3, letzteVariable)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Teil 2
In dieser Aufgabe werden einige Verständnisfragen gestellt:
1. Welche der folgenden Variablen sind __keine__ gültigen Variablennamen?
    * `variable1`
    * `1variable`
    * `günther`
    * `fritz`
    * `__`
    * `--`
    * `print`
2. Gibt es in Lua einen Unterschied zwischen einfachen und doppelten Anführungszeichen?

#### Lösung
1. 
    * `1variable`, weil eine Zahl am Anfang ist
    * `günther`, weil Umlaut enthalten ist
    * `--,` nicht erlaubtes Zeichen (da verwendet für Kommentare) - würde im Regelfall jedoch nicht direkt zum Fehler führen, da die Zeile dann auskommentiert ist
    * `print` __ist gültig__, jedoch führt das dazu, dass die print-Funktion später nicht mehr funktioniert (weil sie überschrieben wurde)
2. Nein, in Lua sind beide Notation äquivalent. In anderne Sprachen wie z.B. PHP oder C++ jedoch nicht (wobei sich die Bedeutung bei diesen Sprachen wieder unterscheidet)
