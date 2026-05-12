"use client";

import { useEffect, useRef, useCallback } from "react";
/* eslint-disable @next/next/no-img-element */

function fmt(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function Home() {
  const callsRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const daysRef = useRef<HTMLInputElement>(null);
  const callsValRef = useRef<HTMLDivElement>(null);
  const valueValRef = useRef<HTMLDivElement>(null);
  const daysValRef = useRef<HTMLDivElement>(null);
  const lossRef = useRef<HTMLSpanElement>(null);
  const visitsRef = useRef<HTMLDivElement>(null);
  const recalc = useCallback(() => {
    const calls = +(callsRef.current?.value ?? 80);
    const visitValue = +(valueRef.current?.value ?? 500);
    const clinicHours = +(daysRef.current?.value ?? 12);
    if (callsValRef.current) callsValRef.current.textContent = String(calls);
    if (valueValRef.current) valueValRef.current.textContent = fmt(visitValue);
    if (daysValRef.current) daysValRef.current.textContent = clinicHours + "h";

    const workingDaysPerMonth = 22;
    const newPatientCallRatio = 0.15;
    const receptionHours = 8;
    const unattendedHours = Math.max(0, clinicHours - receptionHours);
    const unattendedRatio = unattendedHours / clinicHours;
    const baseDropRate = 0.15;
    const afterHoursDropRate = 0.65;
    const totalLostRatio = baseDropRate * (1 - unattendedRatio) + afterHoursDropRate * unattendedRatio;
    const lostCallsPerDay = calls * newPatientCallRatio * totalLostRatio;
    const monthlyLostVisits = Math.round(lostCallsPerDay * workingDaysPerMonth);
    const monthlyLoss = Math.round(monthlyLostVisits * visitValue);

    if (lossRef.current) lossRef.current.textContent = fmt(monthlyLoss);
    if (visitsRef.current)
      visitsRef.current.innerHTML = `to ok. <strong>${monthlyLostVisits} wizyt miesięcznie</strong>, które nie dochodzą do realizacji.`;
  }, []);

  function toggleFaq(btn: HTMLButtonElement) {
    const item = btn.parentElement;
    if (!item) return;
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item.open")
      .forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  }

  useEffect(() => {
    recalc();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("section > .wrap > *, .statbar-inner")
      .forEach((el) => {
        el.classList.add("reveal");
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, [recalc]);

  // Generate 120 waveform bars
  const bars = Array.from({ length: 120 }, (_, i) => (
    <div key={i} className="bar" />
  ));

  return (
    <>
      {/* ============== NAV ============== */}
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo logo-only">
            <img src="/logo.png" alt="Fonivo" className="logo-img" />
          </a>
          <div className="nav-links">
            <a href="#how">Wdrożenie</a>
            <a href="#audience">Branże</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Kontakt</a>
          </div>
          <a href="https://calendly.com/kontakt-fonivo/30min" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Zarezerwuj demo
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </nav>

      {/* ============== HERO ============== */}
      <section className="hero">
        <div className="waveform-wrap">
          <div className="waveform">{bars}</div>
        </div>
        <div className="wrap">
          <span className="eyebrow">
            <span className="pulse"></span>
            Voice AI dla prywatnych klinik medycznych
          </span>
          <h1>
            Recepcja, która{" "}
            <span className="accent">nie pozwala</span> odejść żadnemu
            pacjentowi.
          </h1>
          <p className="lead">
            Voice agent AI odbiera telefony Twojej kliniki przez całą dobę.
            <br />
            Sprawdza kalendarz, umawia wizyty i brzmi jak człowiek.
            <br />
            Wdrażamy w 14 dni bez zmiany Twojego systemu.
          </p>

          <a href="https://calendly.com/kontakt-fonivo/30min" target="_blank" rel="noopener noreferrer" className="hero-cta">
            Zarezerwuj demo
            <span className="arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </a>
          <div className="hero-meta">
            30 minut. Konkretna rozmowa o Twojej klinice. Bez prezentacji
            handlowej.
          </div>

          <ul className="hero-bullets">
            <li>
              <svg
                className="check"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Wizyty po godzinach pracy
            </li>
            <li>
              <svg
                className="check"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Działa z Twoim kalendarzem
            </li>
            <li>
              <svg
                className="check"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Naturalny głos, po polsku
            </li>
          </ul>
        </div>
      </section>

      {/* ============== STATS ============== */}
      <section className="statbar" style={{ padding: 0 }}>
        <div className="statbar-inner">
          <div className="statbar-grid">
            <div className="stat">
              <div className="stat-num">39%</div>
              <div className="stat-label">
                pacjentów dzwoni do klinik poza standardowymi godzinami pracy
                recepcji
              </div>
            </div>
            <div className="stat">
              <div className="stat-num">65%</div>
              <div className="stat-label">
                tych pacjentów rezygnuje z wizyty, gdy nikt nie odbiera telefonu
              </div>
            </div>
            <div className="stat">
              <div className="stat-num">1 z 4</div>
              <div className="stat-label">
                leadów z reklamy nie zostaje pacjentem przez przeoczone
                połączenie
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROBLEM ============== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Problem</span>
            <h2 className="section-title">
              Twoja klinika płaci
              <br />
              za pacjentów, których <span className="accent">traci</span>.
            </h2>
            <p className="section-lead">
              Wydajesz tysiące złotych miesięcznie na to, żeby telefon
              zadzwonił.
              <br />
              <span className="accent">
                Co dzieje się, gdy nikt nie odbiera?
              </span>
            </p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-num">01 / TELEFONY</div>
              <h3>Giną po godzinach pracy</h3>
              <p>
                Większość pacjentów dzwoni wieczorem po pracy, po dziecku, po
                problemie z zębem. Twoja recepcja już śpi. Konkurencja odbiera.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-num">02 / MARKETING</div>
              <h3>Wyrzucony w błoto</h3>
              <p>
                Płacisz 8–15 tysięcy miesięcznie za leady z Google Ads. Co
                czwarty z nich nie zostaje pacjentem, bo telefon dzwoni wtedy,
                gdy nikt nie może go odebrać.
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-num">03 / CZAS</div>
              <h3>Twój zespół nie nadąża</h3>
              <p>
                Każdy dzień przynosi dziesiątki telefonów. Część trafia na
                zajętą linię, część na pocztę głosową. Pacjent nie czeka,
                dzwoni do konkurencji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Jak to działa</span>
            <h2 className="section-title">
              Voice agent, który{" "}
              <span className="accent">
                pracuje
                <br />
                za Ciebie
              </span>
              , w 14 dni.
            </h2>
            <p className="section-lead">
              Trzy kroki, jeden opiekun, zero korpo-procesu. Konfigurujemy
              wszystko za Ciebie.
            </p>
          </div>

          <div className="how-grid">
            <div className="how-card">
              <div className="how-step">
                <span className="step-num">01</span> Konsultacja
              </div>
              <h3>Poznajemy Twoją klinikę</h3>
              <p>
                Rozmowa strategiczna o Twojej klinice. Poznajemy specyfikę,
                usługi i potrzeby, żeby skroić agenta głosowego na miarę.
              </p>
              <div className="how-time">~ 30 minut</div>
            </div>
            <div className="how-card">
              <div className="how-step">
                <span className="step-num">02</span> Konfiguracja
              </div>
              <h3>Budujemy agenta pod Twoją klinikę</h3>
              <p>
                Wprowadzamy wszystkie informacje o Twojej klinice, lekarzach i
                usługach. Łączymy agenta z kalendarzem i numerem telefonu.
              </p>
              <div className="how-time">~ maks. 14 dni</div>
            </div>
            <div className="how-card">
              <div className="how-step">
                <span className="step-num">03</span> Start
              </div>
              <h3>Włączamy 24/7</h3>
              <p>
                Voice agent odbiera telefony, sprawdza dostępność, umawia
                wizyty. Ty otrzymujesz raporty i śpisz spokojnie.
              </p>
              <div className="how-time">~ start</div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="https://calendly.com/kontakt-fonivo/30min" target="_blank" rel="noopener noreferrer" className="hero-cta">
              Zarezerwuj demo
              <span className="arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============== DIFFERENTIATION ============== */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Dlaczego Fonivo</span>
            <h2 className="section-title">
              Specjalizacja. Szybkość.
              <br />
              <span className="accent">Polski głos</span>, który brzmi jak
              człowiek.
            </h2>
            <p className="section-lead">
              Nie jesteśmy agencją od wszystkiego. Robimy jedną rzecz:
              <br />
              Voice Agentów AI dla prywatnych placówek medycznych.
            </p>
          </div>

          <div className="diff-table">
            <div className="diff-row diff-head">
              <div></div>
              <div>Fonivo</div>
              <div>Generyczne voice AI</div>
            </div>
            <div className="diff-row">
              <div>Specjalizacja</div>
              <div>
                <span className="diff-good">Tylko placówki medyczne</span>
              </div>
              <div>Wszystko - od banków po sklepy</div>
            </div>
            <div className="diff-row">
              <div>Czas wdrożenia</div>
              <div>
                <span className="diff-good">14 dni</span>
              </div>
              <div>8–12 tygodni</div>
            </div>
            <div className="diff-row">
              <div>Naturalność głosu</div>
              <div>
                <span className="diff-good">Brzmi jak człowiek</span>
              </div>
              <div>Słychać, że to bot</div>
            </div>
            <div className="diff-row">
              <div>Twój opiekun</div>
              <div>
                <span className="diff-good">
                  Jedna osoba, bezpośredni kontakt
                </span>
              </div>
              <div>Korpo-support, system ticketowy</div>
            </div>
            <div className="diff-row">
              <div>Język</div>
              <div>
                <span className="diff-good">Polski natywnie</span>
              </div>
              <div>Tłumaczone z angielskiego</div>
            </div>
            <div className="diff-row">
              <div>Klonowanie głosu</div>
              <div>
                <span className="diff-good">
                  Możliwość głosu Twojej recepcjonistki lub Twój
                </span>
              </div>
              <div>Tylko generyczne głosy z biblioteki</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CALCULATOR ============== */}
      <section id="cta">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Kalkulator strat</span>
            <h2 className="section-title">
              Sprawdź, ile pacjentów <span className="accent">tracisz</span> co
              miesiąc.
            </h2>
            <p className="section-lead">
              Trzy suwaki, konkretny wynik. Po obliczeniu zarezerwuj demo,
              <br />
              na rozmowie skroimy agenta dla Twojej kliniki.
            </p>
          </div>

          <div className="calc-card">
            <div className="calc-grid">
              <div>
                <div className="calc-input">
                  <label>
                    Ile telefonów dziennie odbiera Twoja recepcja?
                  </label>
                  <div className="calc-row">
                    <input
                      type="range"
                      ref={callsRef}
                      min={1}
                      max={500}
                      step={5}
                      defaultValue={80}
                      onInput={recalc}
                    />
                    <div className="calc-value" ref={callsValRef}>
                      80
                    </div>
                  </div>
                </div>
                <div className="calc-input">
                  <label>Średnia wartość pierwszej wizyty (zł)?</label>
                  <div className="calc-row">
                    <input
                      type="range"
                      ref={valueRef}
                      min={100}
                      max={2000}
                      step={50}
                      defaultValue={500}
                      onInput={recalc}
                    />
                    <div className="calc-value" ref={valueValRef}>
                      500
                    </div>
                  </div>
                </div>
                <div className="calc-input">
                  <label>
                    Ile godzin dziennie Twoja klinika jest otwarta?
                  </label>
                  <div className="calc-row">
                    <input
                      type="range"
                      ref={daysRef}
                      min={6}
                      max={16}
                      step={1}
                      defaultValue={12}
                      onInput={recalc}
                    />
                    <div className="calc-value" ref={daysValRef}>
                      12h
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="calc-result">
                  <div className="label">
                    Szacowany miesięczny przychód, który tracisz
                  </div>
                  <div className="big-number">
                    <span ref={lossRef}>42 000</span>
                    <span className="currency">zł</span>
                  </div>
                  <div className="sub" ref={visitsRef}>
                    to ok. <strong>84 wizyty miesięcznie</strong>, które
                    przepadają w stratosferze.
                  </div>

                  <a href="https://calendly.com/kontakt-fonivo/30min" target="_blank" rel="noopener noreferrer" className="calc-cta">
                    Zarezerwuj demo
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>

                  <p className="calc-disclaimer">
                    Kalkulacja zakłada 22 dni robocze, recepcję obsługującą
                    telefony przez 8h dziennie oraz branżowy wskaźnik
                    utraconych połączeń. Rzeczywiste wyniki mogą się różnić.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== AUDIENCE ============== */}
      <section id="audience">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">Dla kogo</span>
            <h2 className="section-title">
              Pracujemy z prywatnymi{" "}
              <span className="accent">klinikami medycznymi</span>.
            </h2>
            <p className="section-lead">
              Każda placówka, gdzie liczy się każda umówiona wizyta i każdy
              nieobsłużony telefon
              <br />
              to konkretna strata.
            </p>
          </div>

          <div className="audience-grid">
            <div className="aud-card">
              <h4>Stomatologia</h4>
              <span className="badge">Główny segment</span>
            </div>
            <div className="aud-card">
              <h4>Medycyna estetyczna</h4>
              <span className="badge">Aktywnie</span>
            </div>
            <div className="aud-card">
              <h4>Dermatologia</h4>
              <span className="badge">Aktywnie</span>
            </div>
            <div className="aud-card">
              <h4>Weterynaria</h4>
              <span className="badge">Aktywnie</span>
            </div>
            <div className="aud-card soon">
              <h4>Ginekologia</h4>
              <span className="badge">Wkrótce</span>
            </div>
            <div className="aud-card soon">
              <h4>Psychoterapia</h4>
              <span className="badge">Wkrótce</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">
              Odpowiedzi na pytania,
              <br />
              które najczęściej <span className="accent">słyszymy</span>.
            </h2>
          </div>

          <div className="faq-list">
            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) => toggleFaq(e.currentTarget)}
              >
                <span>Jak w praktyce działa Fonivo?</span>
                <span className="faq-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  System integruje się z Twoją linią telefoniczną. Gdy ktoś
                  dzwoni, AI odbiera, prowadzi rozmowę zgodnie z Twoimi
                  standardami i zapisuje wizytę w kalendarzu.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) => toggleFaq(e.currentTarget)}
              >
                <span>
                  Czy poradzi sobie z nagłymi przypadkami, np. ostrym bólem?
                </span>
                <span className="faq-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Tak. Fonivo potrafi priorytetyzować połączenia i w razie
                  nagłych sytuacji natychmiast przekazać rozmowę do Twojego
                  personelu lub na linię dyżurną. Każdy scenariusz pilności
                  konfigurujemy razem z Tobą.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) => toggleFaq(e.currentTarget)}
              >
                <span>Czy wdrożenie jest skomplikowane?</span>
                <span className="faq-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Nie. Całą konfigurację i połączenie z kalendarzem wykonujemy
                  my. Ty otrzymujesz gotowe, działające rozwiązanie. Jedyne
                  czego potrzebujemy od Ciebie to informacje o Twojej klinice
                  na pierwszej rozmowie.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) => toggleFaq(e.currentTarget)}
              >
                <span>Czy agent brzmi jak robot?</span>
                <span className="faq-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Absolutnie nie. Wykorzystujemy najbardziej zaawansowane modele
                  głosowe dostępne na rynku, które zachowują naturalną
                  intonację i płynność rozmowy. Możemy także za Twoją zgodą
                  sklonować głos recepcjonistki lub Twój, żeby agent brzmiał
                  dokładnie jak ktoś z Twojego zespołu.
                </div>
              </div>
            </div>

            <div className="faq-item">
              <button
                className="faq-question"
                onClick={(e) => toggleFaq(e.currentTarget)}
              >
                <span>
                  Czy Fonivo obsługuje połączenia po godzinach i w weekendy?
                </span>
                <span className="faq-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Tak. Fonivo działa 24 godziny na dobę, 7 dni w tygodniu, 365
                  dni w roku. Nigdy nie przegapisz telefonu od pacjenta, nawet
                  gdy śpisz, masz weekend lub urlop.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section>
        <div className="wrap">
          <div className="final-card">
            <h2>
              Sprawdź, ile pacjentów{" "}
              <span className="accent">odzyskasz</span> z Fonivo.
            </h2>
            <p className="lead">
              Zarezerwuj 30 minut. Porozmawiamy o Twojej klinice. Pokażemy
              konkretną kalkulację i zaproponujemy spersonalizowanego agenta.
            </p>
            <a href="https://calendly.com/kontakt-fonivo/30min" target="_blank" rel="noopener noreferrer" className="final-cta">
              Zarezerwuj demo
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <div className="final-meta">
              Bez prezentacji handlowej. Bez zobowiązań.
            </div>
          </div>
        </div>
      </section>

      {/* ============== CONTACT ============== */}
      <section id="contact">
        <div className="wrap">
          <div className="contact-card">
            <div style={{ textAlign: "center" }}>
              <span className="section-eyebrow">Kontakt</span>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(1.625rem,3.5vw,2.25rem)" }}
              >
                Zarezerwuj rozmowę
              </h2>
              <p className="section-lead">
                Wybierz termin który Ci pasuje. 30 minut, konkretna rozmowa o
                Twojej klinice.
              </p>
            </div>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/kontakt-fonivo/30min?hide_gdpr_banner=1&background_color=f8fafc&text_color=0f172a&primary_color=3b82f6"
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <div className="logo">
                <img src="/logo.png" alt="Fonivo" className="logo-img" />
              </div>
              <p>Fonivo Voice AI dla prywatnych placówek medycznych.</p>
            </div>
            <div className="foot-col">
              <h5>Produkt</h5>
              <ul>
                <li>
                  <a href="#how">Wdrożenie</a>
                </li>
                <li>
                  <a href="#audience">Branże</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Firma</h5>
              <ul>
                <li>
                  <a href="#contact">Kontakt</a>
                </li>
                <li>
                  <a href="#cta">Demo</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Prawne</h5>
              <ul>
                <li>
                  <a href="/polityka-prywatnosci">Polityka prywatności</a>
                </li>
                <li>
                  <a href="/regulamin">Regulamin</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2026 Fonivo. Wszystkie prawa zastrzeżone.</div>
            <div>kontakt@fonivo.pl</div>
          </div>
        </div>
      </footer>
    </>
  );
}
