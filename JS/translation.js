i18next.init(
  {
    lng: localStorage.getItem("language") || "en",
    resources: {
      en: {
        translation: {
          welcome_message: "Hi, I'm Michał Kikowski!",
          firstHeading: "I specialize in Full Stack Development",
          secondHeading: "Check out my projects",
          thirdHeading: "And get in touch with me!",
          navHome: "Home",
          navProjects: "Projects",
          navCertificates: "Certificates",
          navExperience: "Experience",
          navAbout: "About me",
          cats: "I love my cats ❤",
          zagraj: "Play with me",
          boks: "I enjoy boxing class",
          train: "I often working out 💪",
          joined: "joined",
          data: "September 2021",
          end: "Left position",
          WorkExp: "Work Experience",
          still: "Still employed",
          sector:
            "Business Banking Sector with Exception Handling and IT support",
          joined2: "October 2016",
          still2: "July 2021",
          still3: "Still employed",
          data3: "August 2024",
          psycholog:
            "Master`s degree, Career Counseling and Organizational Psychology, University of Łódź",
          opis: "During this time I worked as a personal trainer for 2 years, completed a 2-year medical school as a massage therapist, did internships as a recruiter and psychologist in a psychiatric hospital, and worked as a waiter",
          staty: "Statistics",
          kursy: "Coding courses",
          projekty: "Finished projects",
          taski: "Finished tasks",
          skl: "Skills",
          dyplom: "Other diplomas",
          p8: "The Search Tool is a React-Redux-based feature designed to help users filter and retrieve data efficiently from a table of user information. The tool provides dynamic filtering, performance optimizations, and seamless user interactions, making data retrieval both fast and flexible.",
          p7: "The Well-Schedule website is a user-friendly platform for managing events, allowing for detailed customization, such as setting occurrences for specific weeks of the month. Adding events is straightforward—just a simple click is required. The platform provides a clear view of your schedule with daily, weekly, and monthly calendar options. Additionally, it integrates seamlessly with Firebase and utilizes the React Scheduler library for robust performance and functionality.",
          p6: "Daily Quest is a React-based application designed to help users manage their tasks and goals efficiently. Users can add and track quests that are daily, one-time, or recurring on specific days. The app also includes features for adding and editing notes, providing detailed information about each quest. Additionally, it offers a calendar view for an organized overview of upcoming tasks and progress tracking. This comprehensive tool ensures users stay on top of their quests and improve productivity.",
          p5: "The booking management app built with React, React Query, and Supabase offers comprehensive features including booking and cabin management with editable details. It provides real-time statistics and interactive charts, supports dark mode, and is fully responsive. User authentication and settings are securely handled through Supabase, demonstrating proficiency in modern frontend technologies and effective backend integration.",
          p4: "Mix React project is a dynamic web application that offers a variety of interface solutions. It encompasses a wide range of features such as informational cards, interactive quizzes, a finance management module resembling online banking, a currency converter facilitating quick calculations, as well as tools for handling dates. It's a comprehensive environment that combines diverse interface components, providing users with a rich experience in utilizing various functions all in one place.",
          p3: "Pizza ordering app, developed with Tailwind CSS, offers a seamless user experience for ordering pizza online. Users can easily browse through a variety of pizzas, add them to their cart and securely checkout using their preferred payment method.",
          p2: "Mini Chess is an innovative 6x8 adaptation of traditional chess, incorporating full game rules including castling, en passant, and pawn promotion. This streamlined version amplifies strategic intricacies by condensing the battlefield, compelling players to engage in complex tactics and maneuvers within a compact space. It stands as a testament to skillful game design and programming, ideal for those seeking to refine their chess strategy in a novel format.",
          p1: "Forkify is your culinary companion, bringing a world of flavors right to your fingertips. This elegant recipe finder allows food enthusiasts to explore over a million recipes with ease. Utilizing a comprehensive API, Forkify not only helps users search for recipes but also provides features to save and organize favorite dishes into a personal collection. Its intuitive interface and robust functionality cater to the modern cook’s needs, making it simple to discover new meals and master culinary skills. Built with an MVC structure, Forkify exemplifies streamlined design and efficient data management for an optimal user experience",
          openContent: "Libraries",
          openContent2: "Databases and tools",
        },
      },
      pl: {
        translation: {
          welcome_message: "Cześć, jestem Michał Kikowski!",
          firstHeading: "Zajmuje się Full Stack Development",
          secondHeading: "Zapoznaj się z moimi projektami",
          thirdHeading: "I skontaktuj się ze mną!",
          navHome: "Główna",
          navProjects: "Projekty",
          navCertificates: "Certyfikaty",
          navExperience: "Doświadczenie",
          navAbout: "O mnie",
          cats: "Kocham moje koty ❤",
          zagraj: "Zagraj ze mną",
          boks: "Uwielbiam zajęcia z boksu",
          train: "Często ćwiczę 💪",
          joined: "Rozpoczęto",
          data: "Wrzesień 2021",
          end: "Zakończono",
          WorkExp: "Doświadczenie zawodowe",
          still: "Wciąż zatrudniony",
          sector: "Sektor Biznes Banking z obsługą wyjątkową i wsparciem IT",
          joined2: "Październik 2016",
          still2: "Lipiec 2021",
          still3: "Wciąż zatrudniony",
          data3: "Sierpień 2024",
          psycholog:
            "Magister, Psychologia doradztwa zawodowego i organizacji, Uniwersytet Łódzki",
          opis: "Podczas tego czasu, pracowałem  jako trener personalny przez 2 lata, ukończyłem 2 letnią szkołę medyczną z tytułem technika zawodowego masażysty, robiłem praktyki jako rekruter i psycholog w szpitalu psychiatrycznym oraz pracowałem jako kelner",
          staty: "Statystyki",
          kursy: "Kursy kodowania",
          projekty: "Skończone projekty",
          taski: "Skończone zadania",
          skl: "Umiejętności",
          dyplom: "Inne dyplomy",
          p8: "Narzędzie wyszukiwania to funkcja oparta na React-Redux, zaprojektowana w celu pomocy użytkownikom w filtrowaniu i efektywnym pobieraniu danych z tabeli informacji o użytkownikach. Narzędzie zapewnia dynamiczne filtrowanie, optymalizację wydajności oraz bezproblemową interakcję z użytkownikiem, dzięki czemu pobieranie danych jest szybkie i elastyczne.",
          p7: "Strona Well-Schedule to przyjazna użytkownikowi platforma do zarządzania wydarzeniami, umożliwiająca szczegółową personalizację, taką jak ustawianie powtarzalności na konkretne tygodnie miesiąca. Dodawanie wydarzeń jest bardzo proste — wystarczy jedno kliknięcie. Platforma oferuje przejrzysty widok harmonogramu z opcjami kalendarza dziennego, tygodniowego i miesięcznego. Dodatkowo, integruje się bezproblemowo z Firebase i korzysta z biblioteki React Scheduler, co zapewnia wydajność i funkcjonalność.",
          p6: "Daily Quest to aplikacja oparta na React, zaprojektowana w celu efektywnego zarządzania zadaniami i celami użytkowników. Użytkownicy mogą dodawać i śledzić zadania, które są codzienne, jednorazowe lub powtarzające się w określone dni. Aplikacja zawiera również funkcje dodawania i edytowania notatek, umożliwiające szczegółowy opis każdego zadania. Dodatkowo, oferuje widok kalendarza, aby zapewnić zorganizowany przegląd nadchodzących zadań i śledzenie postępów. To wszechstronne narzędzie pomaga użytkownikom być na bieżąco ze swoimi zadaniami i zwiększać produktywność.",
          p5: "Aplikacja do zarządzania rezerwacjami zbudowana przy użyciu React, React Query i Supabase oferuje kompleksowe funkcje, w tym zarządzanie rezerwacjami i kabinami z możliwością edytowania szczegółów. Zapewnia statystyki w czasie rzeczywistym i interaktywne wykresy, obsługuje tryb ciemny i jest w pełni responsywna. Uwierzytelnianie użytkowników i ustawienia są bezpiecznie obsługiwane przez Supabase, co demonstruje biegłość w nowoczesnych technologiach frontendowych oraz skuteczną integrację z backendem.",
          p4: "Projekt Mix React to dynamiczna aplikacja internetowa, która oferuje różnorodne rozwiązania interfejsowe. Obejmuje szeroki zakres funkcji, takich jak karty informacyjne, interaktywne quizy, moduł zarządzania finansami przypominający bankowość online, konwerter walut umożliwiający szybkie obliczenia oraz narzędzia do obsługi dat. Jest to kompleksowe środowisko łączące różnorodne komponenty interfejsu, zapewniające użytkownikom bogate doświadczenie w korzystaniu z różnych funkcji w jednym miejscu.",
          p3: "Aplikacja do zamawiania pizzy, rozwinięta przy użyciu Tailwind CSS, oferuje płynne doświadczenie użytkownika podczas zamawiania pizzy online. Użytkownicy mogą łatwo przeglądać różne rodzaje pizz, dodawać je do koszyka i bezpiecznie finalizować zamówienie za pomocą preferowanej metody płatności.",
          p2: "Mini Chess to innowacyjna adaptacja tradycyjnych szachów na planszy 6x8, zawierająca pełne zasady gry, w tym roszady, en passant i promocję pionka. Ta uproszczona wersja wzmacnia strategiczne zawiłości, kondensując pole walki, zmuszając graczy do angażowania się w skomplikowane taktyki i manewry w ograniczonej przestrzeni. Jest to świadectwo umiejętnego projektowania gier i programowania, idealne dla tych, którzy chcą doskonalić swoją strategię szachową w nowym formacie.",
          p1: "Forkify to Twój kulinarny towarzysz, który przynosi świat smaków na wyciągnięcie ręki. Ten elegancki wyszukiwacz przepisów pozwala entuzjastom jedzenia z łatwością eksplorować ponad milion przepisów. Wykorzystując kompleksowe API, Forkify nie tylko pomaga użytkownikom wyszukiwać przepisy, ale także oferuje funkcje zapisywania i organizowania ulubionych dań w osobistą kolekcję. Jego intuicyjny interfejs i solidna funkcjonalność spełniają potrzeby nowoczesnych kucharzy, ułatwiając odkrywanie nowych potraw i doskonalenie umiejętności kulinarnych. Zbudowany w strukturze MVC, Forkify jest przykładem zoptymalizowanego projektu i efektywnego zarządzania danymi dla optymalnego doświadczenia użytkownika.",
          openContent: "Biblioteki",
          openContent2: "Bazy danych i narzędzia",
        },
      },
    },
  },
  function (err, t) {
    if (err) return console.error(err);

    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, function () {
    localStorage.setItem("language", lng); // Save the selected language to localStorage
    updateContent();
  });
}
