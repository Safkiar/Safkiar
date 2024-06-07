i18next.init(
  {
    lng: localStorage.getItem("language") || "en",
    resources: {
      en: {
        translation: {
          welcome_message: "Hello!",
          firstHeading:
            "I am self-taught front-end web developer, my enthusiasm for technology and programming is a personal passion that I actively pursue each day, without exception. I am eager to transition this commitment into a professional setting where I can contribute to the success of an organization while simultaneously refining my skills.",
          secondHeading:
            "I have devoted numerous hours to comprehensive courses to increase my knowledge base, successfully completed a substantial number of coding exercises , and brought several projects to completion. I invite you to review these accomplishments of my portfolio.",
          thirdHeading:
            "With a hunger for learning programming, I am in search of a role that presents new challenges and opportunities for growth. If you are looking for a dyscyplined and creative developer with an insatiable drive , I would be delighted to discuss how my skills and ambitions align with the goals of your company.",
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
          psycholog:
            "Master`s degree, Career Counseling and Organizational Psychology, University of Łódź",
          opis: "During this time I worked as a personal trainer for 2 years, completed a 2-year medical school as a massage therapist, did internships as a recruiter and psychologist in a psychiatric hospital, and worked as a waiter",
          staty: "Statistics",
          kursy: "Coding courses",
          projekty: "Finished projects",
          taski: "Finished tasks",
          skl: "Skills",
          dyplom: "Other diplomas",
          p5: "The booking management app built with React, React Query, and Supabase offers comprehensive features including booking and cabin management with editable details. It provides real-time statistics and interactive charts, supports dark mode, and is fully responsive. User authentication and settings are securely handled through Supabase, demonstrating proficiency in modern frontend technologies and effective backend integration.",
          p4: "Mix React project is a dynamic web application that offers a variety of interface solutions. It encompasses a wide range of features such as informational cards, interactive quizzes, a finance management module resembling online banking, a currency converter facilitating quick calculations, as well as tools for handling dates. It's a comprehensive environment that combines diverse interface components, providing users with a rich experience in utilizing various functions all in one place.",
          p3: "Pizza ordering app, developed with Tailwind CSS, offers a seamless user experience for ordering pizza online. Users can easily browse through a variety of pizzas, add them to their cart and securely checkout using their preferred payment method.",
          p2: "Mini Chess is an innovative 6x8 adaptation of traditional chess, incorporating full game rules including castling, en passant, and pawn promotion. This streamlined version amplifies strategic intricacies by condensing the battlefield, compelling players to engage in complex tactics and maneuvers within a compact space. It stands as a testament to skillful game design and programming, ideal for those seeking to refine their chess strategy in a novel format.",
          p1: "Forkify is your culinary companion, bringing a world of flavors right to your fingertips. This elegant recipe finder allows food enthusiasts to explore over a million recipes with ease. Utilizing a comprehensive API, Forkify not only helps users search for recipes but also provides features to save and organize favorite dishes into a personal collection. Its intuitive interface and robust functionality cater to the modern cook’s needs, making it simple to discover new meals and master culinary skills. Built with an MVC structure, Forkify exemplifies streamlined design and efficient data management for an optimal user experience",
        },
      },
      pl: {
        translation: {
          welcome_message: "Cześć!",
          firstHeading:
            "Samodzielnie poświęcam się nauce front-end web developmentu. Moja entuzjastyczna pasja do technologii i programowania jest osobistą pasją, którą aktywnie realizuję każdego dnia, bez wyjątku. Chętnie przekształcę to zaangażowanie w profesjonalne środowisko, gdzie będę mógł przyczynić się do sukcesu organizacji, jednocześnie doskonaląc swoje umiejętności.",
          secondHeading:
            "Poświęciłem niezliczone godziny na kompleksowe kursy, aby zwiększyć swoją bazę wiedzy, z powodzeniem ukończyłem znaczną liczbę ćwiczeń programistycznych i zrealizowałem kilka projektów. Zapraszam do zapoznania się z tymi osiągnięciami w moim portfolio.",
          thirdHeading:
            "Głodny nauki programowania, szukam roli, która stawia nowe wyzwania i możliwości rozwoju. Jeśli szukasz zdyscyplinowanego i kreatywnego dewelopera z nienasyconym zapałem, z przyjemnością omówię, jak moje umiejętności i ambicje łączą się z celami Twojej firmy.",
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
          still2: "Lipiec 2016",
          psycholog:
            "Magister, Psychologia doradztwa zawodowego i organizacji, Uniwersytet Łódzki",
          opis: "Podczas tego czasu, pracowałem  jako trener personalny przez 2 lata, ukończyłem 2 letnią szkołę medyczną z tytułem technika zawodowego masażysty, robiłem praktyki jako rekruter i psycholog w szpitalu psychiatrycznym oraz pracowałem jako kelner",
          staty: "Statystyki",
          kursy: "Kursy kodowania",
          projekty: "Skończone projekty",
          taski: "Skończone zadania",
          skl: "Umiejętności",
          dyplom: "Inne dyplomy",
          p5: "Aplikacja do zarządzania rezerwacjami zbudowana przy użyciu React, React Query i Supabase oferuje kompleksowe funkcje, w tym zarządzanie rezerwacjami i kabinami z możliwością edytowania szczegółów. Zapewnia statystyki w czasie rzeczywistym i interaktywne wykresy, obsługuje tryb ciemny i jest w pełni responsywna. Uwierzytelnianie użytkowników i ustawienia są bezpiecznie obsługiwane przez Supabase, co demonstruje biegłość w nowoczesnych technologiach frontendowych oraz skuteczną integrację z backendem.",
          p4: "Projekt Mix React to dynamiczna aplikacja internetowa, która oferuje różnorodne rozwiązania interfejsowe. Obejmuje szeroki zakres funkcji, takich jak karty informacyjne, interaktywne quizy, moduł zarządzania finansami przypominający bankowość online, konwerter walut umożliwiający szybkie obliczenia oraz narzędzia do obsługi dat. Jest to kompleksowe środowisko łączące różnorodne komponenty interfejsu, zapewniające użytkownikom bogate doświadczenie w korzystaniu z różnych funkcji w jednym miejscu.",
          p3: "Aplikacja do zamawiania pizzy, rozwinięta przy użyciu Tailwind CSS, oferuje płynne doświadczenie użytkownika podczas zamawiania pizzy online. Użytkownicy mogą łatwo przeglądać różne rodzaje pizz, dodawać je do koszyka i bezpiecznie finalizować zamówienie za pomocą preferowanej metody płatności.",
          p2: "Mini Chess to innowacyjna adaptacja tradycyjnych szachów na planszy 6x8, zawierająca pełne zasady gry, w tym roszady, en passant i promocję pionka. Ta uproszczona wersja wzmacnia strategiczne zawiłości, kondensując pole walki, zmuszając graczy do angażowania się w skomplikowane taktyki i manewry w ograniczonej przestrzeni. Jest to świadectwo umiejętnego projektowania gier i programowania, idealne dla tych, którzy chcą doskonalić swoją strategię szachową w nowym formacie.",
          p1: "Forkify to Twój kulinarny towarzysz, który przynosi świat smaków na wyciągnięcie ręki. Ten elegancki wyszukiwacz przepisów pozwala entuzjastom jedzenia z łatwością eksplorować ponad milion przepisów. Wykorzystując kompleksowe API, Forkify nie tylko pomaga użytkownikom wyszukiwać przepisy, ale także oferuje funkcje zapisywania i organizowania ulubionych dań w osobistą kolekcję. Jego intuicyjny interfejs i solidna funkcjonalność spełniają potrzeby nowoczesnych kucharzy, ułatwiając odkrywanie nowych potraw i doskonalenie umiejętności kulinarnych. Zbudowany w strukturze MVC, Forkify jest przykładem zoptymalizowanego projektu i efektywnego zarządzania danymi dla optymalnego doświadczenia użytkownika.",
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
