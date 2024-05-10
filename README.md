# Zadanie10_Project-MVC
# Tytuł i nazwa wybranego projektu
System zarządzania listą zadań do przeczytania ( Zadanie 10 )
# Spis treści
Projekt polega na utworzeniu aplikacji, która umożliwi użytkownikom tworzenie i zarządzanie listą książek do przeczytania.
Użytkownicy mogą dodawać nowe pozycje do listy, oznaczać książki jako przeczytane oraz usuwać z listy.
Struktura projektu MVC:
- Model (models): definicja modelu pozycji do przeczytania (np. tytuł, autor, gatunek);
- Kontroler (controllers): obsługa żądań http, interakcja z modelem i przekazywanie danych do widoku;
- Widok: (views): widok listy książek do przeczytania, formularz dodawania nowej książki, formularz edycji informacji o książce.
# Listę i krótki opis zaimplementowanych w projekcie funkcjonalności
### 1. Dodawanie nowych pozycji do listy książek:
Tworzenie książki i dodawanie do bazy danych. Tworząc nową książkę, podajesz tytuł, autora, gatunek, rok wydania i kilka notatek, ale tylko tytuł i autor są polami wymaganymi, resztę możesz pozostawić pustą, jeśli chcesz
### 2. Oznaczanie książek jako przeczytane:
Zmiana właściwości książki z "nie przeczytane" (co jest ustawieniem domyślnym) na "przeczytane". Znajduje się w bazie danych
### 3. Usuwanie książek z listy:
Usuwanie wszystkich danych książki z listy oraz z bazy danych 
### 4. Redagowanie książek:
Zmiana wszystkich, usunięcie lub dodanie nowych danych do książki i jednocześnie w bazie danych
### 5. Przeglądanie stworzonych książek:
Wyświetlanie wszystkich danych z bazy danych jako lista na stronie głównej.
# Instrukcja obsługi
Żeby uruchomić aplikację trzeba uruchomić plik app.js lub wpisać w konsolę "npm start" i następnie zainstalować wszystkie zależności zapisane w package.json. A dane wejściowe już wpisane i przechowują się w bazie danych cloud MongoDB, link do której znajduje się w pliku .env
