import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin – Fonivo",
  description: "Regulamin serwisu fonivo.pl",
};

export default function Regulamin() {
  return (
    <>
      {/* ============== NAV ============== */}
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo logo-only">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Fonivo" className="logo-img" />
          </a>
          <div className="nav-links">
            <a href="/#how">Wdrożenie</a>
            <a href="/#audience">Branże</a>
            <a href="/#faq">FAQ</a>
            <a href="/#contact">Kontakt</a>
          </div>
          <a href="https://calendly.com/kontakt-fonivo/30min" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Zarezerwuj demo&nbsp;&nbsp;→
          </a>
        </div>
      </nav>

      {/* ============== CONTENT ============== */}
      <div className="legal-page">
        <div className="legal-wrap">
          <h1>Regulamin serwisu fonivo.pl</h1>
          <p className="legal-date">Ostatnia aktualizacja: 10 maja 2026 r.</p>

          <h2>1. Postanowienia ogólne</h2>
          <p>
            1.1. Niniejszy Regulamin określa zasady korzystania z serwisu
            internetowego dostępnego pod adresem fonivo.pl (dalej:
            &ldquo;Serwis&rdquo;).
          </p>
          <p>
            1.2. Właścicielem i operatorem Serwisu jest{" "}
            <strong>Kacper Dziechcierewicz</strong>, prowadzący działalność
            gospodarczą pod nazwą <strong>dezzermedia</strong>, ul. Słoneczna
            3a, 72-310 Płoty, NIP: 8571936578 (dalej:
            &ldquo;Usługodawca&rdquo;).
          </p>
          <p>1.3. Kontakt z Usługodawcą: kontakt@fonivo.pl</p>
          <p>
            1.4. Korzystanie z Serwisu oznacza akceptację niniejszego
            Regulaminu.
          </p>

          <h2>2. Rodzaj i zakres usług</h2>
          <p>2.1. Za pośrednictwem Serwisu Usługodawca:</p>
          <ul>
            <li>
              prezentuje informacje o usłudze Fonivo (voice agent AI dla
              prywatnych placówek medycznych)
            </li>
            <li>
              umożliwia kontakt za pośrednictwem formularza kontaktowego
            </li>
            <li>
              umożliwia rezerwację prezentacji demo za pośrednictwem usługi
              Calendly
            </li>
            <li>
              udostępnia kalkulator szacunkowy do orientacyjnego obliczenia
              potencjalnych strat
            </li>
          </ul>
          <p>
            2.2. Serwis ma charakter informacyjny i służy do nawiązania kontaktu
            handlowego. Serwis nie stanowi oferty handlowej w rozumieniu art. 66
            Kodeksu cywilnego.
          </p>

          <h2>3. Warunki korzystania z Serwisu</h2>
          <p>
            3.1. Do korzystania z Serwisu wymagane jest urządzenie z dostępem do
            internetu oraz przeglądarka internetowa obsługująca JavaScript i
            pliki cookies.
          </p>
          <p>3.2. Korzystanie z Serwisu jest bezpłatne.</p>
          <p>
            3.3. Użytkownik zobowiązuje się do korzystania z Serwisu w sposób
            zgodny z prawem, niniejszym Regulaminem oraz dobrymi obyczajami.
          </p>
          <p>
            3.4. Zabronione jest dostarczanie za pośrednictwem Serwisu treści o
            charakterze bezprawnym.
          </p>

          <h2>4. Formularz kontaktowy</h2>
          <p>
            4.1. Użytkownik może przesłać zapytanie za pośrednictwem formularza
            kontaktowego dostępnego w Serwisie.
          </p>
          <p>
            4.2. Przesłanie formularza wymaga podania: imienia i nazwiska, nazwy
            kliniki oraz adresu email. Podanie numeru telefonu i treści
            wiadomości jest dobrowolne.
          </p>
          <p>
            4.3. Dane podane w formularzu przetwarzane są zgodnie z Polityką
            Prywatności dostępną pod adresem fonivo.pl/polityka-prywatnosci.
          </p>
          <p>
            4.4. Usługodawca dołoży starań, aby odpowiedzieć na zapytanie w
            ciągu 24 godzin roboczych, jednak nie gwarantuje konkretnego czasu
            odpowiedzi.
          </p>

          <h2>5. Kalkulator</h2>
          <p>
            5.1. Kalkulator dostępny w Serwisie ma charakter wyłącznie
            orientacyjny i poglądowy.
          </p>
          <p>
            5.2. Wyniki kalkulatora oparte są na uśrednionych danych branżowych
            i nie stanowią gwarancji rzeczywistych rezultatów.
          </p>
          <p>
            5.3. Usługodawca nie ponosi odpowiedzialności za decyzje podjęte na
            podstawie wyników kalkulatora.
          </p>

          <h2>6. Własność intelektualna</h2>
          <p>
            6.1. Wszelkie treści zamieszczone w Serwisie, w tym teksty, grafiki,
            logotypy, zdjęcia, układ strony oraz oprogramowanie, stanowią
            własność Usługodawcy lub są wykorzystywane na podstawie odpowiednich
            licencji i podlegają ochronie prawnej.
          </p>
          <p>
            6.2. Kopiowanie, modyfikowanie lub rozpowszechnianie treści Serwisu
            bez zgody Usługodawcy jest zabronione.
          </p>

          <h2>7. Odpowiedzialność</h2>
          <p>
            7.1. Usługodawca dokłada starań, aby informacje zamieszczone w
            Serwisie były aktualne i prawidłowe, jednak nie gwarantuje ich
            kompletności ani bezbłędności.
          </p>
          <p>
            7.2. Usługodawca nie ponosi odpowiedzialności za przerwy w dostępie
            do Serwisu wynikające z przyczyn technicznych, konserwacji lub siły
            wyższej.
          </p>
          <p>
            7.3. Usługodawca nie ponosi odpowiedzialności za treści i działanie
            serwisów zewnętrznych, do których mogą prowadzić linki zamieszczone w
            Serwisie (w tym Calendly).
          </p>

          <h2>8. Reklamacje</h2>
          <p>
            8.1. Reklamacje dotyczące działania Serwisu należy kierować na
            adres: kontakt@fonivo.pl
          </p>
          <p>
            8.2. Reklamacja powinna zawierać opis problemu oraz dane kontaktowe
            umożliwiające udzielenie odpowiedzi.
          </p>
          <p>
            8.3. Usługodawca rozpatrzy reklamację w terminie 14 dni od jej
            otrzymania.
          </p>

          <h2>9. Zmiana Regulaminu</h2>
          <p>
            9.1. Usługodawca zastrzega sobie prawo do zmiany Regulaminu.
            Zmieniony Regulamin zostanie opublikowany w Serwisie.
          </p>
          <p>
            9.2. Data ostatniej aktualizacji znajduje się na górze dokumentu.
          </p>

          <h2>10. Postanowienia końcowe</h2>
          <p>
            10.1. W sprawach nieuregulowanych niniejszym Regulaminem
            zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu
            cywilnego oraz ustawy o świadczeniu usług drogą elektroniczną.
          </p>
          <p>
            10.2. Ewentualne spory wynikające z korzystania z Serwisu będą
            rozstrzygane przez sąd właściwy dla siedziby Usługodawcy.
          </p>
          <p>
            10.3. Niniejszy Regulamin obowiązuje od dnia 10 maja 2026 r.
          </p>
        </div>
      </div>

      {/* ============== FOOTER ============== */}
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-brand">
              <div className="logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Fonivo" className="logo-img" />
              </div>
              <p>Fonivo Voice AI dla prywatnych placówek medycznych.</p>
            </div>
            <div className="foot-col">
              <h5>Produkt</h5>
              <ul>
                <li>
                  <a href="/#how">Wdrożenie</a>
                </li>
                <li>
                  <a href="/#audience">Branże</a>
                </li>
                <li>
                  <a href="/#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Firma</h5>
              <ul>
                <li>
                  <a href="/#contact">Kontakt</a>
                </li>
                <li>
                  <a href="/#cta">Demo</a>
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
