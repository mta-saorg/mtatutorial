/*
  Title: Blöcke und Gültigkeitsbereiche
  Sort: 6
*/
# Blöcke und Gültigkeitsbereiche
Variablen sind eine schöne Sache; bei größeren Skripten (die schon mal locker mehrere 1000 Variablennamen haben könnne) müsste man sich schon eine besondere Konvention wie
*meinZaehler1, meinZaehler2, meinZaehler3, ...* überlegen, um Namenskonflikte zu vermeiden.
Bei noch mehr Variablen geht das auf die Dauer natürlich schief.<br/>
Dies ist ein Grund dafür, dass man Gültigkeitsbereiche und sog. lokale Variablen eingeführt hat (ein anderer Grund ist Speichereffizienz)

## Was ist ein Block?
Ein Block ist der Code zwischen dem `then` und `end` einer if-Bedingung oder der Code zwischen dem `do` und `end` einer Schleife.
In diesem Tutorial sind neue Blöcke immer eingerückt (d.h. um ein paar Tabs oder Leerzeichen versetzt), um die Übersicht zu steigern.
Dies ist auch generell so üblich und daher eingehalten werden.

## Gültigkeitsbereiche
Gültigkeitsbereiche (engl. <strong>Scope</strong>) sind die Bereiche, in denen eine lokale Variable gültig ist.
    
## Lokale Variablen
Lokale Variablen sind nur in ihrem Gültigkeitsbereich, ihrem Block gültig und werden nach Verlassen des Blocks im Regelfall gelöscht.
Sie werden mit dem Schlüsselwort `local` vor dem Variablennamen definiert.
  
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
~EXECUTABLE~
-- Diese Variable ist nur in dieser Skriptdatei gültig
local a = 1

if true then
-- Diese Variable ist nur in diesem Block (der if-Bedingung) gültig
local b = 2
print(b)
end

-- Hier ist die Variable nicht mehr gültig
-- Zur Erinnerung: Nicht definierte/gültige Variablen haben den Wert nil
print(b)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
## Definition von Blöcken
Blöcke lassen sich auch ohne Kontrollstrukturen definieren. In der Praxis sieht man dies jedoch eher selten.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~lua
-- Block einleiten
do
  -- Irgendwas im Block
end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Verdeckung
Verdeckung nennt man das Verhalten, wenn ein lokale Variable in einem Block neu deklariert wird. In diesem Fall wird nicht der alte Wert geändert/überschrieben, sondern es wird bis zum Ende des Blocks mit der neu deklarierten Variable weitergerechnet.
  
## Übung
In dieser Übung sind Verständnisfragen zu beantworten
1. Welcher Variablentyp ist im Allgemeinen zu bevorzugen?
2. Welchen Wert wird `a` nach der Ausführung folgenden Codes haben?
    ~~~~~~~~~~~~~~~~~~~~lua
    local a = 20

    do
      a = 30
      
      do
        local a = 52
      end
      
      a = a + 1
    end
    ~~~~~~~~~~~~~~~~~~~~

### Lösung
1. Wenn möglich, sind lokale Variablen zu bevorzugen, da der Zugriff auf die zum einen schneller ist und zum anderen ungewollte Überschreibung von Variablen vermieden werden kann
2. `a` wird nach der Ausführung den Wert 31 haben. Der Ablauf ist wie folgt: Als erstes wird die lokale Variable mit dem Wert *20* initialisiert. Im neuen Block
danach erhält *a* den Wert *30* (da dieser unter den Gültigkeitsbereich des vorher definierten *a* fällt). Im nächsten Block darauf wird eine neue lokale Variable deklariert,
die das vorherige *a* verdeckt.
Im nächsten Schritt wird der verdeckte Bereich verlassen, sodass *a* wieder den Wert *30* hat, sodass die Inkrementierung *a* zu *31* werden lässt.
