# Funktionen
## Motivation
Oft ist man in der Situation, dass ein bestimmer Codeteil an bestimmten Stellen immer wieder benötigt wird (z.B. eine komplexere Berechnung).
Diesen Code jedes Mal komplett zu kopieren würde nicht nur viele unnötige Codezeilen erzeugen, sondern auch die Wartbarkeit erheblich verringern, da im Falle eines Bugs in
diesem Codeteil alle Stellen gefunden und repariert werden müssen, obwohl es sowieso überall der gleiche Code ist.   
Wie sich jetzt leicht vermuten lässt, lösen Funktionen dieses Problem.
    
## Parameter
In vielen Fällen ist der Code in einer Funktion von zusätzlichen Eingaben abhängig. Damit nicht für jeden nur erdenklichen Fall dieser abhängigen Werte eine eigene Funktion
geschrieben werden muss, wurden die sogenannten __(Funktions-)parameter__ eingeführt.
    
## Rückgabewert
Da in den meisten Fällen nicht nur eine bestimmte Prozedur ausgeführt wird, muss eine Funktion nicht nur Eingaben (über Parameter), sondern auch __Ausgaben__ erzeugen können.
Dazu gibt es die sogenannten __Rückgabewerte__.

## Syntax
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Funktionen mit dem Namen "meineFunktion" definieren
function meineFunktion(parameter1, parameter2) -- mit 2 Eingaben
    -- beide Parameter (Eingaben) addieren und in Variable "ergebnis" speichern
    local ergebnis = parameter1 + parameter2

    -- hier kann nahezu jeder beliebige Code stehen

    -- Rückgaben werden mit dem "return" Schlüsselwort angegeben
    return ergebnis
end

-- Jetzt die Funktion "aufrufen"
local rueckgabe = meineFunktion(1, 3)
print(rueckgabe)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Funktionen werden mit dem Schlüsselwort `function` eingeleitet, direkt gefolgt vom Namen der Funktion.
Danach folgen in runden Klammern die Namen der Parameter. Die Parameter verhalten sich innerhalb der Funktion genauso wie lokale Variablen.   
Schließlich wird mit dem Schlüsselwort `return` die <i>lokale</i> Variable `ergebnis` zurückgegeben.

Der Aufruf der Funktion sollte dir von der Funktion `print` bekannt vorkommen, die uns schon die ganze Zeit begleitet hat.
Hier wird ganz intuitiv der Name der Funktion, gefolgt von runden Klammern, zwischen denen sich die Eingaben/Parameter der Funktion befinden, geschrieben.
Dabei können natürlich sowohl Variablen als auch direkt Werte (*Literale*) übergeben werden.
    
  div.alert.alert-info
    __Pro tip:__ Es können in Lua auch mehrere Werte zurückgegeben werden, indem diese mit Kommata separiert hintereinander nach dem `return`-Schlüsselwort aufgelistet werden

## Übung
### Teil 1
In dieser Aufgabe soll eine Funktion geschrieben werden, die 2 beliebige Variablen (Zahlen) als Parameter der Funktion *a* und *b* addiert, anschließend mit 2 multipliziert und zurückgibt.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Funktion mit 2 Paramtetern a und b definieren
function addAndMultiply(a, b)
    -- Da a + b zuerst gerechnet werden soll und Punkt vor Strichrechnung gilt, muss a + b geklammert werden
    return (a + b) * 2
end

-- Funktion aufrufen (Test) und Ergebnis ausgeben
print(addAndMultiply(2, 3)) -- erwartetes Ergebnis (2 + 3)*2 = 5*2 = 10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Teil 2
In dieser Aufgabe sollen mehrere Elemente geübt werden. Dazu wird folgende Situation angenommen: Wir entwickeln ein Computerspiel und müssen dazu eine Funktion namens "checkGateAccess" für ein Tor schreiben, das nur für bestimmte Spielernamen auf geht.
Durch den Rest des Scriptes ist vorgegeben, dass das Tor nur auf geht, wenn unsere Funktion den Wahrheitswert `true`, also wahr, zurückgibt.
Anschließend soll die Funktion mit den Namen "Harry", "Günther", "Fritz" und "Shantal" getestet werden, wobei nur "Fritz" und "Shantal" das Tor öffnen können.
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
function checkGateAccess(name)
    if name == "Fritz" or name == "Shantal" then
        print("Tor auf")
        return true
    else
        print("Tor zu")
        return false
    end
end

-- Testen
print(checkGateAccess("Harry"))
print(checkGateAccess("Günther"))
print(checkGateAccess("Fritz"))
print(checkGateAccess("Shantal"))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
