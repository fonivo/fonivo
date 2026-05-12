import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności – Fonivo",
  description: "Polityka prywatności serwisu fonivo.pl",
};

export default function PolitykaPrywatnosci() {
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
          <h1>Polityka Prywatności</h1>
          <p className="legal-date">Ostatnia aktualizacja: 10 maja 2026 r.</p>

          <h2>1. Administrator danych</h2>
          <p>Administratorem Twoich danych osobowych jest:</p>
          <p>
            <strong>Kacper Dziechcierewicz</strong>, prowadzący działalność
            gospodarczą pod nazwą <strong>dezzermedia</strong>
            <br />
            Adres: ul. Słoneczna 3a, 72-310 Płoty
            <br />
            NIP: 8571936578
            <br />
            Email: kontakt@fonivo.pl
          </p>

          <h2>2. Jakie dane zbieramy</h2>
          <p>
            Zbieramy dane osobowe, które sam nam przekazujesz za pośrednictwem
            formularza kontaktowego na stronie fonivo.pl:
          </p>
          <ul>
            <li>Imię i nazwisko</li>
            <li>Nazwa kliniki</li>
            <li>Adres email</li>
            <li>Numer telefonu (opcjonalnie)</li>
            <li>Treść wiadomości (opcjonalnie)</li>
          </ul>

          <h2>3. W jakim celu przetwarzamy dane</h2>
          <p>Twoje dane przetwarzamy w celu:</p>
          <ul>
            <li>
              <strong>Odpowiedzi na Twoje zapytanie</strong> i kontaktu w
              sprawie umówienia prezentacji demo (podstawa prawna: art. 6 ust. 1
              lit. b RODO, podjęcie działań przed zawarciem umowy)
            </li>
            <li>
              <strong>Prowadzenia korespondencji</strong> związanej z Twoim
              zapytaniem (podstawa prawna: art. 6 ust. 1 lit. f RODO, prawnie
              uzasadniony interes administratora)
            </li>
          </ul>

          <h2>4. Jak długo przechowujemy dane</h2>
          <p>
            Dane z formularza kontaktowego przechowujemy przez okres prowadzenia
            korespondencji oraz 12 miesięcy od ostatniego kontaktu. Po tym
            czasie dane są usuwane, chyba że nawiążemy współpracę, wtedy dane
            przechowujemy przez okres trwania umowy oraz 5 lat po jej
            zakończeniu (obowiązek podatkowy).
          </p>

          <h2>5. Komu przekazujemy dane</h2>
          <p>Twoje dane mogą być przekazywane następującym podmiotom:</p>
          <ul>
            <li>
              <strong>Dostawca hostingu i infrastruktury</strong>: Vercel Inc.
              (dane mogą być przetwarzane na serwerach w UE i USA, Vercel stosuje
              standardowe klauzule umowne)
            </li>
            <li>
              <strong>Dostawca usługi rezerwacji spotkań</strong>: Calendly LLC
              (w zakresie umawiania prezentacji demo)
            </li>
            <li>
              <strong>Dostawca bazy danych</strong>: podmiot przechowujący dane z
              formularza (serwery w UE)
            </li>
          </ul>
          <p>Nie sprzedajemy Twoich danych osobowych podmiotom trzecim.</p>

          <h2>6. Pliki cookies i narzędzia analityczne</h2>
          <p>Strona fonivo.pl może wykorzystywać:</p>
          <ul>
            <li>
              <strong>Pliki cookies techniczne</strong>: niezbędne do
              prawidłowego działania strony. Nie wymagają zgody.
            </li>
            <li>
              <strong>Vercel Analytics</strong>: anonimowe dane o ruchu na
              stronie (bez plików cookies, zgodne z RODO).
            </li>
            <li>
              <strong>Meta Pixel (Facebook)</strong>: jeśli jest aktywny,
              wykorzystywany do pomiaru skuteczności reklam. Wymaga Twojej zgody.
              Dane mogą być przekazywane do Meta Platforms Ireland Ltd.
            </li>
          </ul>
          <p>
            Możesz zarządzać plikami cookies w ustawieniach przeglądarki.
            Wyłączenie cookies technicznych może wpłynąć na działanie strony.
          </p>

          <h2>7. Twoje prawa</h2>
          <p>Masz prawo do:</p>
          <ul>
            <li>
              <strong>Dostępu</strong> do swoich danych osobowych
            </li>
            <li>
              <strong>Sprostowania</strong> nieprawidłowych danych
            </li>
            <li>
              <strong>Usunięcia</strong> danych (&ldquo;prawo do bycia
              zapomnianym&rdquo;)
            </li>
            <li>
              <strong>Ograniczenia</strong> przetwarzania
            </li>
            <li>
              <strong>Przenoszenia</strong> danych
            </li>
            <li>
              <strong>Sprzeciwu</strong> wobec przetwarzania danych opartego na
              prawnie uzasadnionym interesie
            </li>
          </ul>
          <p>
            Aby skorzystać z tych praw, napisz na adres: kontakt@fonivo.pl
          </p>
          <p>
            Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony
            Danych Osobowych (ul. Stawki 2, 00-193 Warszawa, www.uodo.gov.pl).
          </p>

          <h2>8. Przekazywanie danych poza EOG</h2>
          <p>
            Niektórzy z naszych dostawców usług (Vercel, Calendly) mogą
            przetwarzać dane poza Europejskim Obszarem Gospodarczym. W takich
            przypadkach transfer danych odbywa się na podstawie standardowych
            klauzul umownych zatwierdzonych przez Komisję Europejską lub decyzji
            o adekwatności.
          </p>

          <h2>9. Bezpieczeństwo danych</h2>
          <p>
            Stosujemy odpowiednie środki techniczne i organizacyjne w celu
            ochrony Twoich danych, w tym szyfrowanie transmisji (SSL/TLS),
            kontrolę dostępu i regularne przeglądy bezpieczeństwa.
          </p>

          <h2>10. Zmiany polityki prywatności</h2>
          <p>
            Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki
            Prywatności. O istotnych zmianach poinformujemy poprzez zamieszczenie
            nowej wersji na stronie fonivo.pl. Data ostatniej aktualizacji
            znajduje się na górze dokumentu.
          </p>

          <h2>Kontakt</h2>
          <p>
            W sprawach dotyczących ochrony danych osobowych skontaktuj się z
            nami:
            <br />
            Email: kontakt@fonivo.pl
            <br />
            Adres: ul. Słoneczna 3a, 72-310 Płoty
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
