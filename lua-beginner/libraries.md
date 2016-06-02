# Weitere Lua Biliotheken
Lua Bibliotheken sind Erweiterungen für Lua. Die hier angesprochenen Bibliotheken werden in der Standard-Distribution von Lua
mitgeliefert. Aus Sicherheitsgründen werden einige Bibliotheken wie die OS-Bibliothek in kritischen Anwendungen jedoch nicht geladen.
Alle hier vorgestellten Bibliotheken sind assoziative Tables, die Funktionen enthalten.

// http://pgl.yoyo.org/luai/i/5.6+Mathematical+Functions

## Mathe
In vielen Fällen sind komplexere Matheoperationen als `+, -, \*, /` nötig.
Dazu stellt Lua die `math`-Bibliothek bereit.<br/>
Da die meisten Funktionen selbsterklärend sind, werden hier nur einige prominente Beispiele aufgezeigt.
    
Eine vollständige Liste ist hier zu finden: http://pgl.yoyo.org/luai/i/5.6+Mathematical+Functions
    
### Winkelfunktionen: math.sin, math.cos, math.tan
Wenn man mit Seiten und Winkeln rechnet, sind trigonometrische Funktionen unerlässlich, daher bringt auch Lua sie mit.   
Die umgedrehten/inversen (Arcus) Funktionen tragen das Präfix *a*. Ein Sonderfall stellt hier `math.atan2`, welcher das Vorzeichen (also den Quadranten) mit berücksichtigt.   
Alle Winkel werden dabei im Bogenmaß (Vielfache von Pi) angegeben, können aber mit der Funktion `math.rad` umgerechnet werden.
 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Sinus von 90° berechnen
local wert1 = math.sin(math.rad(90))
print(wert1)

-- Sinus von Pi/2 berechnen (entspricht Sinus von 90°)
local wert2 = math.sin(math.pi/2)
print(wert2)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Runden
Oft gebraucht werden außerdem häufig Funktionen zum Auf- und Abrunden. `math.floor` rundet zahlen ab, `math.ceil` auf.   
"Richtig runden" kann Lua von Haus aus nicht, dieses kann aber schnell nachgerüstet werden (zumindest das Runden auf ganze Zahlen)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Abrunden
print(math.floor(5.7))

-- Aufrunden
print(math.ceil(5.2))

-- Runden
function math.round(n)
    return math.floor(n + 0.5)
end
print(math.round(5.4))
print(math.round(5.6))
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Table Utils
Hilfreich ist manchmal auch die Table Bibliothek, welche Elemente ans Ende einer Table einfügen oder entfernen kann oder auch Tables sortiert.   
Vollständige Liste: http://pgl.yoyo.org/luai/i/5.5+Table+Manipulation
  
## System Bibliothek
Zugriffe auf Funktionen des Systems findet man in der `os`-Bibliothek. Mit `os.execute` lässt sich bspw. ein beliebiger Befehl auf der Konsole ausführen.

Vollständige Liste: http://pgl.yoyo.org/luai/i/5.8+Operating+System+Facilities

div.alert.alert-warning Diese Bibliothek wird in den meisten Anwendungen aus Sicherheitsgründen nicht geladen.
    
## Eingabe/Ausgabe
Wenn man mit dem Standalone-Interpreter von Lua arbeitet, möchte man i.d.R. auch Eingaben vom Benutzer akzeptieren oder Dateien speichern oder auslesen.
Dies ist mit der io-Bibliothek möglich.

Vollständige Liste: http://pgl.yoyo.org/luai/i/5.7+Input+and+Output+Facilities

div.alert.alert-warning Diese Bibliothek wird bei vielen Anwendungen aus Sicherheitsgründen nicht geladen, da sie standardmäßig uneingeschränkten Zugriff auf das Dateisystem erlaubt.

## debug, coroutine
Es gibt noch 2 weitere Bibliotheken, die etwas komplizierter sind und daher erst im fortgeschrittenen Tutorial diskutiert werden.
