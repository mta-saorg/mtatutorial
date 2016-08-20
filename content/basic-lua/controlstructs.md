/*
  Title: Kontrollstrukturen
  Sort: 5
*/
# Kontrollstrukturen
Bisher haben wir nur Variablen definiert und auf der Konsole ausgegeben. Damit lässt sich natürlich noch nicht viel machen; vor allem, weil wir nicht in der Lage sind
Fallunterscheidungen zu machen oder bestimmte Codeteile zu wiederholen.
    
## if-Bedingung
Jeder, der schonmal etwas mit Programmierung zu tun hatte kennt sie: Die if-Bedingung.
Mit der if-Bedingung/-Verzweigung lässt ein bestimmter Codeteil ausführen, wenn eine Bedingung wahr (oder nicht wahr) ist.
    
So kann mit if-Bedingungen z.B. geprüft werden, ob eine vorher definierte Variable einen bestimmten Wert hat und wenn dies der Fall ist, wird etwas auf der Konsole ausgegeben:
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Irgendwas definieren
irgendwas = 5

-- Jetzt mit der if-Bedingung prüfen, ob irgendwas den Wert 5 hat
if irgendwas == 5 then
print("Die Variable irgendwas hat den Wert 5")
end

-- Eine andere Bedingung, die womöglich? nicht wahr ist
if irgendwas == 42 then
print("Die Variable hat den Wert 42")
end

-- Natürlich muss man die Variable nicht mit einem Literal vergleichen,
-- sondern kann sie auch mit einer anderen Variablen vergleichen
andereVariable = irgendwas -- Wert von 'irgendwas' der Variable 'andereVariable' zuweisen

if andereVariable == irgendwas then
print("irgendwas und andereVariable haben denselben Wert!")
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wie hoffentlich durch das Beispiel klar geworden ist, steht zwischen dem `if` und dem `then` die Bedingung und zwischen dem `then` und dem `end`
der Code, der ausgeführt wird, wenn die Bedingung wahr (`= true`) ist.

  div.alert.alert-warning Bei Vergleichen muss <strong>immer</strong> der `==`-Operator verwendet werden. Ein einzelnes Gleichheitszeichen `=` wird <strong>nur</strong> bei Zuweisungen verwendet!

## Vergleichsoperatoren
| Vergleichsoperator | Beschreibung                                                               |
| -------------------| -------------------------------------------------------------------------- |
| td a `==` b        | Prüft a und b auf Gleichheit, __true__ falls gleich, __false__ andernfalls |
| a `~=` b           | Prüft a und b auf Ungleichheit                                             |
| a `<` b            | Wahr, wenn a (echt) kleiner als b ist                                      |
| a `<=` b           | Wahr, wenn a kleiner oder gleich b ist                                     |
| a `>` b            | Wahr, wenn a (echt) größer als b ist                                       |
| a `>=` b           | Wahr, wenn a größer oder gleich b ist                                      |
        
## Logische Junktoren
Es reicht meistens nicht nur eine einzelne Sachen abzufragen. Man möchte oft mehrere einzelne Abfragen miteinander verknüpfen.
 
| Junktor   | Beschreibung                                                     |
|---------- | ---------------------------------------------------------------- |
| a `and` b | Prüft, ob wohl a __als auch__ b wahr sind                        |
| a `or` b  | Prüft a oder b wahr ist                                          |
| `not` a   | Negiert a, d.h. `true` wird zu `false` und `false` zu `true`     |
        
Folgendes Beispiel überprüft, ob sowohl a den Wert 2 als auch b den Wert 3 hat
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- a und b definieren
local a = 2
local b = 4

if a == 2 and b == 3 then -- erster Ausdruck wird wahr sein, zweiter nicht
    print("a ist 2 und b ist 3")
else
    print("Gilt nicht")
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## if-else
Für if gibt es noch eine kleine Erweiterung: Den else-Block. Dieser Block wird ausgeführt, wenn die Bedingung zwischen `if` und `then` <strong>nicht</strong> nicht wahr ist.
// TODO: Add elseif

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
irgendwas = 1337

if irgendwas == 42 then
    print("irgendwas riecht nach dem Sinn des Lebens")
else
    print("Nein, Leetspeak ist besser")
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## while-Schleife
Die wohl wichtigste, aber nicht am meisten verwendet Schleife ist die <i>while</i>-Schleife. Sie führt einen Codeteil (= Block) so lange aus wie eine Bedingung wahr ist.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Zähler definieren
meinZaehler = 1

-- Schleife so lange ausführen wie der Zähler kleiner als 5 ist
while meinZaehler ~= 5 do
    -- Zähler ausgeben
    print(meinZaehler)

    -- Zähler erhöhen (= inkrementieren)
    meinZaehler = meinZaehler + 1
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  div.alert.alert-warning Achte immer darauf, dass eine Bedingung auch eintritt, ansonsten verharrt das Skript in einer sog. Endlosschleife und kommt (theoretisch) nie zum Ende.
  p.
    Mit einer while-Schleife lassen sich alle anderen Schleifentypen nachbauen, jedoch erlauben andere Schleifentypen in vielen Fällen eine kürzere und elegantere Lösung.
   
   // TODO

## repeat-until-Schleife
Die *repeat-until*-Schleife verhält sich insgesamt recht ähnlich zur normalen *while*-Schleife, weist jedoch den Unterschied auf, dass der Schleifenrumpf (Code in der Schleife)
einmal ausgeführt wird, bevor die Bedingung überprüft wird und die Schleife erst abgebrochen wird, wenn die Bedingung wahr wird.
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Zähler definieren
meinZaehler = 1

repeat
    -- Zähler ausgeben
    print(meinZaehler)

    -- Zähler inkrementieren
    meinZaehler = meinZaehler + 1
until meinZaehler == 5 -- so lange ausführen, bis der Zähler den Wert 5 erreicht
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## for-Schleife
Die for-Schleife ist mit guten Grund die weitverwendetste Schleife. Sie tritt in Lua sowohl als Zählschleife auf als auch als generische Schleife, um Tables "durchzugehen"
(zu letzterem später mehr)
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Einen Zähler von 1 bis 4 laufen lassen
for meinZaehler = 1, 4 do
    print(meinZaehler)
end

-- alternativ kann auch die Schrittgröße beim Hochzählen angegeben werden
-- (negative Schritte sind ebenfalls möglich)
print("") -- leere Zeile ausgeben
for meinZaehler = 0, 2, 0.5 do
    print(meinZaehler)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  div.alert.alert-info Alle Schleifen können wie folgt mit dem Schlüssekwort `break` abgebrochen werden.
  // TODO

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
for i = 0, 10 do
    print(i)
    if i == 5 then
        break
        end
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Klammerung
Bedingungen können beliebig geklammert werden, wobei die Anzahl der geschlossenen Klammern mit der Anzahl der geöffneten übereinstimmen muss.

## Übung
### Teil 1: Verständnisfragen
Im ersten Teil der Übung sollen Verständnisfragen beantwortet werden.
1. Was ist der Unterschied zwischen einer if-Bedingung und einer Schleife?
2. Was ist der Unterschied zwischen einer for- und while Schleife?
3. Kann man mit einem Schleifentyp allen anderen Typen darstellen? Falls ja, mit welcher zum Beispiel?
    
#### Lösung
1. Eine if-Bedingung prüft nur __einmalig__ die Bedingung, wohingegen eine Schleife eine Bedingung überprüft und dann einen Vorgang z.B. bis zum Eintreten der Bedingung wiederholt
2. Eine for-Schleife verwendet immer einen Zähler und zählt bis zum Erreichen eines festgelegten Wertes. Eine while-Schleife führt Code so lange aus bis eine Bedingung nicht mehr eintritt
3. Ja, z.B. mit der while-Schleife lassen sich alle anderen Schleifen darstellen (siehe Teil 2)

### Teil 2: Umformen zwischen Schleifentypen
Wie in *Teil 1* schon angekündigt wurde lassen sich alle Schleifentypen ineinander mehr oder weniger problemlos überführen (wobei die for-Schleife einen Sonderfall darstellt)
    
In dieser Aufgabe soll nun folgende while-Schleife jeweils in eine repeat-until Schleife und for-Schleife überführt werden:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
i = 50
while i ~= -10 do
    i = i - 2
    print(i)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- repeat-until
i = 50
repeat
    i = i - 2
    print(i)
until i == -10

-- for
for i = 50-2, -10, -2 do
    print(i)
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
